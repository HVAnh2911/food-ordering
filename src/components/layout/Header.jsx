import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link
        href={"/"}
        className="text-primary font-semibold text-2xl uppercase"
      >
        ST Pizza
      </Link>
      <nav className="flex gap-8 text-gray-400 font-semibold items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
      </nav>
      <nav className="flex gap-4 text-gray-400 font-semibold items-center">
        <Link href={"login"}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary text-white px-8 py-2 rounded-full"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;