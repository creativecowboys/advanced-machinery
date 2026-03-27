/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
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
  Settings
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-near-black">
      {/* Top Utility Bar */}
      <div className="bg-midnight text-white text-[10px] uppercase tracking-widest py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> +1 (844)-808-TOOL</span>
          <span className="hidden md:flex items-center gap-1"><Mail size={12} /> Sales@carbidetooling.net</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-action-blue transition-colors">Support</a>
          <a href="#" className="hover:text-action-blue transition-colors">Find a Dealer</a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-brand-navy text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-action-blue text-white font-black text-2xl px-2 py-1 italic leading-none">
              CARBIDE
            </div>
            <div className="font-black text-2xl italic leading-none tracking-tighter">
              TOOLING.NET
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 font-bold uppercase text-sm tracking-wide">
            <a href="#" className="hover:text-action-blue transition-colors">Products</a>
            <a href="#" className="hover:text-action-blue transition-colors">CNC Tooling</a>
            <a href="#" className="hover:text-action-blue transition-colors">Saw Blades</a>
            <a href="#" className="hover:text-action-blue transition-colors">Service</a>
            <a href="#" className="hover:text-action-blue transition-colors">Resources</a>
          </nav>

          {/* Search & Icons */}
          <div className="flex-1 max-w-md hidden md:flex relative">
            <input 
              type="text" 
              placeholder="SEARCH PRODUCTS..." 
              className="w-full bg-white/10 border-none py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-action-blue outline-none uppercase font-bold placeholder:text-white/40"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
          </div>

          <div className="flex items-center gap-4">
            <button className="lg:hidden"><Search size={24} /></button>
            <button className="hidden sm:block"><User size={24} /></button>
            <button className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-action-blue text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden"><Menu size={24} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-midnight overflow-hidden">
        <img 
          src="https://picsum.photos/seed/woodworking/1920/1080" 
          alt="Precision Tooling" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto h-full px-4 md:px-8 flex flex-col justify-center items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="bg-action-blue text-white inline-block px-4 py-1 font-black text-xl italic uppercase mb-4">
              Guaranteed Precision
            </h2>
            <h1 className="text-white text-5xl md:text-7xl font-black uppercase leading-[0.9] mb-6 tracking-tighter">
              PRECISION CUTTING <br /> TOOLS FOR <br /> WOODWORKING
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg font-medium">
              Over 15 years of industry expertise providing specialized supplier precision cutting tools and tooling solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Shop All Products</button>
              <button className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-midnight">View Catalog</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props Bar */}
      <div className="bg-brand-navy text-white py-6 border-b-4 border-midnight">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <ShieldCheck size={40} strokeWidth={1.5} className="text-action-blue" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Premium Quality</h3>
              <p className="text-xs font-bold opacity-80 uppercase">Precision & Longevity</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Settings size={40} strokeWidth={1.5} className="text-action-blue" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Expert Support</h3>
              <p className="text-xs font-bold opacity-80 uppercase">Technical Guidance</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Truck size={40} strokeWidth={1.5} className="text-action-blue" />
            <div>
              <h3 className="font-black uppercase text-sm leading-none">Standard Shipping</h3>
              <p className="text-xs font-bold opacity-80 uppercase">On All Orders</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <RotateCcw size={40} strokeWidth={1.5} className="text-action-blue" />
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
              <h2 className="text-4xl font-black uppercase tracking-tighter text-dark-gray">Shop by Category</h2>
              <div className="h-1 w-20 bg-action-blue mt-2" />
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 font-bold uppercase text-sm hover:text-action-blue transition-colors text-near-black">
              View All Categories <ChevronRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CNC Tooling", img: "https://picsum.photos/seed/cnc/600/400", items: ["Router Bits", "Fly Cutters", "Tool Holders"] },
              { title: "Diamond (PCD) Tooling", img: "https://picsum.photos/seed/diamond/600/400", items: ["PCD Panel Saw Blades", "Diamond CNC Tooling"] },
              { title: "Saw Blades", img: "https://picsum.photos/seed/saw/600/400", items: ["Sliding Table Saw Blades", "Score Blades"] },
              { title: "Edgebander Tooling", img: "https://picsum.photos/seed/edge/600/400", items: ["Pre-Mill Heads", "Profile Scrapers"] },
              { title: "Metric Boring Bits", img: "https://picsum.photos/seed/drill/600/400", items: ["Brad Point Bits", "V-Point Bits"] },
              { title: "Router Bits", img: "https://picsum.photos/seed/router/600/400", items: ["Handheld & CNC", "Spiral Bits"] },
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-off-white overflow-hidden cursor-pointer border border-light-gray"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black uppercase mb-4 text-dark-gray">{cat.title}</h3>
                  <ul className="space-y-1 mb-6">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-mid-gray font-medium flex items-center gap-2">
                        <div className="w-1 h-1 bg-action-blue" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest group-hover:text-action-blue transition-colors text-near-black">
                    Shop Now <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section className="bg-midnight text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-action-blue/10 rounded-full blur-3xl" />
            <img 
              src="https://picsum.photos/seed/blade/800/800" 
              alt="Diamond PCD Saw Blade" 
              className="relative z-10 w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-action-blue font-black uppercase tracking-widest text-sm mb-4 block">Flagship Offering</span>
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
                  <div className="mt-1 bg-action-blue text-white p-0.5">
                    <ChevronRight size={14} strokeWidth={4} />
                  </div>
                  <span className="font-bold uppercase text-sm tracking-wide">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="btn-primary">Learn More About PCD</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-center mb-16 text-dark-gray">What Our Partners Say</h2>
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
              <div key={i} className="bg-white p-10 border-l-8 border-brand-navy shadow-sm">
                <p className="text-xl italic font-medium mb-8 text-dark-gray">"{t.quote}"</p>
                <div>
                  <h4 className="font-black uppercase text-lg text-near-black">{t.author}</h4>
                  <p className="text-sm font-bold text-mid-gray uppercase tracking-wide">{t.segment} | {t.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-action-blue text-white font-black text-xl px-2 py-1 italic leading-none">
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
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-action-blue hover:text-white transition-all">
                  <span className="font-black italic">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-action-blue hover:text-white transition-all">
                  <span className="font-black italic">in</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-2">Products</h4>
              <ul className="space-y-4 text-sm font-bold uppercase text-white/60">
                <li><a href="#" className="hover:text-action-blue transition-colors">CNC Tooling</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Saw Blades</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Diamond Tooling</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Edgebander Tooling</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Boring Bits</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-2">Support</h4>
              <ul className="space-y-4 text-sm font-bold uppercase text-white/60">
                <li><a href="#" className="hover:text-action-blue transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Technical Guidance</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Custom Tooling</a></li>
                <li><a href="#" className="hover:text-action-blue transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black uppercase text-sm tracking-widest mb-8 border-b border-white/10 pb-2">Newsletter</h4>
              <p className="text-white/60 text-sm mb-6">Get the latest technical guidance and product updates.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-white/10 border-none py-3 px-4 text-sm flex-1 outline-none focus:ring-1 focus:ring-action-blue"
                />
                <button className="btn-primary px-4 py-0 text-xs">Join</button>
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
