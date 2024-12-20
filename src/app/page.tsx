'use client'

import { useEffect, useState } from "react";
import Playlist from "@/app/ui/playlist.tsx";
import AboutMe from "@/app/ui/aboutme.tsx";
import { ProjectList } from "@/app/data/projects.tsx";

export default function Home() {
  const [headerOpacity, setHeaderOpacity] = useState(1);

  const handleScroll = () => {
    if(window.scrollY >= 10 && window.scrollY <= 300) {
      // Optimize this into ranges so there isnt a need to calculate so much
      // const dividend = Math.floor(window.scrollY / 25)
      const dividend = window.scrollY / 45
      setHeaderOpacity(1 / (dividend + 1));
    }
    else if(window.scrollY < 10) {
      setHeaderOpacity(1);
    }
    else {
      setHeaderOpacity(0);
    }
  };
  
  {/* Add event listeners and fetch */}
  useEffect(() => {

    // Fetch the playlist and songs
    let tempList = []

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <>
      <header>
        <div className="relative w-[1920px] h-[550px]">
          
          {/* Background image with opacity */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition duration-150`}
            style={{
              backgroundImage: `url(/RywinDennisRectangle.jpeg)`,
              opacity: `${headerOpacity}`,
            }}
          ></div>

          {/* Content */}
          <div className="absolute left-0 bottom-0">
            <h1 className="pl-4 text-9xl font-bold leading-tight">
              Rywin Patcharaput
            </h1>
          </div>

        </div>
      </header>

      {/* Spacing */}
      <div className="h-11 flex"/>
      <section className="flex">
        <Playlist songs={ProjectList}></Playlist>

        {/* Spacing */}
        <div className="p-4"/>
        
        <div className="relative">
          <AboutMe></AboutMe>
        </div>
      </section>

      <div className="h-[1000px]">
      </div>
    </>
  );
}

/*        <Image className={`transition-opacity duration-250 ${headerStatus ? `visible opacity-100` : `opacity-0`}`} src="/RywinDennisRectangle.jpeg" alt="Rywin by the campfire" width={1100} height={0} priority/>
// <Image src="/RywinDennisSquare.png" alt="Rywin by the campfire" width={150} height={150} priority />
//         {comments.map((x) => (
  <PostComment key={x.commentid} comment={x} handler={deleteComment} />
))}
{*/