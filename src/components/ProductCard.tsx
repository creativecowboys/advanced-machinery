import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
    index?: number;
    key?: string;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group bg-white border border-[#E0E0E0] overflow-hidden flex flex-col"
        >
            {/* Image */}
            <div className="aspect-square overflow-hidden bg-[#F5F5F5] relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23f0f0f0" width="200" height="200"/><text fill="%23999" font-family="sans-serif" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-black uppercase text-sm leading-tight text-[#1A1A1A] mb-2 line-clamp-2 group-hover:text-[#1E73C8] transition-colors">
                    {product.name}
                </h3>
                <p className="text-xs text-[#777] leading-relaxed mb-4 line-clamp-2 flex-1">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div>
                        {product.priceFrom && (
                            <span className="text-[10px] font-bold uppercase text-[#999] tracking-wide block leading-none mb-0.5">From</span>
                        )}
                        <span className="font-black text-lg text-[#1E73C8]">{product.price}</span>
                    </div>
                    <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#1A2947] text-white text-[11px] font-black uppercase tracking-widest px-3 py-2 hover:bg-[#1E73C8] transition-colors"
                    >
                        Order <ExternalLink size={11} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
