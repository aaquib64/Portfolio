import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Disclosure
      as="nav"
      className="bg-gray-900/70 backdrop-blur-md fixed w-full z-50 border-b border-white/10 shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white transition">
              <Bars3Icon className="block h-6 w-6 data-[open]:hidden" />
              <XMarkIcon className="hidden h-6 w-6 data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex items-center absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0">
            <Link
              to="/"
              className="relative text-xl font-semibold text-white group"
            >
              Aaquib <span className="text-indigo-500">Shaikh</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex ml-auto items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  "relative px-3 py-2 text-sm font-medium transition duration-300 group",
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-300 hover:text-white",
                )}
              >
                {item.name}

                {/* Underline Animation */}
                <span
                  className={classNames(
                    "absolute left-0 -bottom-1 h-[2px] bg-indigo-500 transition-all duration-300",
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                  )}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-gray-900/95 backdrop-blur-md">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                "block rounded-md px-3 py-2 text-base font-medium transition",
                isActive(item.href)
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white",
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
