import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = join(process.cwd(), 'posts');

export type FrontMatterKeys = {
  date: string;
  title: string;
};

export function getSortedPostsData() {
  return readdirSync(postsDirectory)
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = join(postsDirectory, fileName);
      const fileContents = readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as FrontMatterKeys),
      };
    })
    .sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
}

export function getAllPostIds() {
  return readdirSync(postsDirectory).map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getPostData(id) {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { value: html } = await remark().use(remarkHtml).process(content);

  return {
    id,
    html,
    ...data,
  };
}
