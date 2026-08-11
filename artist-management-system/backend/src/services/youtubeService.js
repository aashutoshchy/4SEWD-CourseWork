import "dotenv/config";

export const getVideoData = async (videoId) => {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails&key=${process.env.YOUTUBE_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || data.items.length === 0) {
    throw new Error("Video not found on YouTube");
  }

  const video = data.items[0];

  return {
    title: video.snippet.title,
    coverImage: video.snippet.thumbnails.high.url,
    releaseDate: video.snippet.publishedAt,
    duration: parseDuration(video.contentDetails.duration),
    youtubeUrl: `https://youtube.com/watch?v=${videoId}`,
  };
};

// converts YouTube's ISO 8601 duration format (e.g. "PT3M28S") into "3:28"
const parseDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
  const minutes = match[1] ? parseInt(match[1]) : 0;
  const seconds = match[2] ? parseInt(match[2]) : 0;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
