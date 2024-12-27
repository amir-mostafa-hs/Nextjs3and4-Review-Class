import UserCard from "../../components/UserCard";
import { Suspense } from "react";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<div>Loading users...</div>}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
