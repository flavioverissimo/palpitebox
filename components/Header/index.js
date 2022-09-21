import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="bg-blue-100 pt-12 pb-8">
        <div className="container mx-auto">
          <img className="mx-auto w-64" src="logo.png" alt="Sua Opnião" />
        </div>
      </div>
      <div
        className={`${props.className} bg-colorLogo p-4 text-center text-white shadow-md text-base font-medium uppercase`}
      >
        <Link href="/">
          <a className="px-4 hover:underline">Home</a>
        </Link>
        <Link href="/sobre">
          <a className="px-4 hover:underline">Sobre</a>
        </Link>
        <Link href="/contato">
          <a className="px-4 hover:underline">Contato</a>
        </Link>
        <Link href="/pesquisa">
          <a className="px-4 hover:underline">Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Header;
