import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
    Nota: 0,
  });

  const notas = [0, 1, 2, 3, 4, 5];

  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (err) {}
  };

  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;

    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  return (
    <div className="text-colorLogo">
      <PageTitle title="Pesquisa" />
      <p className="text-center text-2xl font-bold mb-4">
        Critica, Sugestões e Elogios
      </p>
      <p className="text-center">
        O estabelecimento X sempre busca por atender melhor seus clientes.
        <span className="block">
          Por isso, estamos sempre abertos a ouvir sua opnião
        </span>
      </p>
      {!success && (
        <div className="w-1/3 mx-auto mt-16 uppercase text-base tracking-wide font-semibold">
          <label for="nome" className="block mb-1">
            Nome:
          </label>
          <input
            id="nome"
            type="text"
            className="p-3 w-full border-none bg-gray-200"
            onChange={onChange}
            name="Nome"
            value={form.Nome}
            placeholder="Nome"
          />
          <label for="email" className="block mb-1 mt-4">
            Email:
          </label>
          <input
            id="email"
            type="text"
            className="p-3 w-full border-none bg-gray-200"
            onChange={onChange}
            name="Email"
            value={form.Email}
            placeholder="Email"
          />
          <label for="whatsapp" className="block mb-1 mt-4">
            Whatsapp:
          </label>
          <input
            id="whatsapp"
            type="text"
            className="p-3 w-full border-none bg-gray-200"
            onChange={onChange}
            name="Whatsapp"
            value={form.Whatsapp}
            placeholder="Whatsapp"
          />
          <div className="mb-2 mt-4">Nota:</div>
          <div className="flex justify-center mb-1">
            {notas.map((nota) => (
              <label className="block w-12 text-center">
                {nota} <br />
                <input
                  id="nota"
                  type="radio"
                  name="Nota"
                  value={nota}
                  placeholder="Whatsapp"
                  onChange={onChange}
                />
              </label>
            ))}
          </div>
          <button
            className="w-full bg-blue-400 text-white font-bold py-3 mt-4 transition duration-300 ease-in-out hover:bg-blue-500 transform text-xl"
            onClick={save}
          >
            Enviar
          </button>
        </div>
      )}
      {success && (
        <div className="w-1/4 mt-12 mx-auto text-center">
          <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md">
            <div>
              <p className="font-bold">
                Obrigado por contribuir com sua sugestão ou crítica.
              </p>
            </div>
          </div>

          <div className="border mt-6 text-center py-4">
            <p className="text-lg">Seu Cupom:</p>
            <p className="text-3xl font-bold">{retorno.Cupom}</p>
          </div>

          <div className="border mt-2 text-center py-4">
            <p className="text-lg p-4 font-bold">{retorno.Promocao}</p>
          </div>

          <div className="">
            <p className="text-lg p-4 italic">
              Tire um print ou foto desta tela para nos apresentar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pesquisa;
