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
    episode: 24,
    youtubeId: "qXvgN8GY_NY",
    releaseDate: "2026-09-14",
    title: "#24 - Colton Dillion - Qday, Quantum and the impact on Bitcoin",
  },
  {
    episode: 23,
    youtubeId: "sO2ghX6Y__M",
    releaseDate: "2026-08-06",
    title: "#23 - Alex Pruden - Quantum and The Race to Upgrade",
  },
];

export const PODCAST_TOTAL_EPISODES = PODCAST_EPISODES[0].episode;

export const PODCAST_YOUTUBE_CHANNEL =
  "https://www.youtube.com/@QuantusNetwork";
