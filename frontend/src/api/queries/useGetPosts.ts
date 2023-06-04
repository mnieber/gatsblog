import { posts } from '/src/api/data/posts';
import { ObjT } from '/src/utils/types';

export type ArgsT = {};

export const getPosts = (args: ArgsT) => {
  const response = [];
  for (const post of posts) {
    response.push({
      ...post,
      id: post.slug,
      chapters: post.chapters.map((chapter: ObjT) => ({
        ...chapter,
        id: chapter.slug,
      })),
    });
  }

  return Promise.resolve({ posts: response });
};
