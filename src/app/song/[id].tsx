// pages/song/[id].js
import { useRouter } from 'next/router';

export default function SongPage({ songData }) {
  const router = useRouter();

  // Show a loading state while the fallback page is loading
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{songData.title}</h1>
      <p>Artist: {songData.artist}</p>
      <p>{songData.lyrics}</p>
    </div>
  );
}

// Fetch song data based on the id
export async function getStaticProps({ params }) {
  const { id } = params;

  // Replace this with your actual data-fetching logic
  const songs = [
    { id: '1', title: 'Song One', artist: 'Artist A', lyrics: 'Lyrics of song one...' },
    { id: '2', title: 'Song Two', artist: 'Artist B', lyrics: 'Lyrics of song two...' },
  ];

  const songData = songs.find((song) => song.id === id);

  if (!songData) {
    return { notFound: true };
  }

  return {
    props: {
      songData,
    },
  };
}

// Generate paths for all songs
export async function getStaticPaths() {
  // Replace this with your actual list of song IDs
  const songIds = ['1', '2'];

  const paths = songIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: true, // Fallback pages for songs not pre-rendered
  };
}
