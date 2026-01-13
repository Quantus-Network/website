import React, { useState, useMemo, useEffect, useRef } from "react";
import Fuse from "fuse.js";
import { Search as SearchIcon } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "@/components/ui/react/Input";
import { Tag } from "@/components/ui/react/Tag";
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
  tagsMap: Record<string, string>;
}

export const BlogList: React.FC<Props> = ({
  posts,
  locale,
  localizedBlogPath,
  localizedTagPath,
  noPostsFoundText,
  searchPlaceholder,
  featuredLabel,
  tagsMap,
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounceValue(query, INPUT_DEBOUNCE_INTERVAL);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const observerTarget = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ["data.title", "data.description", "data.tags"],
      threshold: 0.3,
    });
  }, [posts]);

  const results = useMemo(() => {
    if (!debouncedQuery) return posts;
    return fuse.search(debouncedQuery).map((result) => result.item);
  }, [fuse, debouncedQuery, posts]);

  const featuredPost = useMemo(() => {
    if (debouncedQuery) return null;
    return posts.find((post) => post.data.featured);
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

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="relative max-w-md">
        <SearchIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {featuredPost && (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10">
          <a
            href={`${localizedBlogPath}/${featuredPost.id.split("/").slice(1).join("/")}`}
            className="flex flex-col md:flex-row"
          >
            {featuredPost.data.heroImage && (
              <div className="aspect-video w-full overflow-hidden md:aspect-auto md:w-1/2">
                <img
                  src={featuredPost.data.heroImage}
                  alt={featuredPost.data.heroAlt || featuredPost.data.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-10">
              <div className="mb-4 flex items-center justify-between gap-4">
                <time
                  dateTime={featuredPost.data.pubDate}
                  className="text-sm text-gray-400"
                >
                  {formatDate(featuredPost.data.pubDate)}
                </time>
                <span className="bg-primary/20 text-primary rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {featuredLabel}
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                {featuredPost.data.title}
              </h2>
              <p className="mb-6 line-clamp-3 text-lg text-gray-300">
                {featuredPost.data.description}
              </p>
              {featuredPost.data.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {featuredPost.data.tags.map((tag) => (
                    <Tag key={tag}>
                      <span className="text-gray-400">
                        {tagsMap[tag] || tag}
                      </span>
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          </a>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => {
          const postSlug = post.id.split("/").slice(1).join("/");
          const postHref = `${localizedBlogPath}/${postSlug}`;

          return (
            <div
              key={post.id}
              className="group flex flex-col gap-4 rounded-lg border border-white/10 p-4 transition-colors hover:bg-white/5"
            >
              <a href={postHref} className="block">
                {post.data.heroImage && (
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-md">
                    <img
                      src={post.data.heroImage}
                      alt={post.data.heroAlt || post.data.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="mb-2 flex items-center justify-between">
                  <time
                    dateTime={post.data.pubDate}
                    className="text-sm text-gray-400"
                  >
                    {formatDate(post.data.pubDate)}
                  </time>
                  {post.data.featured && (
                    <span className="bg-primary/20 text-primary rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      {featuredLabel}
                    </span>
                  )}
                </div>
                <h3 className="group-hover:text-primary mb-2 text-xl font-bold text-white">
                  {post.data.title}
                </h3>
                <p className="text-gray-300">{post.data.description}</p>
              </a>
              {post.data.tags.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2">
                  {post.data.tags.map((tag) => (
                    <Tag key={tag}>
                      <a
                        href={`${localizedTagPath}/${tag}`}
                        className="hover:text-primary transition-colors"
                      >
                        {tagsMap[tag] || tag}
                      </a>
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {visibleCount < results.length && (
        <div ref={observerTarget} className="flex justify-center py-8">
          <div className="border-quantus-blue h-8 w-8 animate-spin rounded-full border-4 border-t-transparent"></div>
        </div>
      )}

      {results.length === 0 && (
        <p className="col-span-full text-center text-gray-400">
          {noPostsFoundText}
        </p>
      )}
    </div>
  );
};
