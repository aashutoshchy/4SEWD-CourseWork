import "dotenv/config";

let cachedToken = null;
let tokenExpiresAt = 0;

const getAccessToken = async () => {
  // reuse token if still valid
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
        ).toString("base64"),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1000 - 60000; // refresh 1 min early

  return cachedToken;
};

export const getTrackData = async (trackId) => {
  const token = await getAccessToken();

  const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log("Spotify API error:", response.status, errorText);
    throw new Error(`Spotify error (${response.status}): ${errorText}`);
  }

  const data = await response.json();

  return {
    title: data.name,
    coverImage: data.album.images[0]?.url,
    releaseDate: data.album.release_date,
    durationMs: data.duration_ms,
    spotifyUrl: data.external_urls.spotify,
  };
};
