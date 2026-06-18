
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  MapPin,
  Mail,
  Clock,
  Star,
  Shield,
  Heart,
  Users,
  Stethoscope,
  Sparkles,
  Zap,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Facebook,
  Instagram,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Smile,
  Syringe,
  Scan,
  Sun,
  Gem,
  Droplets,
  MenuIcon,
} from "lucide-react";

/* ──────────── GOOGLE FONTS ──────────── */
const FontLoader = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </>
);

/* ──────────── ANIMATION VARIANTS ──────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ──────────── SECTION WRAPPER ──────────── */
const Section = ({ id, children, className = "", ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

/* ──────────── NAVIGATION ──────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C81] flex items-center justify-center shadow-lg shadow-[#0F4C81]/20 group-hover:shadow-[#0F4C81]/30 transition-shadow">
                <span className="text-white font-bold text-lg font-['Outfit']">A</span>
              </div>
              <div className="hidden sm:block">
                <p className={`font-['Outfit'] font-bold text-lg leading-tight transition-colors ${scrolled ? "text-[#1F2937]" : "text-white"}`}>
                  Addiscombe
                </p>
                <p className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors ${scrolled ? "text-[#4DA8DA]" : "text-white/80"}`}>
                  Dental Surgery
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium font-['Plus_Jakarta_Sans'] transition-colors hover:text-[#4DA8DA] ${
                    scrolled ? "text-[#1F2937]/70" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:02086541580"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  scrolled
                    ? "text-[#0F4C81] bg-[#0F4C81]/5 hover:bg-[#0F4C81]/10"
                    : "text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Phone className="w-4 h-4" />
                020 8654 1580
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5BC0BE] text-white text-sm font-semibold hover:bg-[#4DA8DA] transition-colors shadow-lg shadow-[#5BC0BE]/25"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-[#1F2937]" : "text-white"}`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-[#1F2937] py-3 border-b border-slate-100 font-['Plus_Jakarta_Sans']"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href="tel:02086541580"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0F4C81]/5 text-[#0F4C81] font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  020 8654 1580
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#5BC0BE] text-white font-semibold"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ──────────── HERO SECTION ──────────── */
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0F4C81]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-[#4DA8DA] blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#5BC0BE] blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white/90 text-sm font-medium">4.6 Rating · 91+ Google Reviews</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-['Outfit'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Trusted Dental Care{" "}
              <span className="text-[#5BC0BE]">for Families</span> in Croydon
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 font-['Plus_Jakarta_Sans'] leading-relaxed">
              Exceptional NHS and private dentistry in a warm, welcoming environment. 
              Same-day emergency appointments available for urgent care.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#5BC0BE] text-white font-semibold text-lg hover:bg-[#4DA8DA] transition-all shadow-xl shadow-[#5BC0BE]/30 hover:shadow-[#4DA8DA]/40 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </a>
              <a
                href="tel:02086541580"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: Star, label: "4.6 Google Rating", sub: "91 Reviews" },
                { icon: Shield, label: "NHS & Private", sub: "All Patients Welcome" },
                { icon: Zap, label: "Emergency Care", sub: "Same-Day Available" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <badge.icon className="w-5 h-5 text-[#5BC0BE]" />
                  <div>
                    <p className="text-white text-sm font-semibold">{badge.label}</p>
                    <p className="text-white/50 text-xs">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
              {/* Main Image */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/20">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop&q=80"
                  alt="Modern dental clinic interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/40 to-transparent" />
              </div>

              {/* Floating Card 1 - Rating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <Star className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-[#1F2937] font-bold text-lg">4.6</p>
                <p className="text-[#1F2937]/50 text-xs">Google Rating</p>
              </motion.div>

              {/* Floating Card 2 - Availability */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-1/3 bg-white rounded-2xl p-4 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-600 text-xs font-semibold">Open Today</span>
                </div>
                <p className="text-[#1F2937] font-bold text-sm">9:00 – 5:30</p>
                <p className="text-[#1F2937]/50 text-xs">Mon – Fri</p>
              </motion.div>

              {/* Floating Card 3 - Emergency */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-1/4 -bottom-4 bg-[#5BC0BE] rounded-2xl p-4 shadow-xl shadow-[#5BC0BE]/30"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-white" />
                  <div>
                    <p className="text-white font-bold text-sm">Emergency Slots</p>
                    <p className="text-white/70 text-xs">Available Today</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
};

/* ──────────── TRUST STATISTICS ──────────── */
const TrustStats = () => {
  const stats = [
    { value: "4.6", suffix: "★", label: "Google Rating", icon: Star, color: "text-amber-500" },
    { value: "91+", suffix: "", label: "Patient Reviews", icon: Users, color: "text-[#4DA8DA]" },
    { value: "15+", suffix: "", label: "Years Experience", icon: Shield, color: "text-[#5BC0BE]" },
    { value: "NHS", suffix: "", label: "& Private Care", icon: Heart, color: "text-rose-400" },
    { value: "24/7", suffix: "", label: "Emergency Line", icon: Zap, color: "text-orange-400" },
  ];

  return (
    <Section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm shadow-slate-200/50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-shadow"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3`} />
              <p className="font-['Outfit'] text-3xl font-bold text-[#1F2937]">
                {stat.value}
                <span className="text-lg">{stat.suffix}</span>
              </p>
              <p className="text-sm text-[#1F2937]/50 mt-1 font-['Plus_Jakarta_Sans']">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ──────────── WHY CHOOSE US ──────────── */
const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Friendly Staff",
      desc: "Our warm, welcoming team puts nervous patients at ease from the moment you walk in.",
      color: "bg-rose-50 text-rose-500",
    },
    {
      icon: Stethoscope,
      title: "Experienced Dentists",
      desc: "Highly qualified dental professionals with years of expertise in NHS and private care.",
      color: "bg-[#0F4C81]/10 text-[#0F4C81]",
    },
    {
      icon: Zap,
      title: "Emergency Appointments",
      desc: "Same-day emergency slots available. We prioritise urgent dental pain and injuries.",
      color: "bg-orange-50 text-orange-500",
    },
    {
      icon: Scan,
      title: "Modern Equipment",
      desc: "State-of-the-art digital X-rays, intraoral cameras, and the latest dental technology.",
      color: "bg-violet-50 text-violet-500",
    },
    {
      icon: Shield,
      title: "Transparent Care",
      desc: "Clear pricing, honest advice, and no hidden costs. You always know what to expect.",
      color: "bg-emerald-50 text-emerald-500",
    },
    {
      icon: Heart,
      title: "Family Friendly",
      desc: "Gentle care for all ages. From toddlers to grandparents, every family member is welcome.",
      color: "bg-sky-50 text-sky-500",
    },
  ];

  return (
    <Section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#4DA8DA] text-sm font-semibold uppercase tracking-wider">Why Patients Trust Us</span>
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Why Choose <span className="text-[#0F4C81]">Addiscombe</span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg font-['Plus_Jakarta_Sans']">
            We combine clinical excellence with genuine compassion to deliver dental care that feels different.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 hover:border-[#4DA8DA]/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-['Outfit'] text-xl font-bold text-[#1F2937] mb-3">{feature.title}</h3>
              <p className="text-[#1F2937]/60 leading-relaxed font-['Plus_Jakarta_Sans']">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ──────────── MEET THE TEAM ──────────── */
const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Principal Dentist",
      bio: "GDC registered with 15+ years experience in restorative and cosmetic dentistry. Passionate about creating confident smiles.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&q=80",
    },
    {
      name: "Dr. James Okafor",
      role: "Associate Dentist",
      bio: "Special interest in dental implants and oral surgery. Known for his gentle approach and meticulous attention to detail.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&q=80",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Dental Hygienist",
      bio: "Dedicated to preventive care and patient education. Helps patients maintain healthy gums and beautiful smiles for life.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&q=80",
    },
    {
      name: "Emily Thompson",
      role: "Practice Manager",
      bio: "Ensures every patient journey is seamless. Handles appointments, insurance, and makes sure you feel at home.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
    },
  ];

  return (
    <Section id="team" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#4DA8DA] text-sm font-semibold uppercase tracking-wider">Our Experts</span>
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Meet the <span className="text-[#0F4C81]">Team</span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg font-['Plus_Jakarta_Sans']">
            Caring professionals committed to your comfort and oral health.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-['Outfit'] text-lg font-bold text-[#1F2937]">{member.name}</h3>
                <p className="text-[#4DA8DA] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-[#1F2937]/60 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ──────────── TREATMENTS ──────────── */
const Treatments = () => {
  const treatments = [
    {
      title: "General Dentistry",
      desc: "Comprehensive check-ups, fillings, extractions, and routine care to keep your smile healthy.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&h=350&fit=crop&q=80",
      icon: Stethoscope,
    },
    {
      title: "Emergency Dentistry",
      desc: "Rapid relief for toothaches, broken teeth, infections, and dental trauma. Same-day when possible.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&h=350&fit=crop&q=80",
      icon: AlertCircle,
    },
    {
      title: "Dental Implants",
      desc: "Permanent tooth replacement with titanium implants. Restore function and aesthetics naturally.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=350&fit=crop&q=80",
      icon: Gem,
    },
    {
      title: "Dental Hygiene",
      desc: "Professional cleanings, scaling, polishing, and personalised oral hygiene advice.",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=500&h=350&fit=crop&q=80",
      icon: Droplets,
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Veneers, bonding, and smile makeovers. Transform your smile with bespoke cosmetic solutions.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=500&h=350&fit=crop&q=80",
      icon: Sparkles,
    },
    {
      title: "Teeth Whitening",
      desc: "Professional whitening treatments for a brighter, more confident smile. Safe and effective.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=500&h=350&fit=crop&q=80",
      icon: Sun,
    },
  ];

  return (
    <Section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#4DA8DA] text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Our <span className="text-[#0F4C81]">Treatments</span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg font-['Plus_Jakarta_Sans']">
            From routine care to advanced procedures, we provide comprehensive dental services under one roof.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <t.icon className="w-5 h-5 text-[#0F4C81]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-['Outfit'] text-xl font-bold text-[#1F2937] mb-2">{t.title}</h3>
                <p className="text-[#1F2937]/60 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{t.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#4DA8DA] text-sm font-semibold mt-4 group-hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ──────────── EMERGENCY CTA ──────────── */
const Emergency = () => {
  return (
    <section className="py-24 bg-[#0F4C81] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5BC0BE] blur-[100px]" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-[#5BC0BE]" />
            <span className="text-white/90 text-sm font-medium">Urgent Dental Care</span>
          </div>
          <h2 className="font-['Outfit'] text-4xl lg:text-6xl font-bold text-white mb-6">
            Need an Emergency <span className="text-[#5BC0BE]">Dentist?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 font-['Plus_Jakarta_Sans'] leading-relaxed">
            Dental pain can't wait. We reserve same-day emergency appointments whenever possible. 
            Call us now for immediate assistance.
          </p>
          <a
            href="tel:02086541580"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#5BC0BE] text-white text-xl font-bold hover:bg-[#4DA8DA] transition-all shadow-xl shadow-[#5BC0BE]/30 hover:shadow-[#4DA8DA]/40 hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            020 8654 1580
          </a>
          <p className="text-white/40 text-sm mt-6 font-['Plus_Jakarta_Sans']">
            Available during opening hours · Walk-ins welcome for emergencies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ──────────── GOOGLE REVIEWS ──────────── */
const Reviews = () => {
  const reviews = [
    {
      name: "Sarah J.",
      rating: 5,
      text: "The team here is absolutely wonderful. I was so nervous about my root canal but Dr. Mitchell made me feel completely at ease. Highly recommend!",
      time: "2 weeks ago",
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "Called with a broken tooth on a Saturday morning and they saw me the same day. The emergency care was fantastic. Lifesavers!",
      time: "1 month ago",
    },
    {
      name: "Patricia K.",
      rating: 5,
      text: "Been coming here for over 8 years with my whole family. The staff remember your name and always make the kids feel comfortable. NHS and private options are great.",
      time: "2 months ago",
    },
    {
      name: "David L.",
      rating: 4,
      text: "Professional, clean, and modern clinic. Had my teeth whitened here and the results were amazing. Fair pricing and transparent about all costs upfront.",
      time: "3 months ago",
    },
  ];

  return (
    <Section id="reviews" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#4DA8DA] text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            What Patients <span className="text-[#0F4C81]">Say</span>
          </h2>
        </motion.div>

        {/* Rating Header */}
        <motion.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-200/50 border border-slate-100 max-w-md mx-auto mb-12 text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4].map((s) => (
              <Star key={s} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
            <Star className="w-6 h-6 text-amber-400" />
          </div>
          <p className="font-['Outfit'] text-4xl font-bold text-[#1F2937]">4.6</p>
          <p className="text-[#1F2937]/50 text-sm mb-4">Based on 91 Google Reviews</p>
          <a
            href="https://g.co/kgs/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F4C81] text-white text-sm font-semibold hover:bg-[#0F4C81]/90 transition-colors"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            View on Google
          </a>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-sm shadow-slate-200/50 border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[#1F2937]/80 text-sm leading-relaxed mb-4 font-['Plus_Jakarta_Sans']">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0F4C81]/10 flex items-center justify-center">
                    <span className="text-[#0F4C81] text-xs font-bold">{review.name[0]}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#1F2937]">{review.name}</span>
                </div>
                <span className="text-xs text-[#1F2937]/40">{review.time}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ──────────── FAQ ──────────── */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do you accept NHS patients?",
      a: "Yes, we welcome NHS patients. We offer a full range of NHS dental treatments including check-ups, fillings, extractions, and more. Private options are also available for treatments not covered by the NHS.",
    },
    {
      q: "Do you offer emergency appointments?",
      a: "Absolutely. We reserve same-day emergency slots whenever possible for urgent issues like severe toothache, broken teeth, or dental trauma. Call us as early as possible on 020 8654 1580.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can book by calling us directly, using our online appointment form below, or visiting the practice. We aim to accommodate your preferred time and will confirm your booking promptly.",
    },
    {
      q: "What treatments do you provide?",
      a: "We offer comprehensive dental care including general dentistry, emergency treatment, dental implants, hygiene services, cosmetic dentistry, teeth whitening, veneers, crowns, bridges, and root canal therapy.",
    },
    {
      q: "What are your opening hours?",
      a: "We're open Monday to Friday from 9:00 am to 5:30 pm. Weekend appointments are available by prior arrangement for both routine and emergency care.",
    },
    {
      q: "Do you treat children?",
      a: "Yes, we love seeing young patients! We provide gentle, child-friendly dental care and encourage bringing children in from an early age to build positive dental habits.",
    },
  ];

  return (
    <Section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <span className="text-[#4DA8DA] text-sm font-semibold uppercase tracking-wider">Got Questions?</span>
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Frequently <span className="text-[#0F4C81]">Asked</span>
          </h2>
        </motion.div>

        <motion.div variants={staggerContainer} className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="bg-[#F8FAFC] rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-['Outfit'] font-semibold text-[#1F2937] pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-[#4DA8DA] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#1F2937]/40 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[#1F2937]/60 leading-relaxed font-['Plus_Jakarta_Sans']">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

/* ──────────── CONTACT SECTION ──────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const hours = [
    { day: "Monday", time: "9:00 AM – 5:30 PM" },
    { day: "Tuesday", time: "9:00 AM – 5:30 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:30 PM" },
    { day: "Thursday", time: "9:00 AM – 5:30 PM" },
    { day: "Friday", time: "9:00 AM – 5:30 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "By Appointment" },
  ];

  return (
    <Section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#4DA8DA] text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Book Your <span className="text-[#0F4C81]">Appointment</span>
          </h2>
          <p className="text-[#1F2937]/60 text-lg font-['Plus_Jakarta_Sans']">
            Ready to prioritise your smile? Reach out and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <motion.div variants={fadeUp} className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-200/50 border border-slate-100">
              <h3 className="font-['Outfit'] text-xl font-bold text-[#1F2937] mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0F4C81]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Address</p>
                    <p className="text-[#1F2937]/60 text-sm">80 Lower Addiscombe Road<br />Croydon, CR0 6AB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5BC0BE]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#5BC0BE]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Phone</p>
                    <p className="text-[#1F2937]/60 text-sm">020 8654 1580</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4DA8DA]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#4DA8DA]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1F2937]">Email</p>
                    <p className="text-[#1F2937]/60 text-sm">info@addiscombedental.co.uk</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-200/50 border border-slate-100">
              <h3 className="font-['Outfit'] text-xl font-bold text-[#1F2937] mb-6">Opening Hours</h3>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-[#1F2937]/60">{h.day}</span>
                    <span className="font-semibold text-[#1F2937]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm shadow-slate-200/50 border border-slate-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.0!2d-0.075!3d51.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIyJzQ4LjAiTiAwwrAwNCczMC4wIlc!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Addiscombe Dental Surgery Location"
              />
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div variants={fadeUp}>
            <div className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-200/50 border border-slate-100">
              <h3 className="font-['Outfit'] text-xl font-bold text-[#1F2937] mb-2">Request an Appointment</h3>
              <p className="text-[#1F2937]/60 text-sm mb-6">Fill in your details and we'll contact you to confirm your booking.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 rounded-xl p-8 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="font-['Outfit'] text-xl font-bold text-emerald-800 mb-2">Thank You!</h4>
                  <p className="text-emerald-600">We've received your request and will be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all font-['Plus_Jakarta_Sans']"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#1F2937] mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all font-['Plus_Jakarta_Sans']"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1F2937] mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all font-['Plus_Jakarta_Sans']"
                        placeholder="020 0000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4DA8DA] focus:ring-2 focus:ring-[#4DA8DA]/20 outline-none transition-all resize-none font-['Plus_Jakarta_Sans']"
                      placeholder="Tell us about your dental needs or preferred appointment time..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0F4C81] text-white font-semibold text-lg hover:bg-[#0F4C81]/90 transition-all shadow-lg shadow-[#0F4C81]/20 hover:shadow-xl hover:shadow-[#0F4C81]/30"
                  >
                    Request Appointment
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

/* ──────────── FOOTER ──────────── */
const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#5BC0BE] flex items-center justify-center">
                <span className="text-white font-bold text-lg font-['Outfit']">A</span>
              </div>
              <div>
                <p className="font-['Outfit'] font-bold text-lg leading-tight">Addiscombe</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Dental Surgery</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
              Trusted family dental care in Croydon. NHS and private dentistry with a personal touch.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5BC0BE] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#5BC0BE] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Team", "Contact", "Book Online"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="text-white/50 hover:text-[#5BC0BE] transition-colors text-sm font-['Plus_Jakarta_Sans']">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-3">
              {["General Dentistry", "Emergency Care", "Dental Implants", "Teeth Whitening", "Dental Hygiene", "Cosmetic Dentistry"].map((t) => (
                <li key={t}>
                  <a href="#treatments" className="text-white/50 hover:text-[#5BC0BE] transition-colors text-sm font-['Plus_Jakarta_Sans']">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Outfit'] font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50 font-['Plus_Jakarta_Sans']">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#5BC0BE]" />
                80 Lower Addiscombe Road<br />Croydon, CR0 6AB
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50 font-['Plus_Jakarta_Sans']">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#5BC0BE]" />
                020 8654 1580
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50 font-['Plus_Jakarta_Sans']">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#5BC0BE]" />
                info@addiscombedental.co.uk
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#5BC0BE]" />
                <span className="text-sm font-semibold">Opening Hours</span>
              </div>
              <p className="text-white/50 text-xs">Mon – Fri: 9:00 AM – 5:30 PM</p>
              <p className="text-white/50 text-xs">Weekends: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-['Plus_Jakarta_Sans']">
            © 2026 Addiscombe Dental Surgery. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-['Plus_Jakarta_Sans']">
            This is a demo redesign concept. Not the official website.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ──────────── MAIN APP ──────────── */
export default function App() {
  return (
    <div className="font-['Plus_Jakarta_Sans'] antialiased bg-[#F8FAFC]">
      <FontLoader />
      <Navbar />
      <Hero />
      <TrustStats />
      <WhyChooseUs />
      <Treatments />
      <Team />
      <Emergency />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
