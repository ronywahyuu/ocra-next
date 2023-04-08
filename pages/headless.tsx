import { Menu, Transition } from "@headlessui/react";
import React from "react";

type Props = {};

const Headless = (props: Props) => {
  return (
    <div className="text-white">
      <Menu as="div" className="">
        <Menu.Button>More</Menu.Button>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="ml-5 relative">
            <div className="flex flex-col absolute top-0">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${active && "bg-blue-500"}`}
                    href="/account-settings"
                  >
                    Documentation
                  </a>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                <span className="opacity-75">
                  Invite a friend (coming soon!)
                </span>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Headless;
