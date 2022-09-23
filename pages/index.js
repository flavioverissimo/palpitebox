import React from "react";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/PageTitle";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR("./api/get-promo", fetcher);
  return (
    <div>
      <PageTitle title="Seja Bem Vindo" />
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-2xl text-colorLogo font-semibold tracking-tight sm:text-3xl mb-1">
          Olá Cliente, <br /> Poderia nos ajudar com sua avaliação?
        </h2>

        <p className="mx-auto text-center text-sm xl:w-2/5 sm:w-2/5 text-colorLogo">
          Para melhor aproveitamento de nossos clientes, nosso estabelecimento
          está sempre em busca de melhorias, então, sua avaliação é muito
          importante!
        </p>

        <div className="my-16 text-center">
          <Link href="/pesquisa">
            <a className="bg-blue-400 px-12 py-4 font-bold hover:bg-blue-500 hover:shadow-md">
              Dar opnião ou sugestão
            </a>
          </Link>
        </div>

        {!data && (
          <p className="mx-auto text-center w-2/4 text-colorLogo">
            Carregando...
          </p>
        )}
        {!error && data && data.showCoupon && (
          <div className="mx-auto text-colorLogo xl:w-2/4 sm:w-4/5">
            <div className="bg-gray-100 p-6">
              <p className="text-center">
                <span className="block mb-2 text-xl font-semibold">
                  Promoção Ativa:
                </span>
                <span className="text-lg">{data.message}</span>
              </p>

              <p className="mt-10 text-sm">
                <span className="block mb-1 font-semibold underline">
                  Observação:
                </span>
                Após avaliar nosso estabelecimento, será gerado o cupom da
                promoção. Fique atento.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
