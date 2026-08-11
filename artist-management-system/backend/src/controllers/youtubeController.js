import { getVideoData } from "../services/youtubeService.js";

export const fetchYoutubeVideo = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ message: "YouTube URL is required" });
    }

    // matches both youtube.com/watch?v=ID and youtu.be/ID formats
    const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

    if (!match) {
      return res.status(400).json({ message: "Invalid YouTube URL" });
    }

    const videoId = match[1];
    const videoData = await getVideoData(videoId);

    res.json(videoData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
