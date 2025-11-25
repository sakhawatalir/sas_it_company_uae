'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import {
  ChevronRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon as ShieldOutline,
  VideoCameraIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';
import {
  ShieldCheckIcon,
  ServerIcon,
  CogIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // NO MOUSE TRACKING - REMOVED FOR PERFORMANCE

  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Networking & Security',
      description: 'Enterprise-grade network infrastructure and cybersecurity solutions',
      link: '/services#networking',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ServerIcon,
      title: 'Server Solutions',
      description: 'Complete server setup, maintenance, and cloud migration services',
      link: '/services#servers',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: CogIcon,
      title: 'CCTV & Surveillance',
      description: 'Advanced surveillance systems for comprehensive security monitoring',
      link: '/services#cctv',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: GlobeAltIcon,
      title: 'Website Development',
      description: 'Custom web applications and e-commerce solutions',
      link: '/services#web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const clients = [
    { 
      name: 'TechCorp Dubai', 
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Technology'
    },
    { 
      name: 'Emirates Solutions', 
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&h=60&fit=crop&crop=center',
      industry: 'Consulting'
    },
    { 
      name: 'Dubai Logistics', 
      logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop&crop=center',
      industry: 'Logistics'
    },
    { 
      name: 'UAE Finance Group', 
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=60&fit=crop&crop=center',
      industry: 'Finance'
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CTO, Emirates Tech',
      content: 'Outstanding IT solutions that transformed our business operations. Their expertise in networking and security is unmatched.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager, Dubai Logistics',
      content: 'Professional, reliable, and innovative. They delivered our project on time and exceeded all expectations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Mohammed Hassan',
      position: 'CEO, UAE Finance Group',
      content: 'Their cloud migration services saved us significant costs while improving our system performance dramatically.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircleIcon },
    { number: '100+', label: 'Happy Clients', icon: StarIcon },
    { number: '24/7', label: 'Support Available', icon: PhoneIcon },
    { number: '10+', label: 'Years Experience', icon: ShieldCheckIcon },
  ];

  const technologies = [
    { name: 'React', logo: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', logo: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'Python', logo: '🐍', color: 'from-yellow-400 to-orange-400' },
    { name: 'AWS', logo: '☁️', color: 'from-orange-400 to-red-400' },
    { name: 'Docker', logo: '🐳', color: 'from-blue-400 to-indigo-400' },
    { name: 'Kubernetes', logo: '⚙️', color: 'from-purple-400 to-pink-400' },
    { name: 'MongoDB', logo: '🍃', color: 'from-green-400 to-teal-400' },
    { name: 'PostgreSQL', logo: '🐘', color: 'from-blue-400 to-purple-400' },
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden relative">
      
      {/* NO CURSOR TRACKING ELEMENTS - REMOVED FOR PERFORMANCE */}
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-blue-400/40"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-400/40 rounded-full"
          animate={{
            rotate: -360,
            scale: [1.5, 1, 1.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Subtle Light Streaks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                opacity: 0.3,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mb-6"
              >
                <ArrowRightIcon className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm font-medium">We Make IT Happen!</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Your Trusted</span>{' '}
                <motion.span 
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    IT Partner
                  </span>
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-xl"
              >
                Professional IT solutions for businesses in Dubai, UAE. From networking and security to CCTV surveillance and website development - transforming your digital infrastructure.
              </motion.p>
              
              {/* Animated Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="tel:+971-xxx-xxxx"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 border border-white/40 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Logo Section with Glowing Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Main Circular Logo Container */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative w-80 h-80 rounded-full"
                >
                  {/* Glowing Neon Outline - Blue to Magenta Gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-80 blur-xl animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60 blur-lg" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-40 blur-md" />
                  
                  {/* Blooming Corner Effects - Different Colors */}
                  {/* Top Left - Blue */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-400 blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Top Right - Cyan */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-cyan-400 blur-2xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.7, 0.5, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  {/* Bottom Left - Purple */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-purple-500 blur-2xl"
                    animate={{
                      scale: [1.1, 1.4, 1.1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  {/* Bottom Right - Magenta/Pink */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-pink-500 blur-2xl"
                    animate={{
                      scale: [1.3, 1, 1.3],
                      opacity: [0.6, 0.9, 0.6],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                  
                  {/* Inner Circle with Logo */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-4 border-transparent bg-clip-padding overflow-hidden flex flex-col items-center justify-center">
                    {/* Logo Image */}
                    <div className="relative w-48 h-48 mb-4">
                      <Image
                        src="/images/logo.jpeg"
                        alt="SAS IT Services Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    
                    {/* SAS Text */}
                    <motion.h2
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-5xl font-bold text-white mb-2"
                    >
                      SAS
                    </motion.h2>
                    
                    {/* IT SERVICES Text */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-lg text-white font-medium"
                    >
                      IT SERVICES
                    </motion.p>
                  </div>
                  
                  {/* Rotating Glow Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(236, 72, 153, 0.3), transparent)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* OUR SERVICES Section */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 via-blue-900 to-purple-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              OUR SERVICES
            </h2>
          </motion.div>

          {/* Services Grid - 2x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Networking & Security',
                link: '/services#networking',
              },
              {
                icon: ServerIcon,
                title: 'Server Solutions',
                link: '/services#servers',
              },
              {
                icon: VideoCameraIcon,
                title: 'CCTV & Surveillance',
                link: '/services#cctv',
              },
              {
                icon: CogIcon,
                title: 'AMC Services',
                link: '/services#amc',
              },
              {
                icon: PhoneIcon,
                title: 'Telephony Solutions',
                link: '/services#telephony',
              },
              {
                icon: PresentationChartBarIcon,
                title: 'Smart Meeting Rooms',
                link: '/services#meeting-rooms',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  href={service.link}
                  className="block p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-blue-400 bg-blue-400/10 mb-4 group-hover:bg-blue-400/20 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Learn More Link */}
                  <span className="text-white text-sm hover:text-blue-400 transition-colors inline-flex items-center">
                    Learn more
                    <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="relative py-20 bg-gradient-to-b from-purple-900 via-blue-900 to-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              WHY CHOOSE US
            </h2>
          </motion.div>

          <div className="relative min-h-[600px]">
            {/* Grid Layout for positioning */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
              {/* Top Left Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center w-full"
              >
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </motion.div>

              {/* Top Center - Empty */}
              <div></div>

              {/* Top Right Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center w-full"
              >
                <div className="text-4xl font-bold text-white mb-2">250+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </motion.div>

              {/* Middle Left - Empty */}
              <div></div>

              {/* Center Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative w-64 h-64 lg:w-80 lg:h-80"
              >
                {/* Circular Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-2xl animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 blur-xl" />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                  
                  {/* SS Logo Background */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white/10 text-9xl font-bold">SS</span>
                  </div>
                </div>
              </motion.div>

              {/* Middle Right - Empty */}
              <div></div>

              {/* Bottom Left Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center w-full"
              >
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </motion.div>

              {/* Bottom Center - Empty */}
              <div></div>

              {/* Bottom Right Stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center w-full"
              >
                <div className="text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-sm text-gray-300">Years of Experience</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Services Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)',
                'radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3), transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)',
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-full h-full"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-400 text-sm font-medium">Our Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
            >
              Comprehensive IT Services
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              From infrastructure to innovation, we provide end-to-end IT solutions that transform your business operations.
            </motion.p>
          </motion.div>

          {/* Circular Services Layout */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Logo/Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="text-white text-2xl font-bold"
                >
                  SAS
                </motion.div>
              </motion.div>
              
              {/* Pulsing rings around center */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 border-2 border-blue-400/20 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: ring * 0.5,
                  }}
                  style={{
                    width: `${128 + ring * 20}px`,
                    height: `${128 + ring * 20}px`,
                    left: `${-ring * 10}px`,
                    top: `${-ring * 10}px`,
                  }}
                />
              ))}
            </motion.div>

            {/* Services arranged in circle */}
            {services.map((service, index) => {
              const angle = (index * 360) / services.length;
              const radius = 250;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: x, 
                    y: y 
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.7 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="absolute group cursor-pointer"
                >
                  {/* Connecting line to center */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent origin-right"
                    style={{
                      width: `${radius}px`,
                      transform: `rotate(${angle + 90}deg)`,
                      transformOrigin: 'right center',
                      right: '50%',
                      top: '50%',
                    }}
                  />
                  
                  <Link href={service.link}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-48 h-48 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-500"
                    >
                      {/* Service Image Background */}
                      <div className="absolute inset-0">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5
                          }}
                          className="mb-3"
                        >
                          <service.icon className="w-8 h-8 text-blue-400" />
                        </motion.div>
                        
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Hover glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
                        whileHover={{
                          boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                        }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amazing Infinite Slider Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium">Technologies We Master</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We leverage the latest technologies to build robust, scalable, and innovative solutions.
            </p>
          </motion.div>

          {/* Infinite Slider */}
          <div className="relative">
            <motion.div
              animate={{ x: [0, -100 * technologies.length] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8"
              style={{ width: `${200 * technologies.length * 2}%` }}
            >
              {/* Double the array for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                  }}
                  className="flex-shrink-0 w-48 h-32 relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className="text-4xl mb-2"
                    >
                      {tech.logo}
                    </motion.div>
                    
                    <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 text-sm font-medium">Our Work</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform their operations with innovative IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Network Upgrade',
                client: 'Dubai Tech Corp',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
                category: 'Networking'
              },
              {
                title: 'Cloud Migration Project',
                client: 'Emirates Solutions',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
                category: 'Cloud'
              },
              {
                title: 'Security System Implementation',
                client: 'UAE Finance Group',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
                category: 'Security'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.client}</p>
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 text-sm font-medium">Client Success</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  <span aria-hidden="true">&ldquo;</span>
                  {testimonial.content}
                  <span aria-hidden="true">&rdquo;</span>
                </p>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/10 p-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Get a free consultation and discover how our IT solutions can accelerate your growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}