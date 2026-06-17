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
    episode: 22,
    youtubeId: "O7EZC-cEfeg",
    releaseDate: "2026-05-06",
    title: "#22 - Curtis Yarvin: The Truth Is Hard To Find",
  },
  {
    episode: 21,
    youtubeId: "rjnMTR7a8Tc",
    releaseDate: "2026-05-06",
    title: "#21 - Hacks, Attacks and Losing Faith In Bitcoin",
  },
];

export const PODCAST_TOTAL_EPISODES = 22;

export const PODCAST_YOUTUBE_CHANNEL =
  "https://www.youtube.com/@QuantusNetwork";
