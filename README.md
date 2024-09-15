# Simple Blog with Markdown

This is a [Next.js](https://nextjs.org) project that implements a simple blog using Markdown files for content. The project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- Display a list of blog posts on the home page
- View individual blog posts
- Markdown support for blog content
- Automatic sorting of posts by date

## Project Structure

- `app/page.tsx`: The home page component that displays a list of blog posts
- `app/posts/[id]/page.tsx`: The dynamic route for individual blog posts
- `app/lib/post.ts`: Contains utility functions for fetching and processing blog post data
- `app/posts/`: Directory containing Markdown files for blog posts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding New Blog Posts

To add a new blog post, create a new Markdown file in the `app/posts/` directory. The file name should be in the format `{id}-{title}.md`. The content of the file should include frontmatter with the following fields:

```markdown
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
author: "Your Name"
---

Your blog post content goes here...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
