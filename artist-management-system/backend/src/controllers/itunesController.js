import { searchTrack } from "../services/itunesService.js";

export const fetchItunesTrack = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || !q.trim()) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const trackData = await searchTrack(q);
    res.json(trackData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
