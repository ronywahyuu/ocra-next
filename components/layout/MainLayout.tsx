import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";
import { MdHistory, MdSubscriptions } from "react-icons/md";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";

import { MdOutlineAccountCircle, MdSettings } from "react-icons/md";
import Dropdown from "@/components/Dropdown";

interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  const router = useRouter();
  return (
    <main className=" h-screen lg:flex ">
      <aside className="bg-[#161D2F] m-0 md:m-3 rounded-md lg:fixed lg:left-0 lg:h-[calc(100vh-20px)] ">
        <nav className="p-3 flex items-center justify-between lg:flex-col  lg:h-full">
          <div>
            <div className="block ">
              <Image
                src="/logo-onlyicon.png"
                alt="Ocra Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="hidden md:hidden">
              <Image src="/logo.png" alt="Ocra Logo" width={100} height={100} />
            </div>
          </div>
          <ul className="flex gap-10 lg:gap-20 lg:flex-col">
            <li>
              <Link href="/">
                <HiHome
                  className={`${
                    router.pathname === "/" ? "text-white" : "text-gray-500"
                  } text-base md:text-lg lg:text-2xl  hover:text-white transition duration-150`}
                />
              </Link>
            </li>
            <li>
              <Link href="/subscriptions">
                <MdSubscriptions
                  className={`${
                    router.pathname === "/subscriptions"
                      ? "text-white"
                      : "text-gray-500"
                  } text-base md:text-lg lg:text-2xl  hover:text-white transition duration-150`}
                />
              </Link>
            </li>
            <li>
              <Link href="/history">
                <MdHistory
                  className={`${
                    router.pathname === "/history"
                      ? "text-white"
                      : "text-gray-500"
                  } text-base md:text-lg lg:text-2xl  hover:text-white transition duration-150`}
                />
              </Link>
            </li>
          </ul>

          {/* avatar */}
          <Menu as="div">
            <Menu.Button>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-gray-500">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <p className="text-white hidden md:hidden">John Doe</p>
              </div>
            </Menu.Button>

            {/* this belong to dropdown component */}
            <Dropdown profile />
          </Menu>
        </nav>
      </aside>

      <div className="p-5 lg:ml-20  w-full">
        {children}
        {/* <input
            type="text"
            className="bg-[#161D2F]  py-2 px-3 text-white rounded-md w-full"
            placeholder="Search"
          />

          <Jumbotron />
          <section className="mt-10">
            <VideoList />
          </section> */}
      </div>
    </main>
  );
};

export default MainLayout;
