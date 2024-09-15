import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Directory where the blog posts are stored
const postsDirectory = path.join(process.cwd(), 'app', 'posts');

/**
 * Retrieves and sorts all blog post data
 * @returns An array of sorted blog post data
 */
export function getSortedPostsData() {
  // Read all file names in the posts directory
  const fileNames = fs.readdirSync(postsDirectory);
  // Process each file and extract its data
  const allPostsData = fileNames.filter(fileName => {
    // Only process .md files
    return path.extname(fileName).toLowerCase() === '.md';
  }).map((fileName) => {
    // Remove the ".md" extension to get the post id
    const id = fileName.replace(/\.md$/, '');
    // Construct the full path to the markdown file
    const fullPath = path.join(postsDirectory, fileName);
    // Read the file contents
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; author: string }),
    };
  });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Retrieves data for a single blog post
 * @param id - The unique identifier of the post
 * @returns An object containing the post's data and HTML content
 */
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
}