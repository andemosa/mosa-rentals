import Image from "next/image";
import Link from "next/link";

import profile from "../../public/images/profile.png";
import Settings from "./Icons/Settings";
import Like from "./Icons/Like";
import Notification from "./Icons/Notification";
import Search from "./Icons/Search";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 gap-y-4 border-custom-slide-grey bg-white px-4 py-7 md:grid-cols-4 md:border md:px-6 xl:px-14">
      <div className="col-span-2 flex cursor-pointer items-center text-2xl font-bold text-primary-blue md:col-span-1">
        <Link href="/">MOSA-RENT</Link>
      </div>
      <div className="col-span-1 flex flex-1 items-center justify-end gap-3 md:order-last md:col-span-1 lg:gap-5">
        <div className="hidden gap-3 lg:flex lg:gap-5">
          <Like />
          <Notification />
          <Settings />
        </div>
        <div>
          <Image width={50} height={50} src={profile} alt="profile" />
        </div>
      </div>
      <div className="col-span-3 mx-auto flex w-4/5 items-center gap-4 rounded-xl border border-custom-slide-grey py-2 px-3 md:col-span-2 md:w-full md:rounded-full">
        <Search />
        <input
          type="text"
          placeholder="Search something here"
          className="flex-1 text-sm outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;
