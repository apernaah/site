import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ head }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link text-black dark:text-white cursor-pointer"
              >
                {name}.
              </h1>

              <div className="flex items-center gap-2">
                {mounted && data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="Theme Toggle"
                    />
                  </Button>
                )}

                <Popover.Button className="p-2">
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu Toggle"
                  />
                </Popover.Button>
              </div>
            </div>

            <Popover.Panel
              className={`absolute right-4 z-20 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"
              } shadow-md rounded-md`}
            >
              {!head ? (
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={() => router.push("https://github.com/apernaah")}>GitHub</Button>
                  <Button onClick={() => router.push("https://blog.apernaah.in")}>Blog</Button>
                  <Button onClick={() => window.open("mailto:heylo@apernaah.in")}>Contact</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  <Button onClick={() => router.push("https://blog.apernaah.in")}>Blog</Button>
                  <Button onClick={() => window.open("mailto:heylo@apernaah.in")}>Contact</Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>

      {/* Desktop Header */}
      <div
        className="mt-10 hidden flex-row items-center justify-between sticky bg-transparent text-black dark:text-white top-0 z-10 tablet:flex"
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0 text-black dark:text-white"
        >
          {name}.
        </h1>
        {!head ? (
          <div className="flex items-center">
            <Button onClick={() => router.push("https://github.com/apernaah")}>GitHub</Button>
            <Button onClick={() => router.push("https://blog.apernaah.in")}>Blog</Button>
            <Button onClick={() => window.open("mailto:heylo@apernaah.in")}>Contact</Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Theme Toggle"
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex items-center">
            <Button onClick={() => router.push("/")}>Home</Button>
            <Button onClick={() => router.push("https://blog.apernaah.in")}>Blog</Button>
            <Button onClick={() => window.open("mailto:heylo@apernaah.in")}>Contact</Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="Theme Toggle"
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
