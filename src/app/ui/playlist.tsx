import Song from "@/app/ui/song.tsx"
import { StrictMode } from "react"

export default function Playlist ({ songs }) {
    return(
        <section className="absolute left-0 w-3/5">
            <h3 className="text-4xl ml-[25px] font-bold">Playlist</h3>
            <div className="m-5"></div>
            {songs.map((x) => (
                <Song key={x.id} song={x}/>
                ))}
        </section>
    );
}