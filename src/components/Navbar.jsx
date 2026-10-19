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
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-950/85 shadow-lg shadow-black/10 backdrop-blur-xl"
    >
      {({ close }) => (
        <>
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex h-[72px] items-center justify-between">
              {/* Logo */}
              <Link
                to="/"
                onClick={close}
                aria-label="Aaquib Shaikh - Home"
                className="group relative shrink-0 text-xl font-bold tracking-tight text-white sm:text-2xl"
              >
                Aaquib
                <span className="text-indigo-400"> Shaikh</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-2 sm:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={classNames(
                      "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 lg:px-4",
                      isActive(item.href)
                        ? "text-indigo-300"
                        : "text-gray-400 hover:text-white",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                    )}
                  >
                    {item.name}

                    <span
                      className={classNames(
                        "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-indigo-400 transition-transform duration-300 lg:left-4 lg:right-4",
                        isActive(item.href) ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <DisclosureButton
                  aria-label="Toggle navigation menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-indigo-400/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {({ open }) =>
                    open ? (
                      <XMarkIcon className="h-5 w-5" />
                    ) : (
                      <Bars3Icon className="h-5 w-5" />
                    )
                  }
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <DisclosurePanel className="border-t border-white/10 bg-gray-950/95 sm:hidden">
            <div className="mx-auto max-w-7xl space-y-1 px-5 py-4">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  onClick={close}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={classNames(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "border border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400",
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
