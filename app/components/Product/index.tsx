"use client";

import axios from "axios";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    imageUrl: string;
    price: string | number;
    defaultPriceId: string;
  };
}

export function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const [showCart, setShowCart] = useState(false);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      setShowCart(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);

      alert(`Erro ao tentar redirecionar ao pagamento ${err} `);
    }
  }

  return (
    <main className="mx-auto my-0 grid min-h-[calc(100vh-116px)] max-w-[1180px] grid-cols-2 items-stretch gap-16 pb-8">
      <div className="flex h-[calc(600px-0.5rem)] w-full max-w-[576px] items-center justify-center rounded-lg bg-custom-gradient p-1">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-2xl text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-2xl text-green-300">
          {product.price}
        </span>

        <p className="mt-10 text-base text-gray-300">{product.description}</p>

        <button
          type="button"
          onClick={() => {
            setShowCart(true);
          }}
          className=":hover:bg-transparent group mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-base font-bold text-white transition-all duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isCreatingCheckoutSession}
        >
          Colocar na sacola
        </button>
      </div>

      <div
        className={`${showCart ? "fixed bottom-0 left-0 right-0 top-0 z-0 h-full w-full cursor-pointer bg-black-opacity-60" : ""}`}
        onClick={() => setShowCart(false)}
      ></div>

      <div
        className={`fixed bottom-0 right-0 top-0 z-10 h-screen w-[480px] bg-gray-900 p-6 transition-all duration-300 ease-in-out ${showCart ? "translate-x-0 opacity-100" : "translate-x-[110%] opacity-0"} `}
      >
        <div className="flex justify-end">
          <button type="button" onClick={() => setShowCart(false)}>
            <X size={24} className="text-gray-500 hover:text-gray-100" />
          </button>
        </div>

        <div className="flex h-[calc(100%-24px)] flex-col">
          <h2 className="mb-8 text-xl font-bold text-gray-100">
            Sacola de compras
          </h2>

          <div className="flex max-h-[500px] flex-1 flex-col gap-6 overflow-auto py-1">
            <div className="flex gap-5">
              <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-custom-gradient"></div>

              <div>
                <h4 className="mb-1 text-lg text-gray-300">
                  Camiseta Explorer
                </h4>
                <p className="mb-2 text-lg font-bold text-gray-100">R$ 62,90</p>

                <button
                  type="button"
                  className="border-0 bg-transparent text-base font-bold text-green-800 hover:text-green-400"
                >
                  Remover
                </button>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h4 className="text-base text-gray-300">Quantidade</h4>
                <p className="text-lg text-gray-300">3 itens</p>
              </div>
              <div className="flex justify-between">
                <h4 className="text-lg font-bold text-gray-100">Valor total</h4>
                <p className="text-2xl font-bold text-gray-100">R$ 270,00</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleBuyProduct}
              className="group cursor-pointer rounded-lg bg-green-500 p-5 text-base font-bold text-white transition-all duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isCreatingCheckoutSession}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
