export type BlogTitleFields = {
  title: string;
  metaTitle?: string;
};

/** Document / Open Graph / Twitter title. Visible H1 and listings always use `title`. */
export function blogMetaTitle({ title, metaTitle }: BlogTitleFields): string {
  return metaTitle ?? title;
}
