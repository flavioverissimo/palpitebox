import React from "react";
import Link from "next/link";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="bg-gray-200 pt-12 pb-8 relative">
        <div className="container mx-auto">
          <img className="mx-auto w-64" src="logo.png" alt="PalpiteBOX" />
        </div>
        <div className="absolute top-0 right-0 h-20 w-20 xl:px-4 xl:py-2 xl:m-4 sm:px-2 sm:py-2 sm:m-2 ">
          <Link href="https://api.whatsapp.com/send?phone=SEMTELEFONEAINDANE&text=Ol%C3%A1%20Fl%C3%A1vio%20Ver%C3%ADssimo,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas!">
            <a target="_blank">
              <img src="whatsapp.png" />
            </a>
          </Link>
        </div>
      </div>

      <nav className="bg-white shadow mb-12">
        <div className="container flex items-center justify-center p-6 mx-auto text-colorLogo capitalize">
          <Link href="/">
            <a className="border-b-2 border-transparent duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
              home
            </a>
          </Link>
          <Link href="/sobre">
            <a className="border-b-2 border-transparent duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
              Sobre
            </a>
          </Link>
          <Link href="/contato">
            <a className="border-b-2 border-transparent duration-300 transform hover:border-blue-500 mx-1.5 sm:mx-6">
              Contato
            </a>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
