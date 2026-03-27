import { useState, useRef } from 'react';
import {
  Menu,
  ShoppingCart,
  User,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Settings,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, type Category } from './data/products';
import CategoryPage from './components/CategoryPage';
import AIChat from './components/AIChat';
import { CartProvider, useCart } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import HeroChat from './components/HeroChat';

function AppInner() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  // PCD flagship category image
  const pcdCategory = categories.find(c => c.id === 'diamond-pcd');
  const sawCategory = categories.find(c => c.id === 'saw-blades');

  if (activeCategory) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
        {/* Top Utility Bar */}
        <div className="bg-[#0D1520] text-white text-[10px] uppercase tracking-widest py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> +1 (844)-808-TOOL</span>
            <span className="hidden md:flex items-center gap-1"><Mail size={12} /> Sales@carbidetooling.net</span>
          </div>
          <div className="flex gap-4">
            <a href="mailto:Sales@carbidetooling.net" className="hover:text-[#1E73C8] transition-colors">Support</a>
          </div>
        </div>

        {/* Main Header */}
        <header className="bg-[#1A2947] text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-8">
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center gap-2 shrink-0"
            >
              <div className="bg-[#1E73C8] text-white font-black text-2xl px-2 py-1 italic leading-none">
                CARBIDE
              </div>
              <div className="font-black text-2xl italic leading-none tracking-tighter">
                TOOLING.NET
              </div>
            </button>

            <nav className="hidden lg:flex gap-6 font-bold uppercase text-sm tracking-wide">
              {categories.slice(0, 5).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className={`hover:text-[#1E73C8] transition-colors ${activeCategory?.id === cat.id ? 'text-[#1E73C8]' : ''}`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden sm:block"><User size={24} /></button>
              <button className="relative" onClick={openCart}>
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-[#1E73C8] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
              </button>
            </div>
          </div>
        </header>

        <CategoryPage category={activeCategory} onBack={() => setActiveCategory(null)} />

        <AIChat />
        <CartDrawer />

        {/* Footer */}
        <footer className="bg-[#0D1520] text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                © 2026 CARBIDE TOOLING.NET. ALL RIGHTS RESERVED.
              </p>
              <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A]">
      {/* Top Utility Bar */}
      <div className="bg-[#0D1520] text-white text-[10px] uppercase tracking-widest py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> +1 (844)-808-TOOL</span>
          <span className="hidden md:flex items-center gap-1"><Mail size={12} /> Sales@carbidetooling.net</span>
        </div>
        <div className="flex gap-4">
          <a href="mailto:Sales@carbidetooling.net" className="hover:text-[#1E73C8] transition-colors">Support</a>
          <a href="#" className="hover:text-[#1E73C8] transition-colors">Find a Dealer</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#1A2947] text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-[#1E73C8] text-white font-black text-2xl px-2 py-1 italic leading-none">
              CARBIDE
            </div>
            <div className="font-black text-2xl italic leading-none tracking-tighter">
              TOOLING.NET
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 font-bold uppercase text-sm tracking-wide">
            {categories.slice(0, 5).map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className="hover:text-[#1E73C8] transition-colors"
              >
                {cat.name}
              </button>
            ))}
          </nav>


          <div className="flex items-center gap-4">
            <button className="hidden sm:block"><User size={24} /></button>
            <button className="relative" onClick={openCart}>
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#1E73C8] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
            </button>
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-[#0D1520] overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-4">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat); setMobileMenuOpen(false); }}
                    className="text-left font-bold uppercase text-sm tracking-wide text-white/80 hover:text-[#1E73C8] transition-colors py-2 border-b border-white/10"
                  >
                    {cat.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section — Search First */}
      <section className="relative min-h-[700px] bg-[#0D1520] overflow-hidden flex items-center">
        <img
          src={sawCategory?.image || pcdCategory?.image}
          alt="Precision Tooling"
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,#0D1520_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1520]/80 via-transparent to-[#0D1520]/90" />

        <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-[#1E73C8]" />
            <span className="text-[#1E73C8] font-black uppercase tracking-[0.25em] text-xs">
              Guaranteed Precision · AI-Powered Search
            </span>
            <span className="w-8 h-px bg-[#1E73C8]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-black uppercase leading-[0.88] tracking-tighter mb-4"
          >
            Precision Cutting Tools<br />
            <span className="text-[#1E73C8]">For Woodworking</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 text-base font-medium mb-10 max-w-lg"
          >
            Over 15 years of expertise. Ask our AI specialist to find exactly what you need.
          </motion.p>

          <div className="w-full">
            <HeroChat />
          </div>
        </div>
      </section>

      {/* Value Props Bar */}
      <div className="bg-[#1A2947] text-white py-6 border-b-4 border-[#0D1520]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <ShieldCheck size={40} strokeWidth={1.5} className="text-[#1E73C8]" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Premium Quality</h3>
              <p className="text-xs font-bold opacity-80 uppercase">Precision & Longevity</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Settings size={40} strokeWidth={1.5} className="text-[#1E73C8]" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Expert Support</h3>
              <p className="text-xs font-bold opacity-80 uppercase">Technical Guidance</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Truck size={40} strokeWidth={1.5} className="text-[#1E73C8]" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Standard Shipping</h3>
              <p className="text-xs font-bold opacity-80 uppercase">On All Orders</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RotateCcw size={40} strokeWidth={1.5} className="text-[#1E73C8]" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Free Returns</h3>
              <p className="text-xs font-bold opacity-80 uppercase">No-Risk Purchasing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A]">Shop by Category</h2>
              <div className="h-1 w-20 bg-[#1E73C8] mt-2" />
            </div>
            <button
              onClick={() => setActiveCategory(categories[0])}
              className="hidden md:flex items-center gap-2 font-bold uppercase text-sm hover:text-[#1E73C8] transition-colors text-[#1A1A1A]"
            >
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveCategory(cat)}
                className="group relative bg-[#F7F7F7] overflow-hidden cursor-pointer border border-[#E0E0E0] hover:border-[#1E73C8] transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase mb-3 text-[#1A1A1A] group-hover:text-[#1E73C8] transition-colors">{cat.name}</h3>
                  <ul className="space-y-1 mb-6">
                    {cat.subcategories.slice(0, 3).map((item, j) => (
                      <li key={j} className="text-sm text-[#777] font-medium flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#1E73C8] shrink-0" /> {item}
                      </li>
                    ))}
                    {cat.subcategories.length > 3 && (
                      <li className="text-sm text-[#999] font-medium pl-3">+{cat.subcategories.length - 3} more</li>
                    )}
                  </ul>
                  <button className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest group-hover:text-[#1E73C8] transition-colors text-[#1A1A1A]">
                    Shop Now <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product Section — Diamond PCD */}
      <section className="bg-[#0D1520] text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#1E73C8]/10 rounded-full blur-3xl" />
            <img
              src={`https://www.carbidetooling.net/web/image/product.template/4068/image_512/380mm%20PCD%20Diamond%20Main%20Saw%20Blades%20-%20KWS%20Brand%20CTN-SBD380%20?unique=7372f8e`}
              alt="Diamond PCD Saw Blade"
              className="relative z-10 w-full max-w-md mx-auto rounded-lg shadow-2xl border border-white/10 bg-white/5 p-4"
            />
          </div>
          <div>
            <span className="text-[#1E73C8] font-black uppercase tracking-widest text-sm mb-4 block">Flagship Offering</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              DIAMOND (PCD) <br /> SAW BLADES
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Polycrystalline Diamond (PCD) blades last 15 to 50x longer than standard carbide-tipped blades. A strategic investment for high-volume production woodworking facilities.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "15 to 50 times longer service life",
                "Significant reduction in blade change frequency",
                "Elimination of ongoing sharpening costs",
                "Substantial long-term cost savings"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#1E73C8] text-white p-0.5">
                    <ChevronRight size={14} strokeWidth={4} />
                  </div>
                  <span className="font-bold uppercase text-sm tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setActiveCategory(categories.find(c => c.id === 'diamond-pcd') || categories[0])}
              className="bg-[#1E73C8] text-white font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-[#155fa0] transition-colors"
            >
              Shop Diamond Tooling
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-center mb-16 text-[#1A1A1A]">What Our Partners Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The company has been very innovative with custom tooling options, stocking programs, and industry knowledge. Also, always very competitive!",
                author: "John H.",
                segment: "Commercial Casework",
                years: "8-year customer"
              },
              {
                quote: "After years of purchasing tooling from many sources, it has been great to find a single resource to fulfill all of my needs. Resourceful, reliable, and rapid service.",
                author: "Don L.",
                segment: "Commercial Casework",
                years: "Long-term partner"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 border-l-8 border-[#1A2947] shadow-sm">
                <p className="text-xl italic font-medium mb-8 text-[#1A1A1A]">"{t.quote}"</p>
                <div>
                  <h4 className="font-black uppercase text-lg text-[#1A1A1A]">{t.author}</h4>
                  <p className="text-sm font-bold text-[#777] uppercase tracking-wide">{t.segment} | {t.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIChat />
      <CartDrawer />

      {/* Footer */}
      <footer className="bg-[#0D1520] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-[#1E73C8] text-white font-black text-xl px-2 py-1 italic leading-none">
                  CARBIDE
                </div>
                <div className="font-black text-xl italic leading-none tracking-tighter">
                  TOOLING.NET
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Specialized supplier of precision cutting tools and tooling solutions for the woodworking industry since 2009.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1E73C8] hover:text-white transition-all">
                  <span className="font-black italic">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1E73C8] hover:text-white transition-all">
                  <span className="font-black italic">in</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-2">Products</h4>
              <ul className="space-y-4 text-sm font-bold uppercase text-white/60">
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className="hover:text-[#1E73C8] transition-colors text-left"
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-2">Support</h4>
              <ul className="space-y-4 text-sm font-bold uppercase text-white/60">
                <li><a href="mailto:Sales@carbidetooling.net" className="hover:text-[#1E73C8] transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-[#1E73C8] transition-colors">Technical Guidance</a></li>
                <li><a href="#" className="hover:text-[#1E73C8] transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-[#1E73C8] transition-colors">Custom Tooling</a></li>
                <li><a href="#" className="hover:text-[#1E73C8] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-2">Newsletter</h4>
              <p className="text-white/60 text-sm mb-6">Get the latest technical guidance and product updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-white/10 border-none py-3 px-4 text-sm flex-1 outline-none focus:ring-1 focus:ring-[#1E73C8]"
                />
                <button className="bg-[#1E73C8] text-white font-black uppercase text-xs tracking-widest px-4 hover:bg-[#155fa0] transition-colors">Join</button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
              © 2026 CARBIDE TOOLING.NET. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40 font-bold">
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
