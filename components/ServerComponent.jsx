import { getServerSession } from "next-auth";

export default async function ServerComponent() {
  const session = await getServerSession();

  return (
    <>
      {session?.user?.name && (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      )}
      {!session?.user && (
        <div>
          <h1>not logeed in</h1>
        </div>
      )}
    </>
  );
}
