'use client'

import { useEffect, useState } from 'react'
import svgPaths from "./imports/svg-wyxexhjt7r"
import svgPathsLanding from "./imports/svg-i1wi0ixrw8"
import svgPathsFigma from "./imports/svg-y3y58jd0mz"
import svgPathsReference from "./imports/svg-oxi7k6zrx4"
import svgPathsProcess from "./imports/svg-3eao5kw93q"
import img from "figma:asset/abd0f0896482fca79bab6eb64232c9d064c23f4b.png"
import imgJonas from "figma:asset/448b86bdaea755aa9479608874613f14f1479d2b.png"
import { imgRectangle1, imgRectangle2 } from "./imports/svg-p3nwt"
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent } from './components/ui/card'
import AboutMe from './components/AboutMe'
import WorkExp from './components/WorkExp'
import Footer from './imports/Footer-2076-130'

// Enhanced Background decoration component
function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main comprehensive grid pattern */}
      <div className="absolute inset-0">
        {/* Vertical lines - full coverage */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="verticalGradientMain" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#888888" stopOpacity="0" />
              <stop offset="37.98%" stopColor="#3B3B3B" stopOpacity="0.15" />
              <stop offset="62.5%" stopColor="#3B3B3B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#222222" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 96.8, 192.7, 288.5, 384.3, 480.1, 576, 671.8, 767.6, 863.4, 959.3, 1055.1, 1151, 1246.8, 1342.6].map((x, index) => (
            <path 
              key={`v-main-${index}`}
              d={`M${x} 0V1000`} 
              stroke="url(#verticalGradientMain)" 
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Horizontal lines - full coverage */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="horizontalGradientMain" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#888888" stopOpacity="0" />
              <stop offset="37.98%" stopColor="#3B3B3B" stopOpacity="0.15" />
              <stop offset="62.5%" stopColor="#3B3B3B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#222222" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 91.5, 182, 272.6, 363.1, 453.6, 544.1, 634.7, 725.2, 815.7, 906.2, 996.7].map((y, index) => (
            <path 
              key={`h-main-${index}`}
              d={`M0 ${y}H1440`} 
              stroke="url(#horizontalGradientMain)" 
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </div>
  )
}

// Enhanced Navigation component with better hover effects and iPad/1080p responsiveness
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo positioned to align perfectly with Hi, I'm text */}
          <div className="flex items-center">
            <div className="w-14 h-14 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <svg className="w-full h-full" viewBox="0 0 753 725" fill="none">
                <path d={svgPathsLanding.p2cd8d400} fill="#2B2B2B" fillOpacity="0.3" />
                <path d={svgPathsLanding.p25d67640} fill="#231F20" />
                <path d={svgPathsLanding.p106dfb00} fill="#2B2B2B" fillOpacity="0.3" />
                <path d={svgPathsLanding.p869ee00} fill="#2B2B2B" fillOpacity="0.3" />
              </svg>
            </div>
          </div>

          {/* Desktop Navigation Links with enhanced hover effects and iPad/1080p responsiveness */}
          <div className="hidden md:flex items-center space-x-6 xl:space-x-8">
            {['Home', 'About', 'Experience', 'Skills', 'Testimonials', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-[#153577] transition-all duration-300 relative group font-medium transform hover:scale-105 hover:-translate-y-0.5"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#153577] to-[#99e9ff] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#153577]/5 to-[#99e9ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 hover:text-[#153577] transition-colors duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-4 mt-4">
              {['Home', 'About', 'Experience', 'Skills', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[#153577] transition-all duration-300 transform hover:translate-x-2 hover:font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Enhanced Animated text component
function AnimatedText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

// Enhanced Scroll-triggered animation component with popup effect
function ScrollTriggeredText({ children, className = "", popup = false }: { children: React.ReactNode; className?: string; popup?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  const animationClass = popup 
    ? (isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95')
    : (isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95')

  return (
    <div 
      ref={setRef}
      className={`transition-all duration-1000 ${popup ? 'animate-scrollPop' : ''} ${animationClass} ${className}`}
    >
      {children}
    </div>
  )
}

// Updated Designer Text - removed "& UI/UX"
function DesignerText() {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'backspacing' | 'switching'>('typing')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Graphic', 'UI/UX']

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (phase === 'typing') {
      // Typing phase
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 120) // Typing speed
      } else {
        // Move to pause phase
        timeout = setTimeout(() => {
          setPhase('pause')
        }, 2000) // Pause duration
      }
    } else if (phase === 'pause') {
      // Pause before backspacing
      timeout = setTimeout(() => {
        setPhase('backspacing')
      }, 500)
    } else if (phase === 'backspacing') {
      // Backspacing phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 80) // Backspacing speed (faster than typing)
      } else {
        // Switch to next word
        setPhase('switching')
      }
    } else if (phase === 'switching') {
      // Brief pause before typing next word
      timeout = setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setPhase('typing')
      }, 300)
    }

    return () => clearTimeout(timeout)
  }, [displayText, phase, currentWordIndex, words])

  return (
    <div className="relative">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-[#3b3b3b] font-semibold leading-tight">
        <span className="designer-text">
          {displayText}
          <span className="typewriter-cursor"></span>
          {' '}Designer
        </span>
      </h2>
    </div>
  )
}

// Enhanced Social Icon Component
function SocialIcon({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:from-[#153577] hover:to-[#99e9ff] group"
    >
      <div className="text-white text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
        {children}
      </div>
    </a>
  )
}

// Enhanced Buttons Container with iPad/1080p responsiveness
function ButtonsContainer() {
  const [resumeHovered, setResumeHovered] = useState(false)
  const [hireMeHovered, setHireMeHovered] = useState(false)

  return (
    <div className="backdrop-blur-[7.5px] backdrop-filter bg-[rgba(255,255,255,0.2)] h-[82px] rounded-[50px] w-[380px] md:w-[400px] lg:w-[420px] xl:w-[440px] mx-auto shadow-lg border border-white/20">
      <div className="box-border content-stretch flex flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10 h-[82px] items-center justify-center overflow-clip p-[10px] relative w-full">
        <div 
          className={`relative rounded-[60px] shrink-0 w-[165px] md:w-[170px] lg:w-[175px] xl:w-[180px] cursor-pointer transition-all duration-300 hover:scale-105 shadow-md ${
            hireMeHovered ? 'bg-transparent' : 'bg-gradient-to-r from-[#153577] to-[#99e9ff]'
          }`}
          onMouseEnter={() => setResumeHovered(true)}
          onMouseLeave={() => setResumeHovered(false)}
        >
          <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip px-5 py-2.5 relative w-full">
            <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[25.692px] text-left text-nowrap tracking-[-0.3854px]">
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                Resume
              </p>
            </div>
            {resumeHovered && (
              <div className="overflow-clip relative shrink-0 size-[42px] ml-2 animate-slideInRight">
                <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div 
          className="flex-1 min-w-[120px] relative rounded-[60px] shrink-0 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#153577] hover:to-[#99e9ff] hover:shadow-md group"
          onMouseEnter={() => setHireMeHovered(true)}
          onMouseLeave={() => setHireMeHovered(false)}
        >
          <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
            <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-5 py-2.5 relative w-full">
              <div className="font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] group-hover:text-white text-[25.692px] text-left text-nowrap tracking-[-0.3854px]">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                  Hire me
                </p>
              </div>
              {hireMeHovered && (
                <div className="overflow-clip relative shrink-0 size-[42px] animate-slideInRight">
                  <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-2 border-[#ffffff] border-solid inset-0 pointer-events-none rounded-[50px]" />
    </div>
  )
}

// Process Frame Components
interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  isHovered?: boolean;
  onHover?: (hovered: boolean) => void;
}

function ProcessCard({ number, title, description, isHovered = false, onHover }: ProcessCardProps) {
  return (
    <div 
      className="relative w-full h-[280px] md:h-[320px] lg:h-[378px] cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <div className={`absolute backdrop-blur-[4.25px] backdrop-filter inset-0 rounded-3xl transition-all duration-300 ${
        isHovered ? 'bg-[#99e9ff]' : 'bg-[rgba(132,132,133,0.3)]'
      }`}>
        <div className="absolute border border-[#99e9ff] border-solid inset-0 pointer-events-none rounded-3xl" />
      </div>

      {/* Number */}
      <div className={`absolute bottom-[82.011%] font-['Lufga:Bold',_sans-serif] leading-[0] left-[6.944%] not-italic right-[70.833%] text-[32px] md:text-[40px] lg:text-[48px] text-justify top-[5.556%] tracking-[-0.72px] transition-colors duration-300 ${
        isHovered ? 'text-[#153577]' : 'text-[#99e9ff]'
      }`}>
        <p className="adjustLetterSpacing block leading-[normal]">{number}</p>
      </div>

      {/* Title */}
      <div className={`absolute bottom-[62.169%] font-['Lufga:SemiBold',_sans-serif] leading-[0] left-[7.292%] not-italic right-[6.944%] text-[16px] md:text-[18px] lg:text-[20px] text-left top-[33.333%] tracking-[-0.3px] transition-colors duration-300 ${
        isHovered ? 'text-[#153577]' : 'text-[#ffffff]'
      }`}>
        <p className="adjustLetterSpacing block leading-[normal]">{title}</p>
      </div>

      {/* Description */}
      <div className={`absolute bottom-[26.984%] font-['Lufga:Regular',_sans-serif] leading-[0] left-[6.944%] not-italic right-[7.292%] text-[14px] md:text-[16px] lg:text-[18px] text-left top-[42.593%] tracking-[-0.27px] transition-colors duration-300 ${
        isHovered ? 'text-neutral-800' : 'text-[#ffffff]'
      }`}>
        <p className="adjustLetterSpacing block leading-[normal]">{description}</p>
      </div>

      {/* Decorative SVG */}
      <div className="absolute bottom-[1.587%] left-[46.528%] right-[3.125%] top-[56.349%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 145 159"
        >
          <path
            d={svgPathsProcess.p323d5900}
            fill={isHovered ? "var(--fill-0, #848485)" : "var(--fill-0, #888888)"}
            fillOpacity="0.3"
            id="Subtract"
          />
        </svg>
      </div>
    </div>
  )
}

// Enhanced skill badge component with iPad/1080p responsiveness
function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-sm border border-[#99e9ff]/30 bg-white/60 text-[#3b3b3b] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#153577]/10 hover:to-[#99e9ff]/20 hover:border-[#99e9ff] hover:text-[#153577] hover:scale-105 hover:shadow-lg">
      <span className="text-sm font-medium">{children}</span>
    </div>
  )
}

// Enhanced Tool icon component with iPad/1080p responsiveness
function ToolIcon({ children, name }: { children: React.ReactNode; name: string }) {
  return (
    <div className="group relative">
      <div className="w-14 h-14 md:w-16 md:h-16 xl:w-18 xl:h-18 rounded-xl bg-white/90 backdrop-blur-sm border border-[#99e9ff]/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-white hover:border-[#99e9ff]/50">
        {children}
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-[#3b3b3b] bg-white/95 px-2 py-1 rounded-md whitespace-nowrap shadow-lg">{name}</span>
      </div>
    </div>
  )
}

// Star rating component
function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#FBB432] fill-current" viewBox="0 0 27 26">
          <path d={svgPaths.pc42afc0} />
        </svg>
      ))}
    </div>
  )
}

// Enhanced Testimonial card component with iPad/1080p responsiveness
function TestimonialCard({ index }: { index: number }) {
  return (
    <Card className="h-full bg-white/90 backdrop-blur-sm border-[#99e9ff]/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#99e9ff]/40">
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={img} 
            alt="Jayesh Patil" 
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-[#99e9ff]/20"
          />
          <div>
            <h4 className="font-semibold text-[#3b3b3b] text-sm md:text-base">Jayesh Patil</h4>
            <p className="text-[#3b3b3b]/70 text-xs md:text-sm">CEO, Lirante</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <StarRating />
          <span className="text-[#3b3b3b] font-medium text-sm md:text-base">5.0</span>
        </div>
        
        <p className="text-[#3b3b3b]/80 leading-relaxed text-sm md:text-base">
          "Exceptional design skills and attention to detail. The project was delivered on time with outstanding quality. Highly recommended for any design work."
        </p>
      </CardContent>
    </Card>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [hoveredCards, setHoveredCards] = useState<{[key: string]: boolean}>({})

  const handleCardHover = (cardId: string, hovered: boolean) => {
    setHoveredCards(prev => ({ ...prev, [cardId]: hovered }))
  }

  const tools = [
    { name: 'Photoshop', content: <svg className="w-8 h-8" viewBox="0 0 29 22"><path d={svgPaths.p28e7aa00} fill="#31A8FF" /><path d={svgPaths.pc7c1700} fill="#31A8FF" /></svg> },
    { name: 'Illustrator', content: <svg className="w-8 h-8" viewBox="0 0 26 23"><path d={svgPaths.p1ec1ec00} fill="#FF9A00" /><path d={svgPaths.p27884f00} fill="#FF9A00" /></svg> },
    { name: 'Premiere', content: <svg className="w-8 h-8" viewBox="0 0 27 21"><path d={svgPaths.p2c634c00} fill="#9999FF" /><path d={svgPaths.p16fb5200} fill="#9999FF" /></svg> },
    { name: 'Lightroom', content: <svg className="w-8 h-8" viewBox="0 0 26 21"><path d={svgPaths.pb261380} fill="#31A8FF" /><path d={svgPaths.p202ddd00} fill="#31A8FF" /></svg> },
    { name: 'XD', content: <svg className="w-8 h-8" viewBox="0 0 34 23"><path d={svgPaths.p27d4d500} fill="#FF61F6" /><path d={svgPaths.p3d38af00} fill="#FF61F6" /></svg> },
    { name: 'Figma', content: <svg className="w-8 h-8" viewBox="0 0 46 46"><path d={svgPaths.p1ddc8000} fill="#0ACF83" /><path d={svgPaths.p92fa900} fill="#A259FF" /><path d={svgPaths.p2f64ce00} fill="#F24E1E" /><path d={svgPaths.p1c368780} fill="#FF7262" /><path d={svgPaths.pbea0780} fill="#1ABCFE" /></svg> },
    { name: 'Notion', content: <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center"><span className="text-white text-sm font-bold">N</span></div> },
    { name: 'GitHub', content: <svg className="w-8 h-8" viewBox="0 0 46 46"><path d={svgPaths.pc02180} fill="#181818" /><path d={svgPaths.pcf3ff80} fill="white" /></svg> }
  ]

  const skills = [
    'Extremely Organized',
    'Leadership',
    'Growth Mindset',
    'Problem Solving',
    'Time Management',
    'Communication',
    'Teamwork',
    'Self-learn',
    'Attention to detail',
    'Design Ops',
    'Realistic Prototyping',
    'Interaction'
  ]

  const processData = [
    {
      number: "01",
      title: "Brand Identity & Strategy",
      description: "From logo design to full brand systems, I create cohesive identities that reflect your vision and resonate with your audience."
    },
    {
      number: "02", 
      title: "UI/UX Design & Digital Experiences",
      description: "I design intuitive, user-centered digital experiences that enhance engagement and bring brands to life online."
    },
    {
      number: "03",
      title: "Fast Integration", 
      description: "With a strong design system in place, I deliver fast, scalable, and consistent solutions."
    },
    {
      number: "04",
      title: "Creative Direction & Collaboration",
      description: "From logo design to full brand systems, I create cohesive identities that reflect your vision and resonate with your audience."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <BackgroundDecorations />
      <Navigation />
      
      <div className="relative z-10">
        {/* Enhanced Hero Landing Section - iPhone 16 optimized to 550px image height */}
        <section id="home" className="min-h-[100vh] lg:min-h-[130vh] relative overflow-hidden bg-gradient-to-br from-[#f7f7f7] via-white to-[#f0f9ff] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {/* Desktop Image - with grayscale filter applied */}
          <div className="hidden lg:block absolute flex h-[1188px] items-center justify-center top-[-38px] w-[1002px]" style={{ left: "calc(33.333% + 77px)" }}>
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <div
                className="[background-size:261.99%_165.61%] bg-[55.87%_99.98%] bg-no-repeat h-[1188px] w-[1002px] filter grayscale"
                style={{ backgroundImage: `url('${imgJonas}')` }}
              />
            </div>
          </div>

          {/* Content Container with iPhone 16 optimization */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start min-h-[100vh] lg:min-h-[130vh] pt-32 sm:pt-28 md:pt-30 lg:pt-0">
            {/* Left Content with enhanced responsiveness */}
            <div className="flex-1 lg:max-w-2xl xl:max-w-3xl space-y-4 md:space-y-6 lg:absolute lg:left-[8%] xl:left-[10%] lg:top-48 xl:top-52 text-center lg:text-left">
              {/* Hi, I'm */}
              <AnimatedText delay={200}>
                <div className="font-semibold leading-[1.1] text-[40px] sm:text-[50px] md:text-[56px] lg:text-[62px] xl:text-[70px] text-neutral-900 tracking-[-0.93px]">
                  <p className="adjustLetterSpacing block">Hi, I'm</p>
                </div>
              </AnimatedText>

              {/* Mark Jonas - Enhanced responsiveness */}
              <AnimatedText delay={400}>
                <div className="bg-clip-text bg-gradient-to-r font-bold from-[#153577] from-[2.568%] leading-[1.1] text-[60px] sm:text-[70px] md:text-[80px] lg:text-[88px] xl:text-[96px] to-[#99e9ff] to-[67.145%] tracking-[-1.32px] animate-popIn pb-2" style={{ WebkitTextFillColor: "transparent" }}>
                  <p className="adjustLetterSpacing block whitespace-nowrap">Mark Jonas</p>
                </div>
              </AnimatedText>

              {/* Designer Text */}
              <AnimatedText delay={600}>
                <div className="font-semibold leading-[1.1] text-[40px] sm:text-[50px] md:text-[56px] lg:text-[62px] xl:text-[70px] text-neutral-900 tracking-[-0.93px]">
                  <DesignerText />
                </div>
              </AnimatedText>

              {/* Tagline */}
              <AnimatedText delay={800}>
                <div className="leading-[1.1] not-italic text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] text-neutral-900 tracking-[-0.42px] max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto lg:mx-0">
                  <p className="adjustLetterSpacing block">Designing for clarity and delight.</p>
                </div>
              </AnimatedText>

              {/* Social Icons */}
              <AnimatedText delay={1000}>
                <div className="flex flex-row gap-6 md:gap-8 lg:gap-[46px] xl:gap-[52px] items-center justify-center lg:justify-start">
                  <SocialIcon href="#">
                    <svg className="w-6 h-6" viewBox="0 0 50 50">
                      <path d={svgPathsReference.p1f5a3900} fill="currentColor" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#">
                    <svg className="w-6 h-6" viewBox="0 0 50 50">
                      <path d={svgPathsReference.p26cf9900} fill="currentColor" />
                      <path d={svgPathsReference.p3cd44180} fill="currentColor" />
                      <path d={svgPathsReference.p1b172280} fill="currentColor" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#">
                    <svg className="w-6 h-6" viewBox="0 0 50 50">
                      <path d={svgPathsReference.p3d1d9d00} fill="currentColor" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon href="#">
                    <svg className="w-6 h-6" viewBox="0 0 50 50">
                      <path d={svgPathsReference.p1e3e9880} fill="currentColor" />
                      <path d={svgPathsReference.p3ab7b700} fill="currentColor" />
                      <path d={svgPathsReference.p21100400} fill="currentColor" />
                    </svg>
                  </SocialIcon>
                </div>
              </AnimatedText>
            </div>

            {/* Mobile Image - iPhone 16 optimized to 550px height for proportional scaling */}
            <div className="block lg:hidden w-full mx-auto mt-4 mb-0">
              <AnimatedText delay={1000}>
                <div className="relative w-full h-[550px] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center filter grayscale"
                    style={{ 
                      backgroundImage: `url('${imgJonas}')`,
                      transform: 'scaleY(-1) rotate(180deg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
              </AnimatedText>
            </div>
          </div>

          {/* Buttons Container with better positioning */}
          <AnimatedText delay={1200}>
            <div className="absolute bottom-12 sm:bottom-4 md:bottom-8 lg:bottom-48 xl:bottom-52 left-1/2 transform -translate-x-1/2">
              <ButtonsContainer />
            </div>
          </AnimatedText>

          {/* Desktop ABOUT ME Text - positioned to dock on black background with 1/4 overlap */}
          <div className="hidden lg:block absolute font-['Lufga:Black',_sans-serif] font-black leading-[1] left-6 sm:left-12 lg:left-24 xl:left-32 not-italic text-[76px] xl:text-[88px] text-neutral-900 bottom-[45px] xl:bottom-[40px] tracking-[-1.32px] whitespace-nowrap z-30">
            <AnimatedText delay={1400}>
              <p className="adjustLetterSpacing block">ABOUT ME</p>
            </AnimatedText>
          </div>

          {/* Mobile ABOUT ME Text - positioned for mobile */}
          <div className="block lg:hidden absolute font-['Lufga:Black',_sans-serif] font-black leading-[1] left-6 md:left-8 not-italic text-[44px] md:text-[50px] text-neutral-900 bottom-[-20px] tracking-[-1.32px] whitespace-nowrap z-20">
            <AnimatedText delay={1400}>
              <p className="adjustLetterSpacing block">ABOUT ME</p>
            </AnimatedText>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="relative">
          <div className="relative">
            <AboutMe />
          </div>
        </section>

        {/* Work Experience Section with Process Frame */}
        <section id="experience" className="relative">
          <WorkExp />
          
          {/* Process Frame for Work Experience */}
          <div className="py-16 md:py-20 xl:py-24 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 bg-neutral-900">
            <div className="max-w-6xl xl:max-w-7xl mx-auto">
              <ScrollTriggeredText popup={true} className="text-center mb-12 md:mb-16 xl:mb-20">
                <h2 className="font-['Lufga:Regular',_sans-serif] text-[48px] md:text-[56px] lg:text-[64px] leading-[0.99] text-[#ffffff] mb-6 md:mb-8">
                  Design Solutions That Elevate Your Brand
                </h2>
                <p className="font-['Lufga:Regular',_sans-serif] text-[18px] md:text-[20px] lg:text-[22px] leading-[normal] text-[#ffffff] tracking-[-0.33px] max-w-5xl mx-auto">
                  From strategy to evaluation, I provide tailored design services that help brands stand out and create meaningful connections. Whether you need a strong identity, a seamless digital experience, or creative direction, I've got you covered.
                </p>
              </ScrollTriggeredText>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
                {processData.map((process, index) => (
                  <ScrollTriggeredText key={index} delay={index * 200}>
                    <ProcessCard
                      number={process.number}
                      title={process.title}
                      description={process.description}
                      isHovered={hoveredCards[`work-${index}`]}
                      onHover={(hovered) => handleCardHover(`work-${index}`, hovered)}
                    />
                  </ScrollTriggeredText>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Skillset Section with Process Frame and iPad/1080p responsiveness */}
        <section id="skills" className="py-20 md:py-24 xl:py-28 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-6xl xl:max-w-7xl mx-auto text-center">
            <ScrollTriggeredText popup={true} delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#344054] mb-12 md:mb-16 xl:mb-20">
                Skillset
              </h1>
            </ScrollTriggeredText>
            
            {/* Design Tools */}
            <AnimatedText delay={300}>
              <div className="mb-16 md:mb-20 xl:mb-24">
                <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-[#344054] mb-6 md:mb-8 xl:mb-10">Design Tools</h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 xl:gap-8 mb-8">
                  {tools.map((tool, index) => (
                    <div key={tool.name} style={{ animationDelay: `${index * 100}ms` }} className="animate-fadeInUp">
                      <ToolIcon name={tool.name}>
                        {tool.content}
                      </ToolIcon>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {/* Soft Skills */}
            <AnimatedText delay={500}>
              <div className="mb-16 md:mb-20 xl:mb-24">
                <h3 className="text-lg md:text-xl xl:text-2xl font-medium text-[#344054] mb-6 md:mb-8 xl:mb-10">Core Competencies</h3>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 xl:gap-6 max-w-4xl xl:max-w-5xl mx-auto">
                  {skills.map((skill, index) => (
                    <div key={skill} style={{ animationDelay: `${index * 50}ms` }} className="animate-fadeInUp">
                      <SkillBadge>
                        {skill}
                      </SkillBadge>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {/* Process Frame for Skills */}
            <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 xl:p-16 mb-16 md:mb-20 xl:mb-24">
              <ScrollTriggeredText popup={true} className="text-center mb-12 md:mb-16">
                <h2 className="font-['Lufga:Regular',_sans-serif] text-[32px] md:text-[40px] lg:text-[48px] leading-[0.99] text-[#ffffff] mb-4 md:mb-6">
                  My Design Process
                </h2>
                <p className="font-['Lufga:Regular',_sans-serif] text-[16px] md:text-[18px] lg:text-[20px] leading-[normal] text-[#ffffff] tracking-[-0.33px] max-w-4xl mx-auto">
                  A systematic approach to creating exceptional design solutions that drive results.
                </p>
              </ScrollTriggeredText>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {processData.map((process, index) => (
                  <ScrollTriggeredText key={index} delay={index * 200}>
                    <ProcessCard
                      number={process.number}
                      title={process.title}
                      description={process.description}
                      isHovered={hoveredCards[`skill-${index}`]}
                      onHover={(hovered) => handleCardHover(`skill-${index}`, hovered)}
                    />
                  </ScrollTriggeredText>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section with iPad/1080p responsiveness */}
        <section id="testimonials" className="py-20 md:py-24 xl:py-28 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 bg-gradient-to-br from-white via-[#f8fafc] to-gray-50/50">
          <div className="max-w-6xl xl:max-w-7xl mx-auto">
            <ScrollTriggeredText popup={true} delay={100}>
              <div className="text-left mb-12 md:mb-16 xl:mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#344054] mb-4 md:mb-6 xl:mb-8">
                  Trusted by{' '}
                  <span className="bg-gradient-to-r from-[#153577] to-[#99e9ff] bg-clip-text text-transparent">
                    Brands
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#153577] to-[#99e9ff] bg-clip-text text-transparent">
                    Love
                  </span>{' '}
                  by Clients
                </h2>
                <p className="text-lg md:text-xl xl:text-2xl text-[#3b3b3b]/80 max-w-4xl xl:max-w-5xl leading-relaxed">
                  From strategy to evaluation, I provide tailored design services that help brands stand out and create meaningful connections. Whether you need a strong identity, a seamless digital experience, or creative direction, I've got you covered.
                </p>
              </div>
            </ScrollTriggeredText>

            <AnimatedText delay={300}>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
                {[0, 1, 2].map((index) => (
                  <div key={index} style={{ animationDelay: `${index * 200}ms` }} className="animate-fadeInUp">
                    <TestimonialCard index={index} />
                  </div>
                ))}
              </div>
            </AnimatedText>
          </div>
        </section>

        {/* Enhanced CTA Section with iPad/1080p responsiveness */}
        <section id="contact" className="py-28 md:py-32 xl:py-36 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 bg-gradient-to-br from-white via-[#99e9ff]/5 to-[#153577]/5">
          <div className="max-w-4xl xl:max-w-5xl mx-auto text-center">
            <ScrollTriggeredText popup={true} delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#344054] mb-6 md:mb-8 xl:mb-10">
                Let's Build Something{' '}
                <span className="bg-gradient-to-r from-[#153577] to-[#99e9ff] bg-clip-text text-transparent">
                  Great Together.
                </span>
              </h2>
            </ScrollTriggeredText>

            <AnimatedText delay={300}>
              <div className="mb-12">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 max-w-2xl xl:max-w-3xl mx-auto mb-8">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-[#99e9ff]" viewBox="0 0 32 32" fill="none">
                        <path d={svgPaths.p296a700} fill="currentColor" />
                      </svg>
                    </div>
                    <Input
                      type="email"
                      placeholder="Enter Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-14 py-6 xl:py-8 text-lg xl:text-xl bg-white/90 backdrop-blur-sm border-[#99e9ff]/30 rounded-full focus:ring-2 focus:ring-[#99e9ff]/50 shadow-lg hover:border-[#99e9ff]/50 transition-all duration-300"
                    />
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-[#153577] to-[#99e9ff] hover:from-[#1a3a7a] hover:to-[#7dd3ff] text-white px-8 py-6 xl:py-8 text-lg xl:text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Send</span>
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-10 text-sm md:text-base text-[#3b3b3b]">
                  <div className="flex items-center gap-2 bg-white/60 px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5 text-[#FBB432] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span>4.9/5 Average Ratings</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5 text-[#292D32]" viewBox="0 0 24 24">
                      <path d={svgPaths.p16090180} fill="currentColor" />
                      <path d={svgPaths.p2495c400} fill="currentColor" />
                    </svg>
                    <span>25+ Winning Awards</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 px-4 py-2 md:px-6 md:py-3 rounded-full backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105">
                    <svg className="w-5 h-5 text-[#292D32]" viewBox="0 0 24 24">
                      <path d={svgPaths.p3d3b8a00} fill="currentColor" />
                    </svg>
                    <span>Certified Product Designer</span>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="relative">
          <Footer />
        </footer>
      </div>
    </div>
  )
}