export interface PostPhotoResponse {
  post_author: number;
  post_type: string;
  post_status: string;
  post_title: string;
  post_content: string;
  files: Files;
  meta_input: MetaInput;
}

export interface Files {
  img: Img;
}

export interface Img {
  name: string;
  type: string;
  tmp_name: string;
  error: number;
  size: number;
}

export interface MetaInput {
  peso: string;
  idade: string;
  acessos: number;
}
