'use client'

import { useEffect, useState } from "react";
import Song from "@/app/ui/song.tsx";
import { PersonalProjects } from "@/app/data/projects.tsx";
import { AboutMeComponent } from "@/app/data/aboutme.tsx";

export default function Home() {
  // Sort Project List by ID
  PersonalProjects.sort((a, b) => a.id - b.id);

  const [headerOpacity, setHeaderOpacity] = useState(1);

  const handleScroll = () => {
    if(window.scrollY >= 10 && window.scrollY <= 375) {
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
      {/* PROFILE BANNER */}
      <header className="relative w-full h-[550px]">
        
        {/* Background image with opacity */}
        <div
          className={`absolute inset-0 bg-cover bg-top`}
          style={{
            backgroundImage: `url(/BeanPicture.jpg)`,
            opacity: `${headerOpacity}`,
          }}
        ></div>

        {/* Content */}
        <div className="absolute left-0 bottom-0 flex gap-4 mb-5">
          <div className="ml-4 border-blue-500 border-4 rounded-xl"/>
          <h1 className="text-9xl font-bold">
            Rywin Patcharaput
          </h1>
        </div>
      </header>

      {/* Spacing */}
      <div className="h-11"/>

      <article className="flex">

          <div className="ml-14"></div>

        {/* Songs */}
        <section className="w-2/3">

        {/* Playlist Header */}
        <div className="flex gap-4">
          <div className=" ml-[-20px] border-blue-500 border-4 rounded-xl"/>
          <h3 className="text-4xl font-bold">Personal Projects</h3>
        </div>

        {/* Spacing */}
        <div className="h-4"></div>


        <div className="mt-5 relative">
              {PersonalProjects.map((x) => (
                  <Song key={x.id} song={x}/>
                  ))}
        </div>

        {/* Spacing */}
        <div className="h-4"></div>

        {/* Playlist Header */}
        <div className="flex gap-4">
          <div className=" ml-[-20px] border-blue-500 border-4 rounded-xl"/>
          <h3 className="text-4xl font-bold">School Projects</h3>
        </div>
        </section>

        {/* Spacing */}
        <div className="justify-center w-1/12">
        </div>
        
        {/* About Me */}
        <div className="w-1/3">
          <div className="flex gap-4">
            <div className="border-blue-500 ml-[-45px] border-4 rounded-xl"/>
            <h3 className="text-4xl font-bold">About Me:</h3>
          </div>
          <div className="h-4"></div>
            <span className="font-medium text-1xl">
                { AboutMeComponent() }
            </span>
        </div>

        <div className="mr-14"></div>
      </article>

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