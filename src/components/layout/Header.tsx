"use client";

// next import
import { usePathname } from "next/navigation";
import Link from "next/link";

// linkData from constant folder
import { linkData } from "@/constant/link";

// container from container folder in components folder
import Container from "@/components/container/Container";

const Header = () => {
  const pathName = usePathname();
  return (
    <div className="bg-slate-800 p-5">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-x-6">
            {linkData.map((item) => {
              const isActive =
                pathName === item.href ||
                (pathName.startsWith(item.href) && item.href !== "/");
              return (
                <li key={item.name}>
                  <Link
                    className={
                      isActive
                        ? "text-blue-500 font-medium"
                        : "text-white font-medium"
                    }
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-start gap-x-3">
            <div className="flex items-start gap-x-3">
              <Link
                className="bg-green-500 hover:bg-green-600 px-8 py-1 rounded-md text-white transition-all duration-150 ease-in-out"
                href={"/signup"}
              >
                Sign Up
              </Link>
              <span className="w-px h-8 bg-gray-200"></span>
              <Link
                className="bg-blue-500 hover:bg-blue-600 transition-all duration-150 ease-in-out px-8 py-1 rounded-md text-white"
                href={"/login"}
              >
                Login
              </Link>
            </div>

            <div>
              <Link className="flex items-center gap-x-2" href={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span  className="text-gray-400">0</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
