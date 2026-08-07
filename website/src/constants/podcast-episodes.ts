export interface PodcastEpisode {
  episode: number;
  youtubeId: string;
  releaseDate: string;
  duration?: string;
  title: string;
}

/** Newest first. Add episodes here when publishing — no component edits needed. */
export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    episode: 23,
    youtubeId: "sO2ghX6Y__M",
    releaseDate: "2026-08-06",
    title: "#23 - Alex Pruden - Quantum and The Race to Upgrade",
  },
  {
    episode: 22,
    youtubeId: "O7EZC-cEfeg",
    releaseDate: "2026-05-06",
    title: "#22 - Curtis Yarvin: The Truth Is Hard To Find",
  },

];

export const PODCAST_TOTAL_EPISODES = 23;

export const PODCAST_YOUTUBE_CHANNEL =
  "https://www.youtube.com/@QuantusNetwork";
