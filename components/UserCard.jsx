async function getUsers(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function UserCard({ id }) {
  const user = await getUsers(id);
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">{user.email}</p>
      <p className="text-gray-600">{user.website}</p>
    </div>
  );
}
