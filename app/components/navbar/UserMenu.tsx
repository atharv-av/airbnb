"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import Link from "next/link";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import RentModal from "../modals/RentModal";
import useRentModal from "@/app/hooks/useRentModal";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    // if (!isSignedIn) {
    //   return alert("Please login!");
    // } else
    {
      rentModal.onOpen();
    }
  }, [rentModal]);

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex flex-row items-center gap-3">
      <div
        onClick={onRent}
        className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
      >
        Airbnb your home
      </div>
      <div
        onClick={toggleOpen}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Avatar src={currentUser?.image} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-1/3 lg:w-1/6 bg-white overflow-hidden right-0 top-12 mt-6 text-sm">
          <div className="flex flex-col cursor-pointer">
            {isSignedIn ? (
              <>
                <MenuItem onClick={() => {}} label="My Trips" />
                <MenuItem onClick={() => {}} label="My Favourites" />
                <MenuItem onClick={() => {}} label="My Reservations" />
                <MenuItem onClick={() => {}} label="My Properties" />
                <MenuItem onClick={onRent} label="Airbnb my home" /> <hr />
                <SignOutButton>
                  <MenuItem onClick={() => {}} label="Logout" />
                </SignOutButton>
              </>
            ) : (
              <>
                <SignInButton>
                  <MenuItem onClick={() => {}} label="Login" />
                </SignInButton>
                <SignUpButton>
                  <MenuItem onClick={() => {}} label="Signup" />
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
