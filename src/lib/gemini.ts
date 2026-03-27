import { GoogleGenAI } from '@google/genai';
import { categories } from '../data/products';

const API_KEY = process.env.GEMINI_API_KEY;

// Build a compact product catalog string for the system prompt
function buildCatalogContext(): string {
    return categories.map(cat => {
        const productList = cat.products.map(p =>
            `  - [${p.id}] ${p.name} | ${p.price}${p.priceFrom ? '+' : ''} | ${p.description}`
        ).join('\n');
        return `### ${cat.name}\n${cat.description}\nProducts:\n${productList}`;
    }).join('\n\n');
}

const SYSTEM_PROMPT = `You are a knowledgeable and friendly product specialist for CarbideTooling.net — a specialized supplier of precision cutting tools and tooling solutions for woodworking professionals and industrial machinery operators since 2009.

Your role is to:
1. Answer questions about carbide tooling, woodworking tools, CNC tooling, saw blades, and related topics with genuine expertise
2. Suggest specific products from our catalog when relevant
3. Help users find the right tooling for their application
4. Provide technical guidance on tooling selection, speeds/feeds, and maintenance

IMPORTANT — SPECIAL COMMAND TAGS:
You have two special tags you can include in your responses:

1. PRODUCT SUGGESTIONS — when you want to recommend products, include at the end:
[[PRODUCTS: id1, id2, id3]]
Example: "For cutting melamine panels, I'd recommend our Leuco scoring blades. [[PRODUCTS: sb-1, sb-2]]"

2. ADD TO CART — when a customer clearly says they want to order, buy, add, or purchase a specific product, include:
[[ADD_TO_CART: id1, id2]]
Example: "Great choice! I've added that to your cart. [[ADD_TO_CART: sb-1]]"
Only use ADD_TO_CART when the customer explicitly confirms they want to purchase — not just when browsing.
You can use both tags in the same message if needed.

Only include product IDs that exist in the catalog below. Never invent IDs.

CURRENT PRODUCT CATALOG:
${buildCatalogContext()}

TONE & STYLE:
- Be like a knowledgeable machinist friend — direct, technically accurate, helpful
- Keep answers concise (2-4 sentences max for simple questions)
- Always suggest products when the user's question is clearly about buying/finding tooling
- If unsure about a specific application, ask a clarifying question
- Don't make up products or prices that aren't in the catalog

COMPANY INFO:
- Phone: +1 (844)-808-TOOL
- Email: Sales@carbidetooling.net
- Specialties: CNC tooling, diamond (PCD) tools, saw blades for panel processing, edgebander tooling, metric boring bits
- Brands carried: Leuco, KWS, Biesse-compatible, Holzher-compatible, Simonds`;

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
    productIds?: string[];
}

let genAI: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
    if (!API_KEY) throw new Error('GEMINI_API_KEY is not set. Please create a .env file with your key.');
    if (!genAI) genAI = new GoogleGenAI({ apiKey: API_KEY });
    return genAI;
}

export async function sendMessage(
    history: ChatMessage[],
    userMessage: string,
    onChunk: (chunk: string) => void
): Promise<{ text: string; productIds: string[]; addToCartIds: string[] }> {
    const client = getClient();

    // Convert history to Gemini format
    const geminiHistory = history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
    }));

    const chat = client.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_PROMPT,
        },
        history: geminiHistory,
    });

    const stream = await chat.sendMessageStream({ message: userMessage });

    let fullText = '';
    for await (const chunk of stream) {
        const chunkText = chunk.text ?? '';
        fullText += chunkText;
        onChunk(chunkText);
    }

    // Parse [[PRODUCTS: ...]] tag
    const productMatch = fullText.match(/\[\[PRODUCTS:\s*([^\]]+)\]\]/);
    const productIds = productMatch
        ? productMatch[1].split(',').map(id => id.trim()).filter(Boolean)
        : [];

    // Parse [[ADD_TO_CART: ...]] tag
    const cartMatch = fullText.match(/\[\[ADD_TO_CART:\s*([^\]]+)\]\]/);
    const addToCartIds = cartMatch
        ? cartMatch[1].split(',').map(id => id.trim()).filter(Boolean)
        : [];

    // Strip both tags from the displayed text
    const cleanText = fullText
        .replace(/\[\[PRODUCTS:[^\]]*\]\]/g, '')
        .replace(/\[\[ADD_TO_CART:[^\]]*\]\]/g, '')
        .trim();

    return { text: cleanText, productIds, addToCartIds };
}
