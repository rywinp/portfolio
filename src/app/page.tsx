'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [headerStatus, setHeaderStatus] = useState(true)
  
  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY >= 50) {
        setHeaderStatus(false)
      }
      else {
        setHeaderStatus(true)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <header>
        <Image className={`w-1/2 mx-auto ${headerStatus ? `visible` : `invisible`}`} src="/RywinDennisRectangle.jpeg" alt="Rywin by the campfire" width={500} height={150} priority/>
      </header>
      <div className="h-[1000px]">
        end page
      </div>
    </>
  );
}

// <Image src="/RywinDennisSquare.png" alt="Rywin by the campfire" width={150} height={150} priority />