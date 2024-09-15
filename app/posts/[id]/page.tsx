import { getPostData, getSortedPostsData } from '../../lib/post';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
      <p className="text-sm text-gray-500 mb-8">
        {postData.date} - by {postData.author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
