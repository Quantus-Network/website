import React, { useState, useMemo, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Search as SearchIcon } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { INPUT_DEBOUNCE_INTERVAL } from "@/constants/debounce-interval";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

interface Post {
  id: string;
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: string;
    tags: string[];
    heroImage?: string;
    heroAlt?: string;
    featured?: boolean;
  };
}

interface Props {
  posts: Post[];
  locale: string;
  localizedBlogPath: string;
  localizedTagPath: string;
  noPostsFoundText: string;
  searchPlaceholder: string;
  featuredLabel: string;
  readLabel: string;
  tagsMap: Record<string, string>;
}

function useCardEntrance(deps: unknown[]) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>("[data-blog-card]"),
    );

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
    });

    const observers: IntersectionObserver[] = [];

    for (let i = 0; i < cards.length; i += 3) {
      const group = cards.slice(i, i + 3);
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            group.forEach((card, idx) => {
              setTimeout(() => {
                card.style.transition =
                  "opacity 0.5s ease, transform 0.5s ease";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, idx * 80);
            });
            obs.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      if (group[0]) obs.observe(group[0]);
      observers.push(obs);
    }

    return () => observers.forEach((o) => o.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

export const BlogList: React.FC<Props> = ({
  posts,
  locale,
  localizedBlogPath,
  localizedTagPath,
  noPostsFoundText,
  searchPlaceholder,
  featuredLabel,
  readLabel,
  tagsMap,
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounceValue(query, INPUT_DEBOUNCE_INTERVAL);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ["data.title", "data.description", "data.tags"],
    });
  }, [posts]);

  const results = useMemo(() => {
    if (!debouncedQuery) return posts;
    return fuse.search(debouncedQuery).map((result) => result.item);
  }, [fuse, debouncedQuery, posts]);

  const featuredPost = useMemo(() => {
    if (debouncedQuery) return null;
    return posts.find((post) => post.data.featured) ?? posts[0] ?? null;
  }, [posts, debouncedQuery]);

  const displayedPosts = useMemo(() => {
    let filteredResults = results;
    if (featuredPost) {
      filteredResults = results.filter((post) => post.id !== featuredPost.id);
    }
    return filteredResults.slice(0, visibleCount);
  }, [results, visibleCount, featuredPost]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [debouncedQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < results.length) {
          setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
        }
      },
      { threshold: 1.0, rootMargin: "100px" },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [visibleCount, results.length]);

  const gridRef = useCardEntrance([displayedPosts]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr)
      .toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .toUpperCase();
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Search */}
      <div className="relative max-w-md">
        <SearchIcon className="text-content-35 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border-border text-content placeholder:text-content-35 focus:border-content-25 h-11 w-full border bg-transparent pr-4 pl-10 font-mono text-sm focus:outline-none"
        />
      </div>

      {/* Featured post */}
      {featuredPost && (
        <a
          href={`${localizedBlogPath}/${featuredPost.id.split("/").slice(1).join("/")}`}
          className="group border-border hover:border-content-15 hover:bg-surface block border transition-colors duration-200"
        >
          <div className="flex flex-col md:flex-row">
            {featuredPost.data.heroImage && (
              <div className="relative aspect-video w-full overflow-hidden md:aspect-auto md:w-1/2">
                <img
                  src={featuredPost.data.heroImage}
                  alt={featuredPost.data.heroAlt || featuredPost.data.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="450"
                />
                <div className="bg-void/55 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-250 group-hover:opacity-100">
                  <span className="text-flare font-mono text-[13px] font-medium tracking-[0.2em]">
                    {readLabel}
                  </span>
                </div>
              </div>
            )}
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-10">
              <div className="mb-3 flex items-center gap-3">
                <time
                  dateTime={featuredPost.data.pubDate}
                  className="text-content-35 font-mono text-[11px] tracking-[0.14em]"
                >
                  {formatDate(featuredPost.data.pubDate)}
                </time>
                <span className="text-flare font-mono text-[10px] tracking-[0.14em] uppercase">
                  {featuredLabel}
                </span>
              </div>
              <h2 className="text-content-90 mb-4 text-2xl leading-snug font-medium md:text-3xl">
                {featuredPost.data.title}
              </h2>
              <p className="text-content-60 mb-6 line-clamp-3 text-base">
                {featuredPost.data.description}
              </p>
              {featuredPost.data.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {featuredPost.data.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="text-content-40 border-content-10 border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase"
                    >
                      {tagsMap[tag] || tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </a>
      )}

      {/* Grid */}
      <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => {
          const postSlug = post.id.split("/").slice(1).join("/");
          const postHref = `${localizedBlogPath}/${postSlug}`;

          return (
            <a
              key={post.id}
              href={postHref}
              data-blog-card
              className="group border-border hover:border-content-15 hover:bg-surface flex flex-col border text-inherit no-underline transition-colors duration-200"
            >
              {post.data.heroImage && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={post.data.heroImage}
                    alt={post.data.heroAlt || post.data.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="450"
                  />
                  <div className="bg-void/55 absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-xs transition-opacity duration-250 group-hover:opacity-100">
                    <span className="text-flare font-mono text-[13px] font-medium tracking-[0.2em]">
                      {readLabel}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col px-5 pt-6 pb-7">
                <time
                  dateTime={post.data.pubDate}
                  className="text-content-35 mb-2.5 block font-mono text-[11px] tracking-[0.14em] uppercase"
                >
                  {formatDate(post.data.pubDate)}
                </time>
                <span className="text-content-90 block text-[17px] leading-[1.35] font-medium">
                  {post.data.title}
                </span>
                {post.data.tags.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {post.data.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-content-40 border-content-10 border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase"
                      >
                        {tagsMap[tag] || tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      {/* Infinite scroll sentinel */}
      {visibleCount < results.length && (
        <div ref={observerTarget} className="flex justify-center py-8">
          <div className="border-border border-t-flare h-8 w-8 animate-spin rounded-full border-2"></div>
        </div>
      )}

      {results.length === 0 && (
        <p className="text-content-35 text-center font-mono text-sm tracking-wider uppercase">
          {noPostsFoundText}
        </p>
      )}
    </div>
  );
};
