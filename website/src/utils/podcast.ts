import {
  PODCAST_EPISODES,
  type PodcastEpisode,
} from "@/constants/podcast-episodes";
import type { Locale } from "@/utils/i18n";

export function getYoutubeUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function getYoutubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function getLatestPodcastEpisodes(count = 2): PodcastEpisode[] {
  return [...PODCAST_EPISODES]
    .sort((a, b) => {
      const dateDiff =
        new Date(b.releaseDate).valueOf() - new Date(a.releaseDate).valueOf();
      if (dateDiff !== 0) return dateDiff;
      return b.episode - a.episode;
    })
    .slice(0, count);
}

export function formatRelativeReleaseDate(date: Date, locale: Locale): string {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const startOfDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const diffDays = Math.round(
    (startOfDate.getTime() - startOfToday.getTime()) / (1000 * 60 * 60 * 24),
  );

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (Math.abs(diffDays) < 7) {
    return rtf.format(diffDays, "day");
  }
  if (Math.abs(diffDays) < 30) {
    return rtf.format(Math.round(diffDays / 7), "week");
  }
  if (Math.abs(diffDays) < 365) {
    return rtf.format(Math.round(diffDays / 30), "month");
  }
  return rtf.format(Math.round(diffDays / 365), "year");
}

export function formatEpisodeMeta(
  releaseDate: string,
  locale: Locale,
  duration?: string,
): string {
  const relative = formatRelativeReleaseDate(
    new Date(releaseDate),
    locale,
  ).toUpperCase();

  if (duration) {
    return `${duration} · ${relative}`;
  }
  return relative;
}
