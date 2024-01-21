import { getServerSession } from "next-auth";
import ServerButton from "./ServerButton";

export default function Page() {
  const name = async () => {
    "use server";
    const session = await getServerSession();
    console.log("kj");
    return session?.user?.name || "not logged in";
  };
  return (
    <>
      <div>
        <ServerButton name={name} />
      </div>
    </>
  );
}
