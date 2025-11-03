import React from "react";
import Socials from "../Socials";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
            <div className="mt-10">
              <Socials />
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="http://apernaah.in">
          <a className="underline underline-offset-1">Aparna</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
