import { useState, useEffect } from 'react'
import img451 from "figma:asset/beb70714ff17a96192e8c58f4fbaa70ca5abf3e3.png"

// Scroll-triggered animation component
function ScrollTriggeredText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, delay])

  return (
    <div 
      ref={setRef}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} ${className}`}
    >
      {children}
    </div>
  )
}

function WorkExp() {
  const experiences = [
    {
      company: "Freelancer",
      period: "Nov. 28, 2024 - Jan. 28, 2025",
      position: "Graphic & Web Designer",
      isActive: false
    },
    {
      company: "Integreon Managed Solutions",
      period: "Feb. 16, 2024 - Present",
      position: "Design Associate", 
      isActive: true
    },
    {
      company: "City Government of Batangas",
      period: "Feb. 8, 2023 - May 8, 2023",
      position: "IT Intern",
      isActive: false
    }
  ]

  return (
    <div className="relative w-full bg-[#f7f7f7] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16" data-name="Work Exp">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `url('${img451}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto">
        {/* Title with popup animation and iPad/1080p responsiveness */}
        <ScrollTriggeredText className="text-center mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <h1 className="font-['Lufga:Medium',_sans-serif] text-[43px] sm:text-[51px] md:text-[55px] lg:text-[59px] xl:text-[66px] leading-none text-[#344054] tracking-[-0.88px]">
            My{" "}
            <span
              className="bg-clip-text bg-gradient-to-r from-[#153577] to-[#99e9ff]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              Work Experience
            </span>
          </h1>
        </ScrollTriggeredText>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Mobile Layout with timeline line perfectly centered */}
          <div className="block lg:hidden">
            <div className="relative space-y-8 md:space-y-10">
              {/* Continuous vertical line for mobile - perfectly centered with circles */}
              <div className="absolute left-[24px] top-12 w-0.5 bg-gradient-to-b from-[#344054] via-[#344054] to-transparent opacity-30" style={{ height: 'calc(100% - 48px)' }}></div>
              
              {experiences.map((exp, index) => (
                <ScrollTriggeredText key={index} delay={index * 200}>
                  <div className="relative">
                    {/* Timeline dot - perfectly centered */}
                    <div className="absolute left-0 top-0 z-10">
                      <div className="relative w-12 h-12">
                        <svg className="block w-full h-full" fill="none" viewBox="0 0 50 50">
                          <rect
                            fill="white"
                            height="48"
                            rx="24"
                            width="48"
                            x="1"
                            y="1"
                          />
                          <rect
                            height="48"
                            rx="24"
                            stroke="#1D2939"
                            strokeDasharray="7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            width="48"
                            x="1"
                            y="1"
                          />
                          <circle
                            cx="25"
                            cy="25"
                            fill={exp.isActive ? "#99E9FF" : "#606060"}
                            r="18"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-20 space-y-1">
                      <div>
                        <h3 className="font-['Lufga:SemiBold',_sans-serif] text-[17px] sm:text-[19px] md:text-[21px] text-[#344054] tracking-[-0.29px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                          {exp.company}
                        </h3>
                        <p className="font-['Lufga:Regular',_sans-serif] text-[12px] sm:text-[13px] md:text-[14px] text-[#98a2b3] tracking-[-0.19px] leading-tight mt-1 whitespace-nowrap">
                          {exp.period}
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="font-['Lufga:SemiBold',_sans-serif] text-[15px] sm:text-[17px] md:text-[19px] text-[#344054] tracking-[-0.26px] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                          {exp.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollTriggeredText>
              ))}
            </div>
          </div>

          {/* Desktop Layout with iPad/1080p responsiveness */}
          <div className="hidden lg:block">
            <div className="flex items-start justify-between max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
              {/* Left Column - Positions */}
              <div className="flex flex-col space-y-[120px] xl:space-y-[140px] 2xl:space-y-[160px]">
                {experiences.map((exp, index) => (
                  <ScrollTriggeredText key={`position-${index}`} delay={index * 200}>
                    <div className="pt-0">
                      <h3 className="font-['Lufga:SemiBold',_sans-serif] text-[25px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] text-[#344054] tracking-[-0.44px] leading-tight max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {exp.position}
                      </h3>
                    </div>
                  </ScrollTriggeredText>
                ))}
              </div>

              {/* Center - Timeline */}
              <div className="flex flex-col items-center space-y-0 mx-6 xl:mx-8 2xl:mx-10">
                {/* Vertical line */}
                <div className="relative h-[360px] xl:h-[420px] 2xl:h-[480px]">
                  <svg className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1" viewBox="0 0 3 420">
                    <line
                      stroke="#344054"
                      strokeDasharray="6 6"
                      strokeWidth="3"
                      x1="1.5"
                      y1="0"
                      x2="1.5"
                      y2="420"
                    />
                  </svg>
                </div>

                {/* Timeline dots - aligned with content */}
                <div className="absolute top-0 flex flex-col space-y-[120px] xl:space-y-[140px] 2xl:space-y-[160px] items-center">
                  {experiences.map((exp, index) => (
                    <ScrollTriggeredText key={`dot-${index}`} delay={index * 200 + 100}>
                      <div className="relative w-12 h-12 xl:w-14 xl:h-14">
                        <svg className="block w-full h-full" fill="none" viewBox="0 0 50 50">
                          <rect
                            fill="white"
                            height="48"
                            rx="24"
                            width="48"
                            x="1"
                            y="1"
                          />
                          <rect
                            height="48"
                            rx="24"
                            stroke="#1D2939"
                            strokeDasharray="7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            width="48"
                            x="1"
                            y="1"
                          />
                          <circle
                            cx="25"
                            cy="25"
                            fill={exp.isActive ? "#99E9FF" : "#606060"}
                            r="18"
                          />
                        </svg>
                      </div>
                    </ScrollTriggeredText>
                  ))}
                </div>
              </div>

              {/* Right Column - Companies aligned to top of positions */}
              <div className="flex flex-col space-y-[120px] xl:space-y-[140px] 2xl:space-y-[160px]">
                {experiences.map((exp, index) => (
                  <ScrollTriggeredText key={`company-${index}`} delay={index * 200 + 300}>
                    <div className="pt-0">
                      <h4 className="font-['Lufga:SemiBold',_sans-serif] text-[25px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] text-[#344054] tracking-[-0.44px] leading-tight max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {exp.company}
                      </h4>
                      <p className="font-['Lufga:Regular',_sans-serif] text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[#98a2b3] tracking-[-0.24px] leading-tight whitespace-nowrap mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </ScrollTriggeredText>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExp