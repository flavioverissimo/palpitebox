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
      <p className="mx-auto text-center text-xl w-2/4 text-colorLogo">
        O estabelecimento X sempre busca por atender melhor seus clientes.
        <span className="block">
          Por isso, estamos sempre abertos a ouvir sua opnião
        </span>
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
        <div className="mx-auto text-center w-2/4">
          <p className="text-xl text-colorLogo">
            <span className="font-semibold">Promoção:</span> {data.message}
          </p>

          <p className="mt-2 bg-gray-100 p-4">
            Após avaliar nosso estabelecimento, será gerado o cupom da promoção
            e enviado para o seu whatsapp. Fique atento e aproveite.
          </p>

          <p className="mt-2 font-bold text-colorLogo">
            O cupom é válido por 30 dias.
          </p>
        </div>
      )}
    </div>
  );
};

export default Index;
