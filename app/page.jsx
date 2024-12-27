import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <nav className="space-x-4">
        <Link href="/posts" className="text-blue-500 hover:text-blue-700">
          View Posts
        </Link>
        <Link href="/users" className="text-blue-500 hover:text-blue-700">
          View Users
        </Link>
      </nav>
      <section className="mt-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to Next.js Blog</h1>
      </section>
    </main>
  );
}
