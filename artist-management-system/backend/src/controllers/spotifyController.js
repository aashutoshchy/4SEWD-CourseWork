import { getTrackData } from "../services/spotifyService.js";

export const fetchSpotifyTrack = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ message: "Spotify URL is required" });
    }

    // extract track ID from a URL like:
    // https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp
    const match = url.match(/track\/([a-zA-Z0-9]+)/);

    if (!match) {
      return res.status(400).json({ message: "Invalid Spotify track URL" });
    }

    const trackId = match[1];
    const trackData = await getTrackData(trackId);

    res.json(trackData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
