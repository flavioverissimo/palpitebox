import React from "react";

const Footer = (props) => {
  return (
    <div className={`${props.className} bg-colorLogo py-8`}>
      <div className="container text-center mx-auto text-white text-xl">
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
        <p>
          <span>Projeto Desenvolvido por:</span>
          <a className="px-2" href="">
            Flavio Veríssimo
          </a>
          |
          <a className="px-2" href="####">
            Linkedin
          </a>
          |
          <a className="px-2" href="###">
            Github
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
