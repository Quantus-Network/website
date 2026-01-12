import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { Search as SearchIcon } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { Input } from "@/components/ui/react/Input";
import { Tag } from "@/components/ui/react/Tag";
import { INPUT_DEBOUNCE_INTERVAL } from "@/constants/debounce-interval";

interface Post {
  id: string;
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: string;
    tags: string[];
    heroImage?: string;
  };
}

interface Props {
  posts: Post[];
  locale: string;
  localizedBlogPath: string;
  localizedTagPath: string;
  noPostsFoundText: string;
  searchPlaceholder: string;
}

export const BlogSearch: React.FC<Props> = ({
  posts,
  locale,
  localizedBlogPath,
  localizedTagPath,
  noPostsFoundText,
  searchPlaceholder,
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounceValue(query, INPUT_DEBOUNCE_INTERVAL);

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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((post) => {
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
                      alt={post.data.title}
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
                        {tag}
                      </a>
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {results.length === 0 && (
        <p className="col-span-full text-center text-gray-400">
          {noPostsFoundText}
        </p>
      )}
    </div>
  );
};
