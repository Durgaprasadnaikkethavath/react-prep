const user = [
  { id: 1, name: "durga" },
  { id: 2, name: "sri" },
  { id: 3, name: "ruku" },
];

export default function Key() {
  return (
    <div>
      <h1>Key import in React</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
