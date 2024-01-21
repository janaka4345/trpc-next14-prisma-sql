"use client";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function NavMenu() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-5">
      <pre
      //   className="w-1/4 text-wrap"
      >
        {/* {console.log(useSession())} */}
        {JSON.stringify(useSession(), null, 2)}
      </pre>
      {!session && (
        <>
          <Link href="./api/auth/signin">
            <Button>SignIN</Button>
          </Link>
          <Button>CreateAccount</Button>
        </>
      )}
      {session && (
        <>
          <Avatar>
            <AvatarImage src={session?.user?.image} alt="userImage" />
            <AvatarFallback>user Image</AvatarFallback>
          </Avatar>
          <h1>{session?.user?.name}</h1>
          <Button onClick={() => signOut()}>SignOut</Button>
        </>
      )}
    </div>
  );
}
