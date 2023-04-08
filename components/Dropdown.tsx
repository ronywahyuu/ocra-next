import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { MdOutlineAccountCircle, MdSettings } from "react-icons/md";

interface DropdownProps {
  profile: boolean;
}

const Dropdown = ({ profile }: DropdownProps) => {
  if (profile) {
    return (
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="ml-5 absolute right-2 shadow-lg  lg:bottom-0 lg:left-14 w-52 bg-primary lg:bg-navy text-white px-2 py-3 rounded-sm z-50">
          <div className="flex flex-col gap-3">
            <Menu.Item as="div" className="flex items-center  rounded-md ">
              {({ active }) => (
                <a
                  className={`flex items-center gap-2 px-3 py-2 w-full ${
                    active && "bg-primary  "
                  }`}
                  href="/account-settings"
                >
                  <MdOutlineAccountCircle className="text-2xl" />
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`flex items-center gap-2 px-3 py-2 ${
                    active && "bg-primary  "
                  }`}
                  href="/account-settings"
                >
                  <MdSettings className="text-2xl" />
                  Settings
                </a>
              )}
            </Menu.Item>
            <hr className="border-gray-500" />
            <Menu.Item>
              {({ active }) => (
                <Link
                  className={`flex items-center gap-2 px-3 py-2 ${
                    active && "bg-primary  "
                  }`}
                  href="/auth"
                >
                  Logout
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    );
  }
  return <div>Dropdown</div>;
};

export default Dropdown;
