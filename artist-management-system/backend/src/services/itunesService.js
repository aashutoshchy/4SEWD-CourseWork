export const searchTrack = async (query) => {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=5`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(
      "No tracks found for that search. Try a different title or artist.",
    );
  }

  return data.results.map((track) => ({
    title: track.trackName,
    artistName: track.artistName,
    collectionName: track.collectionName,
    coverImage: track.artworkUrl100
      ? track.artworkUrl100.replace("100x100bb", "600x600bb")
      : null,
    releaseDate: track.releaseDate || null,
    durationMs: track.trackTimeMillis || null,
    genre: track.primaryGenreName || null,
    appleMusicUrl: track.trackViewUrl || null,
  }));
};
