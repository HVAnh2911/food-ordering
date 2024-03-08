"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function AuthLinks({ status, userName = "" }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className="whitespace-nowrap">
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="px-8 py-2 text-white rounded-full bg-primary"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link href={"/login"}>Login</Link>
        <Link
          href={"/register"}
          className="px-8 py-2 text-white rounded-full bg-primary"
        >
          Register
        </Link>
      </>
    );
  }
}

const Header = () => {
  const { data, status } = useSession();
  let userName = data?.user?.name || data?.user?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="flex items-center justify-between">
      <Link
        href={"/"}
        className="text-2xl font-semibold uppercase text-primary"
      >
        ST Pizza
      </Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-400">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 font-semibold text-gray-400">
        <AuthLinks status={status} userName={userName} />
      </nav>
    </header>
  );
};

export default Header;
