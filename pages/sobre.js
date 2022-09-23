import React from "react";
import PageTitle from "../components/PageTitle";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Sobre = () => {
  const { data, err } = useSWR("./api/get-sobre", fetcher);
  return (
    <section className="bg-white">
      <PageTitle title="Sobre" />
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
          Conheça nossa Empresa
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-10 gap-8 lg:flex lg:items-center">
          <div className="flex flex-col w-full lg:w-1/2 gap-4  xl:gap-4">
            {!data && (
              <p className="mx-auto w-2/4 text-colorLogo">Carregando...</p>
            )}
            {data &&
              data.map(({ Sobre }) => <p className="text-gray-500">{Sobre}</p>)}
          </div>

          <div className="hidden lg:flex lg:w-2/5 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src="food.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
