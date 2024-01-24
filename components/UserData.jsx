"use client";
import { trpc } from "../server/client";
export default function UserData() {
  const data = trpc.user.users.useQuery();
  return (
    <div>
      <pre>{JSON.stringify(data.data, null, 2)}</pre>
      <br />
      <br />
      <br />
    </div>
  );
}
