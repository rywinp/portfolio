export default function Song({song}) {
    const playPurplePath = "/playPurple.png"

    return(
        <>
        <div className="flex items-center gap-5 relative">
            <span className="font-semibold">{song.id}</span>
            <img src={song.path} className="w-[70px] h-[70px]"></img>
            <span className="font-semibold">{song.title} :</span>
            <span className="font-semibold">{song.description}</span>
            <div className="w-1/12"/>
            <img src={playPurplePath} className="absolute right-0 w-[50px] h-[50px]"></img>
        </div>

        <div className="mb-7"/>
        </>
    );
}