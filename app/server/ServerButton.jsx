"use client";

import { useState } from "react";

export default function ServerButton({ name }) {
  const [first, setfirst] = useState();
  return (
    <div>
      <button onClick={async () => setfirst(await name())}>click</button>
      {first && <div>{first}</div>}
    </div>
  );
}
