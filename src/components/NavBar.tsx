"use client";

import Image from "next/image";
import Link from "next/link";
import { routerLink } from "./router";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import ButtonDark from "./ButtonDark";
import ButtonLight from "./ButtonLight";

function NavBar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-[1600px] flex flex-wrap items-center justify-between mx-auto px-2 py-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/home/logo.svg"
            height={32}
            width={40}
            className="h-8"
            alt="Logo"
          />
          <div className="font-poppins text-gray-800 self-center text-xl font-semibold whitespace-nowrap">
            Gift<span className="text-xs text-gray-400">me</span>
          </div>
        </Link>

        <div className="flex items-center md:order-2">
          <button
            type="button"
            className={`${
              session ? "block" : "hidden"
            } flex mr-3 text-sm bg-transparent rounded-full md:mr-0 focus:ring-1 focus:ring-gray-300`}
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
              src="/user.webp"
              alt="user photo"
            />
          </button>
          <div className={`${session ? "hidden" : "block"} flex gap-2`}>
            <div>
              <ButtonDark href="/login">Iniciar sesión</ButtonDark>
            </div>
            <div className="hidden md:block">
              <ButtonLight href="/register">Registrarme</ButtonLight>
            </div>
          </div>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900">
                {session?.user?.name}
              </span>
              <span className="block text-sm  text-gray-500 truncate">
                {session?.user?.email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Cuenta
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Mis compras
                </Link>
              </li>
              <li>
                <a
                  onClick={() => signOut()}
                  className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {routerLink.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={`${
                    pathname === item.link
                      ? "text-gray-800 font-semibold"
                      : "text-gray-500 hover:text-gray-700"
                  } font-poppins block cursor-pointer py-2 pl-3 pr-4 rounded md:bg-transparent`}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
