import { describe, expect, test } from "bun:test";
import { filterPublishedBlogPosts } from "./blog-posts";

type Post = { id: string; data: { published?: boolean } };

const liveEnglish: Post = {
  id: "en-US/weekly-update-live",
  data: { published: true },
};
const liveGerman: Post = {
  id: "de-DE/weekly-update-live",
  data: { published: true },
};
const unpublishedEnglish: Post = {
  id: "en-US/weekly-update-wip",
  data: { published: false },
};
const unpublishedGerman: Post = {
  id: "de-DE/weekly-update-wip",
  data: { published: true },
};
const omittedEnglish: Post = {
  id: "en-US/weekly-update-omitted",
  data: {},
};
const omittedGerman: Post = {
  id: "de-DE/weekly-update-omitted",
  data: { published: true },
};
const orphanGerman: Post = {
  id: "de-DE/translation-only",
  data: { published: true },
};
const translationUnpublished: Post = {
  id: "de-DE/weekly-update-live",
  data: { published: false },
};

describe("filterPublishedBlogPosts", () => {
  test("includeUnpublished keeps English unpublished posts and their translations", () => {
    const posts = [
      liveEnglish,
      liveGerman,
      unpublishedEnglish,
      unpublishedGerman,
    ];

    expect(filterPublishedBlogPosts(posts, true)).toEqual(posts);
  });

  test("keeps every locale of a slug whose en-US entry is published true", () => {
    const posts = [liveEnglish, liveGerman];

    expect(filterPublishedBlogPosts(posts, false)).toEqual(posts);
  });

  test("drops every locale when English is published false", () => {
    const posts = [unpublishedEnglish, unpublishedGerman];

    expect(filterPublishedBlogPosts(posts, false)).toEqual([]);
  });

  test("drops every locale when English published is omitted", () => {
    const posts = [omittedEnglish, omittedGerman];

    expect(filterPublishedBlogPosts(posts, false)).toEqual([]);
  });

  test("missing en-US file for a slug is unpublished", () => {
    expect(filterPublishedBlogPosts([orphanGerman], false)).toEqual([]);
  });

  test("published false only on a translation still ships when English is true", () => {
    const posts = [liveEnglish, translationUnpublished];

    expect(filterPublishedBlogPosts(posts, false)).toEqual(posts);
  });

  test("English published true is published", () => {
    expect(filterPublishedBlogPosts([liveEnglish], false)).toEqual([
      liveEnglish,
    ]);
  });
});
