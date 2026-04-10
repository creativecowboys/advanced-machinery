export interface Product {
  id: string;
  name: string;
  price: string;
  priceFrom?: boolean;
  requestQuote?: boolean;
  image: string;
  category: string;
  description: string;
  url: string;
  brand?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  heroImage?: string;
  subcategories: string[];
  products: Product[];
  isMachinery?: boolean;
}

// ─── Image URL constants ──────────────────────────────────────────────────────
// Advanced Machinery CDN (confirmed accessible)
const AM_CDN = 'https://d2j6dbq0eux0bg.cloudfront.net/images/13162143';
// Advanced Machinery Wixstatic product images
const AM_WIX = 'https://static.wixstatic.com/media';
// Homag.com press images
const HOMAG = 'https://www.homag.com/fileadmin/_processed_';
// SawStop.com
const SAWSTOP = 'https://www.sawstop.com/wp-content/uploads';
// Carbide Tooling (tooling product images — all confirmed working)
const CT = 'https://www.carbidetooling.net/web/image/product.template';

export const categories: Category[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // MACHINERY CATEGORIES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'cnc-routers',
    name: 'CNC Routers',
    isMachinery: true,
    description: 'Industrial CNC routers engineered for precision panel processing, cabinet making, and complex 3D machining. Featuring Homag Centateq and Ironwood machines with full 5-axis capability.',
    // Category card image — CNC Routers overview from AM CDN
    image: `${AM_CDN}/991804844.jpg`,
    heroImage: '/hero-cnc-routers.jpg',
    subcategories: ['Nested Base CNC', 'Pod & Rail CNC', '5-Axis CNC', 'Entry-Level CNC', 'Homag Centateq', 'Ironwood'],
    products: [
      {
        id: 'cnc-r1',
        name: 'Homag Centateq P-210 CNC Router',
        price: 'Request Quote',
        requestQuote: true,
        // Homag Centateq P-210 from Homag.com press assets
        image: `${HOMAG}/b/1/csm_cnc-processing-center-centateq-p-210_eb6d8fd5f3.jpg`,
        category: 'cnc-routers',
        brand: 'Homag',
        description: 'The Centateq P-210 is a pod & rail CNC machining center designed for medium to large cabinet shops. Features quick part change-over, Homag software integration, and exceptional reliability.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
      {
        id: 'cnc-r2',
        name: 'Homag Centateq N-300 Nested Base CNC',
        price: 'Request Quote',
        requestQuote: true,
        // Homag Centateq P-110 (nested base profile) from Homag.com
        image: `${HOMAG}/b/5/csm_cnc-processing-center-centateq-p-110_01_a07038f068.jpg`,
        category: 'cnc-routers',
        brand: 'Homag',
        description: 'High-production nested base CNC optimized for panel processing. Ideal for cabinet manufacturers running sheet goods. Excellent throughput and cut quality.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
      {
        id: 'cnc-r3',
        name: 'Ironwood CNC 5x10 Router Table',
        price: 'Request Quote',
        requestQuote: true,
        // General CNC routers overview from AM CDN
        image: `${AM_CDN}/991804844.jpg`,
        category: 'cnc-routers',
        brand: 'Ironwood',
        description: 'A value-focused 5×10 CNC router ideal for growing shops. Strong steel construction, user-friendly controls, and full Advanced Machinery service support.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
    ],
  },

  {
    id: 'edgebanders',
    name: 'Edgebanders',
    isMachinery: true,
    description: 'Automatic and semi-automatic edgebanding machines from leading manufacturers. From entry-level PUR edgebanders to high-speed production lines with laser edge technology.',
    // Category card image — Homag EDGETEQ S-240 mid-range edgebander
    image: 'https://www.homag.com/fileadmin/_processed_/a/9/csm_edge-banding-machine-EDGETEQ-S-240_188d0f02e4.jpg',
    heroImage: '/hero-edgebanders.jpg',
    subcategories: ['PUR Edgebanders', 'EVA Edgebanders', 'Contour Edgebanders', 'Ironwood', 'Stiles'],
    products: [
      {
        id: 'eb-m1',
        name: 'Ironwood PUR Edgebander — Entry Series',
        price: 'Request Quote',
        requestQuote: true,
        // Homag EDGETEQ S-200 — entry-level edgebander (good proxy for Ironwood entry series)
        image: 'https://www.homag.com/fileadmin/_processed_/e/6/csm_edge-banding-machine-EDGETEQ-S-200_29296c440d.jpg',
        category: 'edgebanders',
        brand: 'Ironwood',
        description: 'A powerful entry-level PUR edgebander with pre-mill, gluing, end trim, flush trim, scraping, and buffing stations. Ideal for shops stepping up to automated edgebanding.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
      {
        id: 'eb-m2',
        name: 'Homag Ambition 1680 Edgebander',
        price: 'Request Quote',
        requestQuote: true,
        // Homag EDGETEQ S-300 — mid-range edgebander matching Ambition 1680 tier
        image: 'https://www.homag.com/fileadmin/_processed_/8/2/csm_edge-banding-machine-EDGETEQ-S-300_c07c992a63.jpg',
        category: 'edgebanders',
        brand: 'Homag',
        description: 'Mid-range Homag edgebander with combined EVA/PUR gluing system, zero-joint capability, and integrated scraping stations for superior edge quality.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
    ],
  },

  {
    id: 'panel-saws',
    name: 'Panel Saws',
    isMachinery: true,
    description: 'Beam saws, vertical panel saws, and sliding table saws for precise panel cutting. SawStop safety technology and industrial-grade Altendorf and Ironwood models available.',
    // Category card image — Panel/Beam Saws from AM CDN
    image: `${AM_CDN}/991818285.jpg`,
    heroImage: '/hero-panel-saws.jpg',
    subcategories: ['Beam Saws', 'Vertical Panel Saws', 'Sliding Table Saws', 'SawStop', 'Altendorf'],
    products: [
      {
        id: 'ps-1',
        name: 'SawStop 5.0HP Industrial Cabinet Saw',
        price: '$5,373',
        // SawStop Industrial Cabinet Saw from SawStop.com — full size
        image: `${SAWSTOP}/2022/02/IndustrialCabinetSaw-e1643920309929.png`,
        category: 'panel-saws',
        brand: 'SawStop',
        description: 'The industry-leading table saw with SawStop flesh-detection safety technology. 5HP motor, 52" rip capacity, cast iron table. The safest table saw ever built.',
        url: 'https://www.advanced-machinery.com/online-store/p/sawstop-industrial-cabinet-saw',
      },
      {
        id: 'ps-2',
        name: 'SawStop 3.0HP Professional Cabinet Saw',
        price: '$3,215',
        // SawStop Contractor Saw from SawStop.com
        image: `${SAWSTOP}/2025/09/CNS52ATG-430x324.jpg`,
        category: 'panel-saws',
        brand: 'SawStop',
        description: '3HP SawStop Professional saw with flesh-detection safety. 36" or 52" fence options, T-GLIDE fence system, and OSHA-compliant blade guard system.',
        url: 'https://www.advanced-machinery.com/online-store/p/sawstop-professional-cabinet-saw',
      },
      {
        id: 'ps-3',
        name: 'Altendorf WA80 Sliding Table Saw',
        price: 'Request Quote',
        requestQuote: true,
        // Altendorf / Used machinery image from AM CDN
        image: `${AM_CDN}/1542874395.jpg`,
        category: 'panel-saws',
        brand: 'Altendorf',
        description: 'German-engineered sliding table saw with 3200mm crosscut capacity. Precision fence, motorized scoring unit, and the legendary Altendorf build quality.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
    ],
  },

  {
    id: 'wide-belt-sanders',
    name: 'Wide Belt Sanders',
    isMachinery: true,
    description: 'Wide belt and combination sanding machines for panels, solid wood, and veneer. Ironwood and Homag Sandteq models offer unmatched surface quality at every production level.',
    // Category card image — Homag Sandteq wide belt sander category hero
    image: 'https://www.homag.com/fileadmin/product/sanding-machines/homag-sanding-breitbandschleifmaschinen.jpg',
    heroImage: '/hero-wide-belt-sanders.jpg',
    subcategories: ['Widebelt Sanders', 'Combination Sanders', 'Drum Sanders', 'Ironwood', 'Sandteq'],
    products: [
      {
        id: 'wb-1',
        name: 'Ironwood 37" Widebelt Sander',
        price: 'Request Quote',
        requestQuote: true,
        // Ironwood S100 Series widebelt sander — from ironwoodmachinery.com
        image: 'https://www.ironwoodmachinery.com/cdn/shop/products/11230718_900x.jpg?v=1631630053',
        category: 'wide-belt-sanders',
        brand: 'Ironwood',
        description: 'A 37" widebelt sander with combination head (drum + pad) for sanding panels and solid wood. Variable speed feed, digital display, and robust construction.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
      {
        id: 'wb-2',
        name: 'Homag Sandteq W-100 Widebelt Sander',
        price: 'Request Quote',
        requestQuote: true,
        // Homag Sandteq category hero image from homag.com
        image: 'https://www.homag.com/fileadmin/product/sanding-machines/homag-sanding-breitbandschleifmaschinen.jpg',
        category: 'wide-belt-sanders',
        brand: 'Sandteq',
        description: 'High-performance Homag Sandteq widebelt sander with calibration drum and fine-finishing pad. Designed for large-scale panel sanding at production speed.',
        url: 'https://www.advanced-machinery.com/online-store/Machinery-c33205017',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TOOLING CATEGORIES
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: 'cnc-router-bits',
    name: 'CNC Router Bits',
    description: 'High-performance CNC router bits for woodworking, cabinet making, and plastics fabrication. Compression, spiral, straight, and specialty profiles from Amana Tool and our house brands.',
    image: `${CT}/7976/image_1024/1-4%22%202%20Flute%20Coated%20Compression%20Router%20Bits%20SMDUD445%20?unique=9acb610`,
    heroImage: '/hero-cnc-router-bits.jpg',
    subcategories: ['Compression Bits', 'Upcut Spirals', 'Downcut Spirals', 'Straight Bits', 'Engraving Bits', 'Ball Nose'],
    products: [
      {
        id: 'rb-1',
        name: '37-01 Engraving CNC Router Bit 1F',
        price: '$32.92',
        image: `${CT}/7964/image_1024/15-32%22%202%20Flute%20Straight%20Bit%20CNC%20Router%20Bits%20SE1024B%20?unique=17c9c73`,
        category: 'cnc-router-bits',
        description: 'Single flute engraving bit for V carving, lettering, and fine detail work. Solid carbide construction.',
        url: 'https://www.advanced-machinery.com/online-store/CNC-Router-Bits-c33294590',
      },
      {
        id: 'rb-2',
        name: '52-280 1/4" CNC Router Bit 2F Upcut',
        price: '$35.00',
        image: `${CT}/7955/image_1024/3-16%22%20Upcut%20O%20Flute%20Router%20Bits%20SOU511%20?unique=7ccf654`,
        category: 'cnc-router-bits',
        description: '1/4" 2-flute upcut spiral router bit. Excellent chip evacuation for MDF, plywood, and hardwood.',
        url: 'https://www.advanced-machinery.com/online-store/CNC-Router-Bits-c33294590',
      },
      {
        id: 'rb-3',
        name: '52-360 1/2" CNC Router Bit 2F Compression',
        price: '$95.85',
        image: `${CT}/7976/image_1024/1-4%22%202%20Flute%20Coated%20Compression%20Router%20Bits%20SMDUD445%20?unique=9acb610`,
        category: 'cnc-router-bits',
        description: '1/2" 2-flute compression router bit for double-sided chip-free cuts in laminated board and melamine.',
        url: 'https://www.advanced-machinery.com/online-store/CNC-Router-Bits-c33294590',
      },
      {
        id: 'rb-4',
        name: '57-360 1/2" CNC Router Bit 2F Downcut',
        price: '$95.80',
        image: `${CT}/7886/image_1024/1-2%22%202%20Flute%20Downcut%20Spiral%20Chip%20Breaker%20SRD260CB`,
        category: 'cnc-router-bits',
        description: '1/2" 2-flute downcut spiral for clean top-surface finishes on composites and veneer panels.',
        url: 'https://www.advanced-machinery.com/online-store/CNC-Router-Bits-c33294590',
      },
      {
        id: 'rb-5',
        name: '60-123EC 3/8" CNC Router Bit 2F Compression',
        price: '$110.35',
        image: `${CT}/7898/image_1024/3-8%22%202%20Flute%20Compression%20Bits%20-%20Max%20Life%20HHDUD539%20?unique=d639439`,
        category: 'cnc-router-bits',
        description: 'Extended-center compression bit in 3/8" diameter. Increased core strength for rigid, chatter-free cutting.',
        url: 'https://www.advanced-machinery.com/online-store/CNC-Router-Bits-c33294590',
      },
      {
        id: 'rb-6',
        name: '37-72 CNC Router Bit 2F Folding',
        price: '$74.78',
        image: `${CT}/7900/image_1024/1-2%22%202%2B2%20Max%20Life%20Compression%20Bit%205-16%22%20Upcut%20HHDUD555%20?unique=d639439`,
        category: 'cnc-router-bits',
        description: 'Specialized folding/dado bit for creating v-grooves and fold lines in sheet goods. Popular for cabinet carcass construction.',
        url: 'https://www.advanced-machinery.com/online-store/CNC-Router-Bits-c33294590',
      },
    ],
  },

  {
    id: 'edgebander-tooling',
    name: 'Edgebander Tooling',
    description: 'Precision edgebander tooling for all major machine brands. Pre-mill units, end snip blades, profile scrapers, buffing wheels, and PCD diamond tooling.',
    image: `${CT}/3989/image_1024/125mm%20End%20Snip%20Saw%20Blades%20for%20Edgebander%20RH%20CTN%20SBE%20125%20RH%20?unique=ce9766e`,
    heroImage: '/hero-edgebander-tooling.jpg',
    subcategories: ['Pre-Mill Heads', 'End Snip Blades', 'Profile Scrapers', 'Buffing Wheels', 'PCD Diamond Units'],
    products: [
      {
        id: 'et-1',
        name: '125mm End Snip Saw Blade for Edgebander RH',
        price: '$85.55',
        image: `${CT}/3989/image_1024/125mm%20End%20Snip%20Saw%20Blades%20for%20Edgebander%20RH%20CTN%20SBE%20125%20RH%20?unique=ce9766e`,
        category: 'edgebander-tooling',
        description: '125mm right-hand end snip saw blade for Brandt, Homag, Biesse, and SCM edgebanders.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'et-2',
        name: '150mm Cotton Buffing Wheel for Edgebander',
        price: '$20.83',
        image: `${CT}/3878/image_1024/150mm%20Cotton%20Buffing%20Wheel%20Edgebander%20Parts%20CTN%2015060%20?unique=9d4f5fc`,
        category: 'edgebander-tooling',
        description: '150mm cotton buffing wheel for edge wax application and glue removal on edgebanding machines.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'et-3',
        name: 'Double Radius Profile Scraper',
        price: '$69.00',
        image: `${CT}/8643/image_1024/Double%20Radius%20Profile%20Scraper?unique=39d06b3`,
        category: 'edgebander-tooling',
        description: 'Double-radius profile scraper for edgebander scraping stations. Fits Brandt, Homag, and other major brands.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'et-4',
        name: 'PCD Diamond Pre-Mill Unit for Biesse',
        price: '$864.12',
        image: `${CT}/3560/image_1024/80mm%20PCD%20Diamond%20Pre%20Mill%20Unit%20for%20Biesse%20Edgebander%20BSE%203165%20?unique=7ac36c8`,
        category: 'edgebander-tooling',
        description: 'Complete PCD diamond pre-mill unit for Biesse Akron edgebanders. Superior surface prep for zero-joint edge quality.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
    ],
  },

  {
    id: 'saw-blades',
    name: 'Saw Blades',
    description: 'Premium saw blades for sliding table saws, beam saws, and scoring operations. Carbide-tipped and PCD diamond options for every material and production volume.',
    image: `${CT}/8017/image_1024/250mm%20Scoring%20Blade%20-%20Leuco%20Brand%20192777%20?unique=2cb8140`,
    heroImage: '/hero-saw-blades.jpg',
    subcategories: ['Main Blades', 'Scoring Blades', 'Diamond PCD Blades', 'Beam Saw Blades'],
    products: [
      {
        id: 'sb-1',
        name: '250mm Scoring Blade',
        price: '$195.25',
        image: `${CT}/8017/image_1024/250mm%20Scoring%20Blade%20-%20Leuco%20Brand%20192777%20?unique=2cb8140`,
        category: 'saw-blades',
        description: '250mm x 3.2/2.2mm x 30mm Z80 TC-F Combi2 Pin Pattern. For melamine and laminated panel cutting.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'sb-2',
        name: '300mm Sliding Table Saw Blade',
        price: '$134.74',
        image: `${CT}/4062/image_1024/300mm%20Sliding%20Table%20Saw%20Blade%20-%20KWS%20Brand%20CTN-SBALT-300%20?unique=c8c25a0`,
        category: 'saw-blades',
        description: '300mm sliding table saw blade. Precision-tensioned plate with alternating top bevel teeth for clean crosscuts.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'sb-3',
        name: '380mm PCD Diamond Main Saw Blade',
        price: '$1,705.79',
        image: `${CT}/4068/image_1024/380mm%20PCD%20Diamond%20Main%20Saw%20Blades%20-%20KWS%20Brand%20CTN-SBD380%20?unique=7372f8e`,
        category: 'saw-blades',
        description: 'PCD Diamond Main Blade 380mm x 4.8mm x 60mm Z72. 15–50x longer service life vs. standard carbide. Fits Holzma B300.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
    ],
  },

  {
    id: 'boring-drill-bits',
    name: 'Boring & Drill Bits',
    description: 'Carbide-tipped and solid carbide metric boring bits for horizontal boring machines. Brad point, V-point, and hinge boring bits for precise cabinetry and furniture construction.',
    image: `${CT}/7961/image_1024/Brad%20Point%20Drill%20Bits?unique=17fa1b0`,
    subcategories: ['Brad Point Bits', 'V-Point Bits', 'Hinge Boring Bits'],
    products: [
      {
        id: 'bd-1',
        name: 'Brad Point Drill Bits — Multi-Size',
        price: '$8.60',
        priceFrom: true,
        image: `${CT}/7961/image_1024/Brad%20Point%20Drill%20Bits?unique=17fa1b0`,
        category: 'boring-drill-bits',
        description: 'Carbide-tipped and solid carbide brad point drill bits in standard metric sizes. Left and right hand available.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'bd-2',
        name: '35mm Hinge Boring Router Bit',
        price: '$24.28',
        priceFrom: true,
        image: `${CT}/7901/image_1024/35mm%20Router%20Bits%20for%20Door%20Hinges?unique=17fa1b0`,
        category: 'boring-drill-bits',
        description: 'Precision 35mm hinge boring bit for European cup hinge installation. Available in 57mm and 70mm depth variants.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'bd-3',
        name: '10 x 70 Carbide Brad Point Right Hand',
        price: '$17.76',
        image: `${CT}/5969/image_1024/10%20x%2070%20Carbide%20Tipped%20Brad%20Point%20Right%20Hand%20SE7010RH%20?unique=4cc4fd5`,
        category: 'boring-drill-bits',
        description: '10mm x 70mm right-hand carbide brad point for clean, accurate entry in horizontal boring operations.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
    ],
  },

  {
    id: 'collets-accessories',
    name: 'Collets & Accessories',
    description: 'ER and Perske collets, shrink-fit toolholders, collet chucks, and CNC tooling accessories. Precision tool holding for every CNC spindle configuration.',
    image: '/product-images/collet-er32-set.png',
    subcategories: ['ER Collets', 'Perske Collets', 'Shrink-Fit Holders', 'Tool Balancing'],
    products: [
      {
        id: 'ca-1',
        name: 'ER32 Precision Collet Set — 18pc',
        price: '$89.00',
        image: '/product-images/collet-er32-set.png',
        category: 'collets-accessories',
        description: 'Complete 18-piece ER32 collet set covering 1/8" to 3/4" shank diameters. Precision-ground to DIN standards.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
      {
        id: 'ca-2',
        name: 'Perske CNC Collet — 1/2" Shank',
        price: '$48.50',
        image: '/product-images/collet-perske.png',
        category: 'collets-accessories',
        description: 'OEM-compatible Perske collet for 1/2" shank CNC router bits. For Perske HF spindles commonly found in Homag and Biesse CNC machines.',
        url: 'https://www.advanced-machinery.com/online-store/Tooling-c33205020',
      },
    ],
  },
];
