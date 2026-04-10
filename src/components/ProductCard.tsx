import { ShoppingCart, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
    index?: number;
    key?: string;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const { addToCart, isInCart, openCart } = useCart();
    const [justAdded, setJustAdded] = useState(false);
    const inCart = isInCart(product.id);

    function handleAddToCart() {
        addToCart(product.id);
        setJustAdded(true);
        setTimeout(() => {
            openCart();
            setJustAdded(false);
        }, 600);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group bg-white border border-[#E0E0E0] overflow-hidden flex flex-col"
        >
            {/* Image */}
            <div className="aspect-square overflow-hidden relative bg-[#F5F5F5]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500 object-contain p-4"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="%23f0f0f0" width="200" height="200"/><text fill="%23999" font-family="sans-serif" font-size="14" text-anchor="middle" x="100" y="105">No Image</text></svg>';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.brand && (
                    <div className="absolute bottom-3 left-3 bg-[#0F1F3A]/80 text-white text-[9px] font-black uppercase tracking-widest px-2 py-1">
                        {product.brand}
                    </div>
                )}
                {inCart && (
                    <div className="absolute top-3 right-3 bg-[#2E6DB4] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 flex items-center gap-1">
                        <Check size={9} strokeWidth={3} /> In Cart
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-black uppercase text-sm leading-tight text-[#1A1A1A] mb-2 line-clamp-2 group-hover:text-[#2E6DB4] transition-colors">
                    {product.name}
                </h3>
                <p className="text-xs text-[#777] leading-relaxed mb-4 line-clamp-2 flex-1">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto gap-3">
                    <div className="flex-1 min-w-0">
                        {product.priceFrom && (
                            <span className="text-[10px] font-bold uppercase text-[#999] tracking-wide block leading-none mb-0.5">From</span>
                        )}
                        <span className="font-black text-lg text-[#2E6DB4] truncate block">{product.price}</span>
                    </div>
                    <motion.button
                        onClick={handleAddToCart}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest px-3 py-2 transition-colors shrink-0 ${
                            justAdded
                                ? 'bg-green-600 text-white'
                                : inCart
                                ? 'bg-[#2E6DB4] text-white hover:bg-[#1a4f8a]'
                                : 'bg-[#1A2B4A] text-white hover:bg-[#2E6DB4]'
                        }`}
                    >
                        {justAdded ? (
                            <><Check size={11} strokeWidth={3} /> Added</>
                        ) : inCart ? (
                            <><ShoppingCart size={11} /> In Cart</>
                        ) : (
                            <><ShoppingCart size={11} /> Add</>
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
