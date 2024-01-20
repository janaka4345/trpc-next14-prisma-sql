'use client'
import { trpc } from "../server/client"

export default function Home() {
  const data = trpc.user.users.useQuery()
  return (
    <pre>
      {JSON.stringify(data.data, null, 2)}
    </pre>
  );
}
