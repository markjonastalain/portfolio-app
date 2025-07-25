import { useState, useEffect } from 'react'
import svgPaths from "../imports/svg-qdz20kla8z"
import img8F6D0C4A0E0B40CeA0C7B3E3E3762E3D2 from "figma:asset/8088494a7ee78b9e9b298c2be72b607f5940b769.png"
import img53B0DbfeC0Cb49C597762A4D3179A2361 from "figma:asset/d2f42110cbe7dd33838b20ced2200d78fc98ab13.png"
import imgBdf8Dff9340E4F01833677Fb88E368Ee1 from "figma:asset/e19115654c414541c2c43398e7ec78cf3df9de26.png"

interface Component1Props {
  property1?: "Default" | "Variant2" | "Variant3";
}

function Component1({ property1 = "Default" }: Component1Props) {
  const element = (
    <div className="absolute h-[250px] sm:h-[300px] md:h-[380px] lg:h-[500px] xl:h-[578px] left-2 sm:left-4 md:left-6 lg:left-[110px] xl:left-[130px] rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[54px] top-[15px] sm:top-[20px] md:top-[25px] lg:top-[40px] xl:top-[57px] w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[471px]">
      <div className="absolute border-2 border-[#99e9ff] border-dashed inset-0 pointer-events-none rounded-[25px] sm:rounded-[30px] md:rounded-[35px] lg:rounded-[54px]" />
    </div>
  );
  
  if (property1 === "Variant2") {
    return (
      <div className="relative size-full" data-name="Property 1=Variant2">
        <div className="absolute contents left-2 sm:left-4 md:left-6 lg:left-[110px] xl:left-[130px] top-[15px] sm:top-[20px] md:top-[25px] lg:top-[40px] xl:top-[57px]">
          {element}
          <div className="absolute flex items-center justify-center left-[100px] sm:left-[125px] md:left-[150px] lg:left-[175px] xl:left-[251px] top-[280px] sm:top-[350px] md:top-[430px] lg:top-[520px] xl:top-[599px]">
            <div className="flex-none scale-y-[-100%]">
              <div className="box-border content-stretch flex flex-row gap-[5px] sm:gap-[6px] md:gap-[7px] lg:gap-[10px] xl:gap-[11.311px] items-start justify-start p-0 relative">
                <div className="bg-[#e4e7ec] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 size-[6px] sm:size-[8px] md:size-[9px] lg:size-[12px] xl:size-[15.081px]" />
                <div className="bg-[#91dcf1] h-[6px] sm:h-[8px] md:h-[9px] lg:h-[12px] xl:h-[15.081px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 w-[24px] sm:w-[32px] md:w-[36px] lg:w-[50px] xl:w-[60.324px]" />
                <div className="bg-[#e4e7ec] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 size-[6px] sm:size-[8px] md:size-[9px] lg:size-[12px] xl:size-[15.081px]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="[background-size:100%_108.65%] absolute bg-bottom-left bg-no-repeat h-[230px] sm:h-[280px] md:h-[350px] lg:h-[460px] xl:h-[535px] left-1 sm:left-2 md:left-3 lg:left-[90px] xl:left-[110px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[44px] top-[5px] sm:top-[10px] md:top-[12px] lg:top-[20px] xl:top-[35px] w-[180px] sm:w-[230px] md:w-[280px] lg:w-[330px] xl:w-[436px]"
          style={{
            backgroundImage: `url('${img8F6D0C4A0E0B40CeA0C7B3E3E3762E3D2}')`,
          }}
        />
      </div>
    );
  }
  
  if (property1 === "Variant3") {
    return (
      <div className="relative size-full" data-name="Property 1=Variant3">
        <div className="absolute contents left-2 sm:left-4 md:left-6 lg:left-[110px] xl:left-[130px] top-[15px] sm:top-[20px] md:top-[25px] lg:top-[40px] xl:top-[57px]">
          {element}
          <div className="absolute flex items-center justify-center left-[100px] sm:left-[125px] md:left-[150px] lg:left-[175px] xl:left-[251px] top-[280px] sm:top-[350px] md:top-[430px] lg:top-[520px] xl:top-[599px]">
            <div className="flex-none scale-y-[-100%]">
              <div className="box-border content-stretch flex flex-row gap-[5px] sm:gap-[6px] md:gap-[7px] lg:gap-[10px] xl:gap-[11.311px] items-start justify-start p-0 relative">
                <div className="bg-[#e4e7ec] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 size-[6px] sm:size-[8px] md:size-[9px] lg:size-[12px] xl:size-[15.081px]" />
                <div className="bg-[#e4e7ec] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 size-[6px] sm:size-[8px] md:size-[9px] lg:size-[12px] xl:size-[15.081px]" />
                <div className="bg-[#91dcf1] h-[6px] sm:h-[8px] md:h-[9px] lg:h-[12px] xl:h-[15.081px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 w-[24px] sm:w-[32px] md:w-[36px] lg:w-[50px] xl:w-[60.324px]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="[background-size:118.34%_128.52%] absolute bg-[41.18%_100%] bg-no-repeat h-[230px] sm:h-[280px] md:h-[350px] lg:h-[460px] xl:h-[535px] left-1 sm:left-2 md:left-3 lg:left-[90px] xl:left-[110px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[40px] top-[5px] sm:top-[10px] md:top-[12px] lg:top-[20px] xl:top-[35px] w-[180px] sm:w-[230px] md:w-[280px] lg:w-[330px] xl:w-[436px]"
          style={{
            backgroundImage: `url('${img53B0DbfeC0Cb49C597762A4D3179A2361}')`,
          }}
        />
      </div>
    );
  }
  
  return (
    <div className="relative size-full" data-name="Property 1=Default">
      <div className="absolute contents left-2 sm:left-4 md:left-6 lg:left-[110px] xl:left-[130px] top-[15px] sm:top-[20px] md:top-[25px] lg:top-[40px] xl:top-[57px]">
        {element}
        <div className="absolute flex items-center justify-center left-[100px] sm:left-[125px] md:left-[150px] lg:left-[175px] xl:left-[251px] top-[280px] sm:top-[350px] md:top-[430px] lg:top-[520px] xl:top-[599px]">
          <div className="flex-none scale-y-[-100%]">
            <div className="box-border content-stretch flex flex-row gap-[5px] sm:gap-[6px] md:gap-[7px] lg:gap-[10px] xl:gap-[11.311px] items-start justify-start p-0 relative">
              <div className="bg-[#91dcf1] h-[6px] sm:h-[8px] md:h-[9px] lg:h-[12px] xl:h-[15.081px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 w-[24px] sm:w-[32px] md:w-[36px] lg:w-[50px] xl:w-[60.324px]" />
              <div className="bg-[#e4e7ec] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 size-[6px] sm:size-[8px] md:size-[9px] lg:size-[12px] xl:size-[15.081px]" />
              <div className="bg-[#e4e7ec] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[18px] xl:rounded-[20.736px] shrink-0 size-[6px] sm:size-[8px] md:size-[9px] lg:size-[12px] xl:size-[15.081px]" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="[background-size:100%_108.65%] absolute bg-bottom-left bg-no-repeat h-[230px] sm:h-[280px] md:h-[350px] lg:h-[460px] xl:h-[535px] left-1 sm:left-2 md:left-3 lg:left-[90px] xl:left-[110px] rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[44px] top-[5px] sm:top-[10px] md:top-[12px] lg:top-[20px] xl:top-[35px] w-[180px] sm:w-[230px] md:w-[280px] lg:w-[330px] xl:w-[436px]"
        style={{
          backgroundImage: `url('${imgBdf8Dff9340E4F01833677Fb88E368Ee1}')`,
        }}
      />
    </div>
  );
}

interface Group108Props {
  property1?: "Default" | "Variant2";
}

function Group108({ property1 = "Default" }: Group108Props) {
  const [isHovered, setIsHovered] = useState(false)
  
  const element = (
    <div className="absolute bottom-[21.154%] font-['Lufga:Regular',_sans-serif] leading-[0] left-[10.588%] not-italic right-[10.588%] text-[#ffffff] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] text-center top-[26.923%]">
      <p className="block leading-[normal]">See my works</p>
    </div>
  );
  
  if (property1 === "Variant2") {
    return (
      <div 
        className="relative size-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg" 
        data-name="Property 1=Variant2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0" data-name="item card 3">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 170 52"
          >
            <foreignObject height="86" width="204" x="-17" y="-17">
              <div
                style={{
                  backdropFilter: "blur(8.5px)",
                  clipPath: "url(#bgblur_0_2026_343_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d={svgPaths.p9802900}
              data-figma-bg-blur-radius="17"
              fill={isHovered ? "#99E9FF" : "var(--fill-0, #99E9FF)"}
              id="item card 3"
              stroke="var(--stroke-0, #99E9FF)"
              className="transition-all duration-300"
            />
            <defs>
              <clipPath
                id="bgblur_0_2026_343_clip_path"
                transform="translate(17 17)"
              >
                <path d={svgPaths.p9802900} />
              </clipPath>
            </defs>
          </svg>
        </div>
        {element}
      </div>
    );
  }
  
  return (
    <div 
      className="relative size-full cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg" 
      data-name="Property 1=Default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0" data-name="item card 3">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 170 52"
        >
          <foreignObject height="86" width="204" x="-17" y="-17">
            <div
              style={{
                backdropFilter: "blur(8.5px)",
                clipPath: "url(#bgblur_0_2026_345_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            d={svgPaths.p9802900}
            data-figma-bg-blur-radius="17"
            fill={isHovered ? "#99E9FF" : "var(--fill-0, #171717)"}
            id="item card 3"
            stroke="var(--stroke-0, #99E9FF)"
            className="transition-all duration-300"
          />
          <defs>
            <clipPath
              id="bgblur_0_2026_345_clip_path"
              transform="translate(17 17)"
            >
              <path d={svgPaths.p9802900} />
            </clipPath>
          </defs>
        </svg>
      </div>
      {element}
    </div>
  );
}

// Scroll-triggered animation component
function ScrollTriggeredText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

  return (
    <div 
      ref={setRef}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'} ${className}`}
    >
      {children}
    </div>
  )
}

// Animated text component for About Me
function AnimatedAboutText({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

export default function AboutMe() {
  return (
    <div className="bg-neutral-900 relative w-full overflow-hidden py-12 md:py-16 lg:py-20" data-name="About Me">
      {/* Mobile Layout: Image on top, content below with increased spacing */}
      <div className="block lg:hidden">
        {/* Mobile Image Container */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[420px] w-full flex items-center justify-center px-4 pt-8 pb-12">
          <div className="relative h-[280px] sm:h-[340px] md:h-[380px] w-[240px] sm:w-[280px] md:w-[320px]">
            <Component1 />
          </div>
        </div>

        {/* Mobile Content with increased top spacing */}
        <div className="px-4 sm:px-6 md:px-8 pb-12 pt-8">
          {/* Mobile Main Heading with scroll trigger */}
          <ScrollTriggeredText>
            <div className="font-['Lufga:Black',_sans-serif] font-black leading-[0.95] not-italic text-[#ffffff] text-center mb-6 md:mb-8">
              <h1 className="text-[20px] sm:text-[24px] md:text-[28px] leading-[0.95]">
                Crafting Meaningful Brands & Intuitive Digital Experience that Stand out
              </h1>
            </div>
          </ScrollTriggeredText>
          
          {/* Mobile Description Text */}
          <AnimatedAboutText delay={400}>
            <div className="font-['Lufga:Regular',_sans-serif] leading-[1.4] not-italic text-[#ffffff] text-center tracking-[-0.33px] mb-6 md:mb-8">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[1.4]">
                Hi, I'm Mark Jonas Talain — a{" "}
                <span className="font-['Lufga:Bold',_sans-serif] not-italic text-[#99e9ff]">
                  Graphic and UI/UX Designer
                </span>{" "}
                with over a year of experience creating{" "}
                <span className="font-['Lufga:Bold',_sans-serif] not-italic text-[#99e9ff]">
                  clean
                </span>{" "}
                and{" "}
                <span className="font-['Lufga:Bold',_sans-serif] not-italic text-[#99e9ff]">
                  user-focused
                </span>{" "}
                designs. I blend visual appeal with function, and I'm always
                exploring new tools to craft meaningful digital experiences. I also
                manage content on TikTok, Facebook, and Instagram, producing
                engaging visuals, short-form videos, and marketing materials to
                boost brand presence.
              </p>
            </div>
          </AnimatedAboutText>
          
          {/* Mobile Button */}
          <AnimatedAboutText delay={600}>
            <div className="flex justify-center">
              <div className="h-[40px] md:h-[44px] w-[140px] md:w-[150px]">
                <Group108 />
              </div>
            </div>
          </AnimatedAboutText>
        </div>
      </div>

      {/* Desktop Layout: Original side-by-side with extended padding and iPad/1080p responsiveness */}
      <div className="hidden lg:block min-h-[600px] xl:min-h-[846px] 2xl:min-h-[900px]">
        {/* Desktop Image Container */}
        <div className="absolute h-[580px] xl:h-[670px] 2xl:h-[720px] left-6 xl:left-[38px] 2xl:left-[48px] overflow-clip top-[100px] xl:top-[120px] 2xl:top-[140px] w-[400px] xl:w-[671px] 2xl:w-[720px]">
          <Component1 />
        </div>
        
        {/* Desktop Content positioned on the right side */}
        <div className="absolute right-8 xl:right-12 2xl:right-16 top-[130px] xl:top-[160px] 2xl:top-[180px] w-[450px] xl:w-[644px] 2xl:w-[700px]">
          {/* Desktop Main Heading with scroll trigger */}
          <ScrollTriggeredText>
            <div className="font-['Lufga:Black',_sans-serif] font-black leading-[0.99] not-italic text-[#ffffff] text-left mb-8 xl:mb-12 2xl:mb-16">
              <h1 className="text-[48px] xl:text-[64px] 2xl:text-[72px] leading-[0.99]">
                Crafting Meaningful Brands & Intuitive Digital Experience that Stand out
              </h1>
            </div>
          </ScrollTriggeredText>
          
          {/* Desktop Description Text */}
          <AnimatedAboutText delay={400}>
            <div className="font-['Lufga:Regular',_sans-serif] leading-[1.5] not-italic text-[#ffffff] text-left tracking-[-0.33px] mb-8 xl:mb-12 2xl:mb-16">
              <p className="text-[18px] xl:text-[22px] 2xl:text-[24px] leading-[1.5]">
                Hi, I'm Mark Jonas Talain — a{" "}
                <span className="font-['Lufga:Bold',_sans-serif] not-italic text-[#99e9ff]">
                  Graphic and UI/UX Designer
                </span>{" "}
                with over a year of experience creating{" "}
                <span className="font-['Lufga:Bold',_sans-serif] not-italic text-[#99e9ff]">
                  clean
                </span>{" "}
                and{" "}
                <span className="font-['Lufga:Bold',_sans-serif] not-italic text-[#99e9ff]">
                  user-focused
                </span>{" "}
                designs. I blend visual appeal with function, and I'm always
                exploring new tools to craft meaningful digital experiences. I also
                manage content on TikTok, Facebook, and Instagram, producing
                engaging visuals, short-form videos, and marketing materials to
                boost brand presence.
              </p>
            </div>
          </AnimatedAboutText>
          
          {/* Desktop Button */}
          <AnimatedAboutText delay={600}>
            <div className="h-[48px] xl:h-[52px] 2xl:h-[56px] w-[160px] xl:w-[170px] 2xl:w-[180px]">
              <Group108 />
            </div>
          </AnimatedAboutText>
        </div>
      </div>
    </div>
  );
}