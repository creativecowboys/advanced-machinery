import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Search } from 'lucide-react';

interface HeroSearchProps {
    onSearch: (query: string) => void;
}

const PILLS = [
    { label: 'Melamine saw blade', query: 'What saw blade do I need for cutting melamine panels?' },
    { label: 'PCD diamond tools', query: 'Tell me about your PCD diamond tooling options' },
    { label: 'Biesse edgebander bits', query: 'I need edgebander tooling for a Biesse machine' },
    { label: 'CNC compression bits', query: 'What CNC compression router bits do you carry?' },
    { label: 'Metric boring bits', query: 'What metric boring bits do you stock?' },
];

export default function HeroSearch({ onSearch }: HeroSearchProps) {
    const [query, setQuery] = useState('');
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(text?: string) {
        const q = (text ?? query).trim();
        if (!q) return;
        onSearch(q);
        setQuery('');
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="w-full max-w-3xl mx-auto"
        >
            {/* Search Input — prominent, tall */}
            <div
                className={`flex items-center bg-white transition-all duration-200 ${focused
                        ? 'shadow-[0_0_0_3px_rgba(30,115,200,0.5),0_20px_60px_rgba(0,0,0,0.4)]'
                        : 'shadow-[0_8px_40px_rgba(0,0,0,0.35)]'
                    }`}
            >
                <div className="pl-5 pr-3 shrink-0">
                    <Search size={20} className={`transition-colors ${focused ? 'text-[#1E73C8]' : 'text-[#999]'}`} />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    placeholder='Ask anything — "I need a blade for cutting 18mm melamine..."'
                    className="flex-1 bg-transparent py-5 px-2 text-[#1A1A1A] placeholder:text-[#BBB] text-base font-medium outline-none"
                />
                <button
                    onClick={() => handleSubmit()}
                    disabled={!query.trim()}
                    className="m-2 bg-[#1E73C8] text-white font-black uppercase text-xs tracking-widest px-6 py-3.5 flex items-center gap-2 hover:bg-[#155fa0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                >
                    <Sparkles size={14} />
                    Ask AI
                </button>
            </div>

            {/* Suggestion Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
                {PILLS.map(pill => (
                    <button
                        key={pill.label}
                        onClick={() => handleSubmit(pill.query)}
                        className="text-[11px] font-bold text-white/70 border border-white/25 px-3.5 py-1.5 hover:bg-white/15 hover:text-white hover:border-white/50 transition-all backdrop-blur-sm"
                    >
                        {pill.label}
                    </button>
                ))}
            </div>

            {/* Subtext */}
            <p className="text-center text-white/40 text-xs font-medium mt-4 tracking-wide">
                Powered by Gemini AI · Ask in plain English
            </p>
        </motion.div>
    );
}
