export default function Song({song}) {
    return(
        <div className="flex items-center">
            <span className="font-semibold m-4">{song.id}</span>
            <img src={song.path} className="w-[100px] h-[100px] m-4"></img>
            <span className="font-semibold m-4">{song.title}</span>
            <span className="font-semibold m-4 w-[500px]">{song.description}</span>
            <span className="font-semibold m-4 w-[500px]">{song.tech}</span>
        </div>
    );
}