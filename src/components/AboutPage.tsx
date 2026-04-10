import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ChevronRight, ArrowRight, Star, Wrench, GraduationCap, HeadphonesIcon } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onContactClick?: () => void;
}

const STATS = [
  { value: '35+', label: 'Years in Business', sub: 'Founded 1989' },
  { value: '6', label: 'Field Service Reps', sub: 'Covering 6 states' },
  { value: '6', label: 'States Served', sub: 'UT · ID · MT · WY · AZ · CO' },
  { value: '1000+', label: 'Shops Partnered', sub: 'Across the Intermountain West' },
];

const PILLARS = [
  {
    icon: <Star size={32} strokeWidth={1.5} className="text-[#2E6DB4]" />,
    title: 'Machinery',
    desc: 'Find the finest industrial machinery for woodworking and other industries that best fits your niche — from world-leading brands like Homag, Altendorf, and SawStop.',
  },
  {
    icon: <HeadphonesIcon size={32} strokeWidth={1.5} className="text-[#2E6DB4]" />,
    title: 'Service',
    desc: 'Experience prompt, expert service with our professional team of 6 field service reps who specialize in CNCs, edgebanders, sanders, beam saws, and more.',
  },
  {
    icon: <GraduationCap size={32} strokeWidth={1.5} className="text-[#2E6DB4]" />,
    title: 'Education',
    desc: 'Learn how to cut costs and maximize efficiency in your shop with help from our team and our network of partners through workshops, training, and case studies.',
  },
  {
    icon: <Wrench size={32} strokeWidth={1.5} className="text-[#2E6DB4]" />,
    title: 'Tooling',
    desc: 'Find the best tooling for your machinery from the top manufacturers — CNC router bits, edgebander tooling, saw blades, boring bits, and collets, in stock and ready to ship.',
  },
];

const STATES = [
  { code: 'UT', name: 'Utah' },
  { code: 'ID', name: 'Idaho' },
  { code: 'MT', name: 'Montana' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'CO', name: 'Colorado' },
  { code: 'AZ', name: 'N. Arizona' },
];

export default function AboutPage({ onBack, onContactClick }: AboutPageProps) {
  return (
    <div className="flex-1 flex flex-col">

      {/* ── HERO ── */}
      <section className="relative bg-[#0F1F3A] text-white py-24 overflow-hidden">
        {/* Background — shop floor photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-shop-floor.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1F3A]/60 via-transparent to-[#0F1F3A]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#2E6DB4 1px, transparent 1px), linear-gradient(90deg, #2E6DB4 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 mb-8"
          >
            <button onClick={onBack} className="hover:text-[#2E6DB4] transition-colors">Home</button>
            <ChevronRight size={12} />
            <span className="text-[#2E6DB4]">About Us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#2E6DB4]" />
              <span className="text-[#2E6DB4] font-black uppercase tracking-widest text-xs">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Your Partner In<br />
              <span className="text-[#2E6DB4]">Wood Manufacturing</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Founded in 1989, Advanced Machinery is the premier provider of woodworking solutions to wood shops both large and small across the Intermountain West.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <div className="bg-[#1A2B4A] text-white py-8 border-b-4 border-[#0F1F3A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl font-black text-[#2E6DB4] leading-none mb-1">{s.value}</div>
              <div className="font-black uppercase text-sm tracking-wide mb-0.5">{s.label}</div>
              <div className="text-xs font-bold text-white/40 uppercase tracking-wide">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── MISSION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-[#2E6DB4]" />
              <span className="text-[#2E6DB4] font-black uppercase tracking-widest text-xs">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#1A1A1A] mb-8">
              Long-Term Partners,<br />
              <span className="text-[#2E6DB4]">Not Just Vendors</span>
            </h2>
            <div className="space-y-5 text-[#555] leading-relaxed text-base">
              <p>
                Our mission is to be your partner by providing long-term solutions to maximize your profits and increase the productivity and value of your business. We accomplish this through education on best practices and trends, quality service, training, and offering machinery from the most respected manufacturers in the industry.
              </p>
              <p>
                We are in it for the long-haul and understand that if you aren't successful, we aren't successful.
              </p>
              <p>
                We view our customers as partners, and our vast network of long-term partners in Utah, Idaho, Montana, Wyoming, Colorado, and Northern Arizona is a testament of our dedication and success in helping improve the businesses of the wood manufacturers we partner with.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:office@advanced-machinery.com"
                className="bg-[#2E6DB4] text-white font-black uppercase text-xs tracking-widest px-6 py-3 hover:bg-[#1a4f8a] transition-colors flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={14} />
              </a>
              <a
                href="https://go.servicem8.com/request_booking?uuid=c27f2f69-c03a-40e4-b147-6e205f0ea62b"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#1A2B4A] text-[#1A2B4A] font-black uppercase text-xs tracking-widest px-6 py-3 hover:border-[#2E6DB4] hover:text-[#2E6DB4] transition-colors flex items-center gap-2"
              >
                Request Service <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Team photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-[#E0E3E8] shadow-xl">
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#2E6DB4] pointer-events-none z-10" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#2E6DB4] pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#2E6DB4] pointer-events-none z-10" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#2E6DB4] pointer-events-none z-10" />
              <img
                src="/team-photo.jpg"
                alt="The Advanced Machinery Team"
                className="w-full object-cover"
              />
            </div>
            {/* Caption badge */}
            <div className="absolute -bottom-4 left-8 bg-[#2E6DB4] text-white font-black uppercase text-xs tracking-widest px-5 py-2.5 shadow-lg">
              The Advanced Machinery Team
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4 PILLARS ── */}
      <section className="py-24 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-px bg-[#2E6DB4]" />
              <span className="text-[#2E6DB4] font-black uppercase tracking-widest text-xs">What We Do</span>
              <span className="w-10 h-px bg-[#2E6DB4]" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A]">Four Ways We Serve You</h2>
            <div className="h-1 w-20 bg-[#2E6DB4] mt-3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#E0E3E8] p-8 hover:border-[#2E6DB4] hover:shadow-lg transition-all group"
              >
                <div className="mb-5">{p.icon}</div>
                <h3 className="text-base font-black uppercase tracking-tight text-[#1A1A1A] mb-3 group-hover:text-[#2E6DB4] transition-colors">{p.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE TERRITORY ── */}
      <section className="py-24 bg-[#0F1F3A] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#2E6DB4 1px, transparent 1px), linear-gradient(90deg, #2E6DB4 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-[#2E6DB4]" />
                <span className="text-[#2E6DB4] font-black uppercase tracking-widest text-xs">Our Territory</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Serving the<br />
                <span className="text-[#2E6DB4]">Intermountain West</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-10">
                The #1 service provider of industrial woodworking machinery in the Intermountain West for over 35 years. Our 6 field service reps cover CNCs, edgebanders, sanders, beam saws, and more — from our headquarters in Kaysville, UT.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {STATES.map((state, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/5 border border-white/10 px-4 py-3 flex items-center gap-3 hover:border-[#2E6DB4] transition-colors"
                  >
                    <div className="w-2 h-2 bg-[#2E6DB4] shrink-0" />
                    <div>
                      <div className="font-black text-sm uppercase">{state.code}</div>
                      <div className="text-xs text-white/40 font-bold">{state.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-[#2E6DB4] mt-0.5 shrink-0" />
                <div>
                  <div className="font-black uppercase text-sm text-white mb-0.5">Headquarters</div>
                  <div className="text-sm">657 N Kays Dr., Kaysville, UT 84037</div>
                </div>
              </div>
            </div>

            {/* Service stats panel */}
            <div className="space-y-4">
              {[
                { label: 'CNC Routers', detail: 'Homag Centateq — Pod & Rail and Nested Base configurations' },
                { label: 'Edgebanders', detail: 'PUR, EVA & contour edgebanding specialists' },
                { label: 'Wide Belt Sanders', detail: 'Widebelt, combination & drum sanders' },
                { label: 'Panel Saws & Beam Saws', detail: 'Beam saws, vertical & sliding table panel saws' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-[#1A2B4A] border border-white/10 p-6 hover:border-[#2E6DB4] transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#2E6DB4] text-white p-0.5 shrink-0">
                      <ChevronRight size={14} strokeWidth={4} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm text-white mb-1 group-hover:text-[#2E6DB4] transition-colors">{item.label}</h4>
                      <p className="text-xs text-white/50 font-medium">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-24 bg-[#2E6DB4] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a new machine, service on existing equipment, or just want to talk shop — our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:office@advanced-machinery.com"
              className="bg-white text-[#2E6DB4] font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-[#F0F4FF] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail size={16} /> office@advanced-machinery.com
            </a>
            <a
              href="tel:8014987891"
              className="bg-[#1a4f8a] text-white font-black uppercase text-sm tracking-widest px-8 py-4 hover:bg-[#0F1F3A] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={16} /> 801-498-7891
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
