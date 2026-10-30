import { useState } from "react";

export default function Dom() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Virtual DOM</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)} style={{ cursor: "pointer" }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ cursor: "pointer" }}>
        Decrement
      </button>
    </div>
  );
}
