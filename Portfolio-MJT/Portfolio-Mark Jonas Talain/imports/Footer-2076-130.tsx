import { useState } from 'react'
import svgPaths from "./svg-z7ggibk5vs"

function Footer() {
  const [email, setEmail] = useState('')
  const [isHireMeHovered, setIsHireMeHovered] = useState(false)
  const [isSubscriptionHovered, setIsSubscriptionHovered] = useState(false)

  const handleSubscriptionClick = () => {
    console.log('Subscription clicked with email:', email)
    // Add subscription logic here
  }

  const handleHireMeClick = () => {
    console.log('Hire me clicked')
    // Add hire me logic here
  }

  return (
    <div className="relative w-full" data-name="Footer">
      <div className="bg-[#272727] flex flex-col min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[500px] xl:min-h-[520px] px-4 sm:px-6 md:px-8 lg:px-[71px] xl:px-[90px] py-6 sm:py-8 md:py-10 lg:py-[25px] xl:py-[30px] rounded-tl-[24px] rounded-tr-[24px] w-full justify-between">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 md:mb-6 lg:mb-8 w-full">
          <div className="flex flex-col font-['Lufga:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[#fcfcfd] text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-left tracking-[-0.96px] mb-4 md:mb-6 lg:mb-0 lg:w-[643px]">
            <p className="adjustLetterSpacing block leading-[normal]">
              Lets Connect there
            </p>
          </div>
          <div
            className="bg-[#99e9ff] flex flex-row items-center justify-center overflow-clip px-4 md:px-5 py-2 md:py-2.5 rounded-[60px] w-full sm:w-auto min-w-[180px] md:min-w-[202px] cursor-pointer transition-all duration-300 group hover:scale-105 hover:shadow-xl"
            data-name="Component 12"
            onMouseEnter={() => setIsHireMeHovered(true)}
            onMouseLeave={() => setIsHireMeHovered(false)}
            onClick={handleHireMeClick}
          >
            <div className="font-['Lufga:Medium',_sans-serif] leading-[0] not-italic shrink-0 text-[#ffffff] text-[16px] sm:text-[20px] md:text-[25.692px] text-left text-nowrap tracking-[-0.3854px]">
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                Hire me
              </p>
            </div>
            <div
              className={`relative shrink-0 size-[24px] sm:size-[32px] md:size-[42px] ml-2 transition-all duration-300 ${
                isHireMeHovered ? 'transform translate-x-1 rotate-12' : ''
              }`}
              data-name="icon / outlined / directions / straight arrows / up right"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 42 42"
              >
                <g id="icon / outlined / directions / straight arrows / up right">
                  <path
                    d="M12.25 29.75L29.75 12.25"
                    id="Vector"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.25 12.25H29.75V29.75"
                    id="Vector_2"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* First Divider Line */}
        <div className="h-0 relative shrink-0 w-full mb-4 md:mb-6 lg:mb-8">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1300 2"
            >
              <path
                d="M1 1H1299"
                id="Line 5"
                stroke="var(--stroke-0, #475467)"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Main Content Section - Restored original layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start justify-start w-full flex-1">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-start justify-start w-full lg:w-auto lg:min-w-[151px]">
            <div
              className="h-[24px] sm:h-[28px] md:h-[30px] lg:h-[32px] relative shrink-0 w-[25px] sm:w-[29px] md:w-[31px] lg:w-[33.231px] mb-4 md:mb-6"
              data-name="Logo MJ"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 34 32"
              >
                <g id="Logo MJ">
                  <path
                    d={svgPaths.p25f99b00}
                    fill="var(--fill-0, white)"
                    id="Vector"
                  />
                  <path
                    d={svgPaths.p38d6aa00}
                    fill="var(--fill-0, #231F20)"
                    id="Vector_2"
                  />
                  <g id="Group">
                    <path
                      d={svgPaths.p4fe5b00}
                      fill="var(--fill-0, white)"
                      id="Vector_3"
                    />
                    <path
                      d={svgPaths.p23c8100}
                      fill="var(--fill-0, white)"
                      id="Vector_4"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-row gap-[5px] items-start justify-start">
              {/* Social Media Icons with enhanced hover effects */}
              {[
                { icon: svgPaths.p388ecb00, name: "Facebook" },
                { icon: svgPaths.p31756800, name: "YouTube" },
                { icon: svgPaths.p3adb3370, name: "WhatsApp" },
                { icon: svgPaths.p21f20f80, name: "Instagram" },
                { icon: svgPaths.p14c1cdc0, name: "Twitter" }
              ].map((social, index) => (
                <div
                  key={index}
                  className="relative shrink-0 size-5 md:size-6 cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg group"
                  data-name={`social-${social.name}`}
                >
                  <svg
                    className="block size-full group-hover:text-[#99e9ff] transition-colors duration-300"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d={social.icon}
                      fill="currentColor"
                      className="text-white group-hover:text-[#99e9ff]"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Content Grid - Navigation and Contact */}
          <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-1">
            {/* Navigation Section */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-start justify-start">
              <div className="flex flex-col font-['Lufga:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[#99e9ff] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-left text-nowrap tracking-[-0.3px]">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                  Navigation
                </p>
              </div>
              <div className="flex flex-col font-['Lufga:Regular',_sans-serif] gap-2 md:gap-3 lg:gap-4 items-start justify-start leading-[0] not-italic text-[#fcfcfd] text-[12px] md:text-[14px] lg:text-[16px] text-left text-nowrap tracking-[-0.24px]">
                {['Home', 'About Us', 'Service', 'Resume', 'Project'].map((item, index) => (
                  <div key={index} className="flex flex-col justify-center relative shrink-0">
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre hover:text-[#99e9ff] transition-colors duration-300 cursor-pointer hover:translate-x-1 transform"
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-start justify-start">
              <div className="flex flex-col font-['Lufga:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[#99e9ff] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-left text-nowrap tracking-[-0.3px]">
                <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                  Contact
                </p>
              </div>
              <div className="flex flex-col font-['Lufga:Regular',_sans-serif] gap-2 md:gap-3 lg:gap-4 items-start justify-start leading-[0] not-italic text-[#fcfcfd] text-[12px] md:text-[14px] lg:text-[16px] text-left text-nowrap tracking-[-0.24px]">
                {[
                  { text: '+63 949 733 4430', href: 'tel:+639497334430' },
                  { text: 'markjonastalain@gmail.com', href: 'mailto:markjonastalain@gmail.com' },
                  { text: 'Portfolio-MJ.T.com', href: '#' }
                ].map((contact, index) => (
                  <div key={index} className="flex flex-col justify-center relative shrink-0">
                    <a 
                      href={contact.href}
                      className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre hover:text-[#99e9ff] transition-all duration-300 cursor-pointer hover:translate-x-1 transform hover:underline"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Subscription Section - Repositioned to right side with maximized width */}
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 items-start justify-start w-full lg:w-auto lg:min-w-[350px] xl:min-w-[400px]">
            <div 
              className="flex flex-col font-['Lufga:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[#99e9ff] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-left text-nowrap tracking-[-0.3px] cursor-pointer hover:text-white transition-colors duration-300"
              onClick={() => document.getElementById('email-input')?.focus()}
            >
              <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
                Get the latest information
              </p>
            </div>
            {/* Maximized width input and button layout */}
            <div className="flex flex-row items-start justify-start w-full">
              <div className="bg-[#ffffff] flex flex-row gap-2.5 h-[44px] md:h-[51px] items-center justify-start overflow-clip px-3 md:px-3.5 py-2 md:py-[13px] rounded-bl-[14px] rounded-tl-[14px] flex-1">
                <input
                  id="email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex flex-col font-['Lufga:Regular',_sans-serif] justify-center leading-[0] not-italic text-[#000000] text-[12px] md:text-[14px] lg:text-[16px] text-left text-nowrap tracking-[-0.24px] bg-transparent border-none outline-none w-full footer-input-no-outline"
                />
              </div>
              <div 
                className="bg-[#99e9ff] flex flex-row gap-2.5 h-[44px] md:h-[51px] items-center justify-center overflow-clip px-2 py-2.5 rounded-br-[14px] rounded-tr-[14px] w-[40px] md:w-[46px] cursor-pointer transition-all duration-300 hover:bg-[#7dd3ff] hover:scale-105 group"
                onMouseEnter={() => setIsSubscriptionHovered(true)}
                onMouseLeave={() => setIsSubscriptionHovered(false)}
                onClick={handleSubscriptionClick}
              >
                <div
                  className={`overflow-clip relative shrink-0 size-5 md:size-6 transition-all duration-300 ${
                    isSubscriptionHovered ? 'transform translate-x-1' : ''
                  }`}
                  data-name="UI icon/send/filled"
                >
                  <div className="absolute bottom-[10.922%] left-[8.468%] right-[8.995%] top-[10.923%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      role="presentation"
                      viewBox="0 0 20 19"
                    >
                      <path
                        d={svgPaths.p23860230}
                        fill="var(--fill-0, #FCFCFD)"
                        id="Subtract"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Divider Line */}
        <div className="h-0 relative shrink-0 w-full mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-6 lg:mb-8">
          <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1300 2"
            >
              <path
                d="M1 1H1299"
                id="Line 5"
                stroke="var(--stroke-0, #475467)"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row lg:flex-row font-['Lufga:Regular',_sans-serif] gap-3 md:gap-4 lg:gap-[513px] items-start sm:items-center lg:items-center justify-start sm:justify-between lg:justify-between leading-[0] not-italic text-[#ffffff] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] text-left text-nowrap tracking-[-0.3px] w-full">
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              Copyright© 2025 Mark Jonas. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0">
            <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
              User Terms & Conditions | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Footer1() {
  return (
    <div className="bg-[#ffffff] relative w-full" data-name="Footer">
      <Footer />
    </div>
  )
}