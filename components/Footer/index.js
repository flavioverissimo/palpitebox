import React from "react";
import Link from "next/link";

const Footer = (props) => {
  return (
    <footer className="bg-colorLogo mt-16">
      <div className="container px-6 py-8 mx-auto">
        <div className="text-center">
          <div className="mb-12">
            <img
              className="w-3/12 inline-block pt-6 px-2 mr-20"
              src="minimalist.png"
              alt="Desenvolvimento Minimalista"
            />
            <img
              className="w-3/12 inline-block pt-6 px-1"
              src="fstack.png"
              alt="Verissimo Fullstack"
            />
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            © Copyright 2022. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400">
            <span>Projeto Desenvolvido por:</span>
            <Link href="">
              <a className="px-2">Flavio Veríssimo</a>
            </Link>
            |
            <Link href="https://www.linkedin.com/in/flavioverissimolima/">
              <a target="_blank" className="px-2">
                Linkedin
              </a>
            </Link>
            |
            <Link href="https://github.com/flavioverissimo">
              <a target="_blank" className="px-2">
                Github
              </a>
            </Link>
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <Link href="#">
              <a className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500">
                Teams
              </a>
            </Link>
            <Link href="#">
              <a className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500">
                Privacy
              </a>
            </Link>
            <Link href="#">
              <a className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500">
                Cookies
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
