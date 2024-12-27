import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={`https://picsum.photos/id/${post.id}/400/200`}
          alt={post.title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={post.id <= 2} // اولویت‌بندی لود تصاویر مهم
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
      <Link
        href={`/posts/${post.id}`}
        className="text-blue-500 hover:text-blue-700"
      >
        Read More →
      </Link>
    </div>
  );
}
