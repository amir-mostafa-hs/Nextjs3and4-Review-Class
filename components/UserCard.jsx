export default function UserCard({ user }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">{user.email}</p>
      <p className="text-gray-600">{user.website}</p>
    </div>
  );
}
