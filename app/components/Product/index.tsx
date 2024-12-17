"use client";

import Image from "next/image";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    imageUrl: string;
    price: string | number;
  };
}

export function Product({ product }: ProductProps) {
  return (
    <main className="mx-auto my-0 grid max-w-[1180px] grid-cols-2 items-stretch gap-16 pb-8">
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

        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-base font-bold text-white transition-all duration-300 hover:bg-green-700">
          Comprar agora
        </button>
      </div>
    </main>
  );
}
