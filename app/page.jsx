import ServerComponent from "@/components/ServerComponent";
import UserData from "@/components/UserData";
export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <UserData />
        <ServerComponent />
      </div>
    </>
  );
}
