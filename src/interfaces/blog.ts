export interface IBlog {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  categories: number[];
  tags: number[];
  sticky?: boolean;
  _embedded?: {
    "wp:term"?: Array<Array<{ id: number; name: string }>>;
  };
  jetpack_featured_media_url?: string;
}
