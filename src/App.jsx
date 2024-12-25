import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const containerRef = useRef(null);
  const comp = useRef(null);

  // State to hold the current date and time
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    // Create an interval that updates the current date every second (1000 ms)
    const intervalId = setInterval(() => {
      setCurrentDate(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // Set to false for 24-hour format
        })
      );
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  useLayoutEffect(() => {
    // Disable scroll when intro-slider animation starts
    document.body.style.overflow = "hidden";

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"], {
          opacity: 0,
          y: 100,
          duration: 1,
          stagger: 0.2,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 0.5,
        });

      // When the animation is complete, re-enable scroll
      t1.eventCallback("onComplete", () => {
        document.body.style.overflow = "auto"; // Re-enable scroll
      });
    }, comp);

    return () => {
      // Revert the gsap context and ensure scroll is re-enabled if component is unmounted
      ctx.revert();
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled if the component unmounts
    };
  }, []);

  return (
    <div ref={comp} className="relative min-h-screen">
      <div
        id="intro-slider"
        className="h-[100vh] absolute top-0 left-0 bg-customRed w-screen flex justify-center lg:items-center"
      >
        <div className="font-youngSerif text-64px xl:text-80px text-customWhite text-center leading-110% mt-36 lg:mt-0">
          <h1 id="title-1">Hello</h1>
          <h1 id="title-2">Hola</h1>
          <h1 id="title-3">Namaste</h1>
          <h1 id="title-4">Salam</h1>
          <h1 id="title-5">Hey</h1>
        </div>
      </div>
      <div className="bg-customBackground min-h-screen pt-24px pb-40px lg:pt-0 lg:pb-0 flex justify-center items-center lg:overflow-hidden">
        <div className="grid grid-cols-1  w-[94vw] lg:grid-cols-3 lg:grid-rows-4 gap-16px lg:h-[94vh] lg:w-[97vw]">
        

 <div className="bg-customWhite col-span-1 row-span-3 md:hidden p-24px rounded-16px flex flex-col justify-between">
          <h3 className="text-44px xl:text-52px leading-110% font-youngSerif text-customRed font-400 -tracking-2.08px">
            Hello, I am Pratyush, an independent frontend web developer ☻
          </h3>
          <div className="flex justify-between text-14px font-youngSerif text-black mt-20 lg:mt-0">
            <p>Available for Freelance</p>
            <p>My local time -{currentDate} GMT</p>
          </div>
        </div>

        {/* Item 1 */}
        <div className="bg-customRed col-span-1 row-span-2 p-24px rounded-16px text-customWhite flex flex-col justify-between">
          <h3 className="text-26px xl:text-32px leading-120% font-youngSerif font-400">
            Creating websites that pay attention to the details that truly make
            a difference ☉
          </h3>
          <div className="flex justify-between text-14px font-youngSerif mt-16 lg:mt-0">
            <p>Available for Freelance</p>
            <p>My local time -{currentDate} GMT</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-customWhite col-span-1 row-span-3 p-24px rounded-16px hidden md:flex md:flex-col justify-between">
          <h3 className="text-44px xl:text-52px leading-110% font-youngSerif text-customRed font-400 -tracking-2.08px">
            Hello, I am Pratyush, an independent frontend web developer ☻
          </h3>
          <div className="flex justify-between text-14px font-youngSerif text-black mt-20 lg:mt-0">
            <p>Available for Freelance</p>
            <p>My local time -{currentDate} GMT</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-customWhite col-span-1 row-span-1 p-24px rounded-16px text-black flex flex-col gap-2 overflow-auto scrollbar-hide text-18px lg:text-20px">
          <h3 className="font-youngSerif  border-b-2 border-customBorder pb-2 ">
            Love for you to check out my works ✦
          </h3>
          <h3 className="text-customRed font-youngSerif border-b-2 border-customRed pb-2">
            September works (Agency website)
          </h3>
          <h3 className="text-customRed font-youngSerif border-b-2 border-customRed pb-2">
            Depoly (Non profit organisation)
          </h3>
          <h3 className="text-customRed font-youngSerif ">
            Social Impact Capital (Investment Firm)
          </h3>
        </div>

        {/* Item 4 */}
        <div className="bg-customBackground border-2 border-customWhite p-24px col-span-1 row-span-1 rounded-16px text-white flex flex-col justify-between">
          <h3 className="text-18px xl:text-20px font-youngSerif text-customWhite font-400 leading-150% -tracking-0.32px">
            I’ve always wanted to create new experiences; web development
            transformed everything.
          </h3>
          <p className="font-youngSerif text-14px text-customWhite mt-6 lg:mt-0">
           <a href="https://www.google.com/maps/place/National+Institute+of+Technology,+Rourkela/@22.2530559,84.8983679,17z/data=!3m1!4b1!4m6!3m5!1s0x3a201f72bbd561c3:0xab5c70e76a7b5a!8m2!3d22.253051!4d84.9009428!16zL20vMGNnM2xr?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">Meet me at my college!</a>
          </p>
        </div>

        {/* Item 5 */}
        <div className="bg-customBackground border-2 border-customRed p-24px col-span-1 row-span-2 rounded-16px text-customRed flex flex-col justify-between">
          <h3 className="text-26px xl:text-32px font-youngSerif leading-120% font-400">
            Playing around with ReactJS and NextJS, using Framer Motion and GSAP
            to add some cool animations ★
          </h3>
          <div className="flex justify-between text-14px font-youngSerif mt-16 lg:mt-0">
            <p>Available for Freelance</p>
            <p id="current-time">My local time -{currentDate} GMT</p>
          </div>
        </div>

        <div className="bg-customBackground border-2 border-customWhite p-24px rounded-16px col-span-1 row-span-1 text-customWhite md:hidden flex flex-col justify-between">
          <h3 className="font-semibold font-youngSerif text-18px leading-150% xl:text-20px">
            Hey! Wanna chat about an idea? I’d really like to hear what you
            think ⚃
          </h3>
          <div className="flex text-14px font-youngSerif text-customWhite mt-8 lg:mt-0">
            <p>Send a mail</p>
            <p className="ml-24px">Schedule a call</p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="bg-customRed p-24px col-span-1 row-span-2 rounded-16px text-customWhite flex flex-col justify-between ">
          <h3 className="text-26px xl:text-32px font-youngSerif leading-120% font-400">
            Thanks for your visit! You can check out my networks to follow my
            new adventures ☼
          </h3>
          <div className="flex text-14px font-youngSerif font-400 text-black flex-col lg:flex-row gap-24px mt-16 lg:mt-0">
            <p>
              <a target="_blank" href="https://github.com/PratyushPanda2005">
                Github
              </a>
            </p>
            <p>
              <a target="_blank" href="https://www.linkedin.com/in/pratyush-panda-830265326/">Linkedln</a>
            </p>
            <p>
              <a target="_blank" href="https://x.com/panda_prat8747">Twitter</a>
            </p>
            <p>
              <a target="_blank" href="">Blog</a>
            </p>
          </div>
        </div>

        {/* Item 7 */}
        <div className="bg-customBackground border-2 border-customWhite p-24px rounded-16px col-span-1 row-span-1 text-customWhite hidden md:flex md:flex-col justify-between">
          <h3 className="font-semibold font-youngSerif text-18px leading-150% xl:text-20px">
            Hey! Wanna chat about an idea? I’d really like to hear what you
            think ⚃
          </h3>
          <div className="flex text-14px font-youngSerif font-400 text-customWhite mt-8 lg:mt-0">
            <p>Send a mail</p>
            <p className="ml-24px">Schedule a call</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default App;
