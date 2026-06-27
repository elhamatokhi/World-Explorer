"use client";

import { useState } from "react";

export default function TestCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border p-6">
      <h2 className="mb-4 text-xl font-bold">Client Component Test</h2>

      <p className="mb-4">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Increment
      </button>
    </div>
  );
}