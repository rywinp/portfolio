export default function Song({song}) {
    const playPurplePath = "/playPurple.png"

    return(
        <div className="flex items-center m-14">
            <span className="font-semibold mr-5">{song.id}</span>
            <img src={song.path} className="w-[70px] h-[70px] mr-5"></img>
            <span className="font-semibold mr-5">{song.title}</span>
            <span className="font-semibold mr-5 w-[500px]">{song.description}</span>
            <img src={playPurplePath} className="w-[50px] h-[50px] mr-10"></img>
        </div>
    );
}