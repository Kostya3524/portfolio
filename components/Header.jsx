import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="md:absolute text-right w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:justify-end md:items-end gap-y-6 py-8">
          {/* logo */}
          <h1 className="text-3xl">
            <Link href="/">
            Kostiantyn Lytvynov
            </Link>
          </h1>

          {/* <Socials /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
