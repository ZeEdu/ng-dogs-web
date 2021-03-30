export interface GetPhotoContent {
  photo: Photo;
  comments: Comment[];
}

export interface Comment {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_author_IP: string;
  comment_date: Date;
  comment_date_gmt: Date;
  comment_content: string;
  comment_karma: string;
  comment_approved: string;
  comment_agent: string;
  comment_type: string;
  comment_parent: string;
  user_id: string;
}

export interface Photo {
  id: number;
  author: string;
  title: string;
  date: Date;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}
