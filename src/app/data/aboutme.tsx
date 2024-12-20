const AboutMeDescription = `
Hey! I'm currently a student at the University of Michigan studying Computer Science!

I enjoy hobbies like playing Basketball and working out at the gym.

I happen to also listen to a lot of music (Hip-Hop, Throwbacks, K-Pop, and almost every other genre) while enjoying my hobbies.

I decided that a Spotify-inspired theme was the way to go so go take a look around and explore my website!
`;

export const AboutMeComponent = () => {
    return <div>{AboutMeDescription.split('\n').map((line, index) => <div className="mb-2" key={index}>{line}</div>)}</div>;
  };