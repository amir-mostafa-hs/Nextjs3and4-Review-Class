import dynamic from "next/dynamic";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=25");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

// Dynamic import for PostCard component
const PostCard = dynamic(() => import("../../components/PostCard"), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-64"></div>,
  ssr: false,
});

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
            <PostCard post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
}
