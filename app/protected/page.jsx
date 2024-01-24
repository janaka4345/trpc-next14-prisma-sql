import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession();
  if (!session || !session?.user) {
    redirect("./api/auth/signin");
  }
  return (
    <div>
      <h1>you are on a protected route</h1>
      <p>only for the eyes of authenticqated users</p>
    </div>
  );
}
