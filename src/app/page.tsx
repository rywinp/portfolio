'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [headerOpacity, setHeaderOpacity] = useState(1)
  
  useEffect(() => {

    const handleScroll = () => {
      
      if(window.scrollY >= 10 && window.scrollY <= 300) {
        // Optimize this into ranges so there isnt a need to calculate so much
        let dividend = Math.floor(window.scrollY / 25)
        setHeaderOpacity(1 / ((dividend * 1.5) + 1));
      }
      else if(window.scrollY < 10) {
        setHeaderOpacity(1);
      }
      else {
        setHeaderOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <header className="flex justify-center h-screen">
        <div className="relative w-[1920px] h-[550px] flex justify-center items-center ">

          {/* Background image with opacity */}
          <div
            className={`flex absolute inset-0 bg-cover bg-center transition duration-150`}
            style={{
              backgroundImage: `url(/RywinDennisRectangle.jpeg)`,
              opacity: `${headerOpacity}`,
            }}
          ></div>

          {/* Content */}
          <h1 className="absolute left-0 bottom-0 text-9xl font-bold text-white leading-tight">
            Rywin Patcharaput
          </h1>
        </div>
      </header>

      <div className="h-[1000px]">
        end page
      </div>
    </>
  );
}

//         <Image className={`transition-opacity duration-250 ${headerStatus ? `visible opacity-100` : `opacity-0`}`} src="/RywinDennisRectangle.jpeg" alt="Rywin by the campfire" width={1100} height={0} priority/>
// <Image src="/RywinDennisSquare.png" alt="Rywin by the campfire" width={150} height={150} priority />