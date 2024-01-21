"use client";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
export default function NavMenu() {
  return (
    <div className="flex flex-col gap-5">
      <pre
      //   className="w-1/4 text-wrap"
      >
        {/* {console.log(useSession())} */}
        {JSON.stringify(useSession(), null, 2)}
      </pre>
      {!useSession()?.data && (
        <Link href="./api/auth/signin">
          <Button>SignIN</Button>
        </Link>
      )}
      {!useSession()?.data && <Button>CreateAccount</Button>}
      {useSession()?.data?.user && (
        <Avatar>
          <AvatarImage src={useSession().data.user.image} alt="userImage" />
          <AvatarFallback>user Image</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
