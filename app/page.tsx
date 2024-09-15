import Link from 'next/link';
import { getSortedPostsData } from './lib/post';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title, author }) => (
          <li key={id} className="mb-6">
            <Link href={`/posts/${id}`} className="text-xl font-semibold hover:underline">
              {title}
            </Link>
            <p className="text-sm text-gray-500">
              {date} - by {author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
