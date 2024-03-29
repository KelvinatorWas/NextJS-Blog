type BlogData = {
  post_id: number;
  title: string;
  description: string;
  content: string;
  createdAt: string | null;
  updatedAt: string | null;
};

type TagData = {
  name: string;
  tag_id: number;
};

type TagPostData = {
  post_id: number;
  tag_id: number;
};

type AllTagData = {
  post_tag_id: number;
  post_id: number;
  tag_id: number;
  name: string;
};

type CommentData = {
  comment_id?: number;
  post_id: number;
  user_id: number;
  content: string;
  createdAt: string | null;
  updatedAt?: string | null;
  post_name?: string;
};

export type { BlogData, TagData, TagPostData, AllTagData, CommentData };
