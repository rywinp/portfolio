'use client'

import { headers } from "next/headers";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [headerStatus, setHeaderStatus] = useState(true)
  const [headerOpacity, setHeaderOpacity] = useState(1)
  
  useEffect(() => {

    const handleScroll = () => {
      
      if(window.scrollY >= 1 && window.scrollY <= 200) {
        setHeaderOpacity(1/ (window.scrollY / 150 + 1));
      }
      else if(window.scrollY == 0) {
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
      <div className="relative w-full flex justify-center items-center h-screen">
        {/* Background image with opacity */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition duration-150`}
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


      <div className="h-[1000px]">
        end page
      </div>
    </>
  );
}

//         <Image className={`transition-opacity duration-250 ${headerStatus ? `visible opacity-100` : `opacity-0`}`} src="/RywinDennisRectangle.jpeg" alt="Rywin by the campfire" width={1100} height={0} priority/>
// <Image src="/RywinDennisSquare.png" alt="Rywin by the campfire" width={150} height={150} priority />