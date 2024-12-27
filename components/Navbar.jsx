import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="space-x-4">
      <Link href="/" className="text-blue-500 hover:text-blue-700">
        Home
      </Link>
      <Link href="/posts" className="text-blue-500 hover:text-blue-700">
        View Posts
      </Link>
      <Link href="/users" className="text-blue-500 hover:text-blue-700">
        View Users
      </Link>
    </nav>
  );
};
export default Navbar;
