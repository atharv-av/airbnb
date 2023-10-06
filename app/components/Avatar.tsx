"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/nextjs";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Image
          className="rounded-full"
          height="30"
          width="30"
          alt="Avatar"
          src={src || "/images/placeholder.jpg"}
        />
      )}
    </>
  );
};

export default Avatar;
