"use client";

import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  quantity: number | null;
}

interface SuccessContentProps {
  costumerName: string | null | undefined;
  products: Product[];
}

export function SuccessContent({
  costumerName,
  products,
}: SuccessContentProps) {
  return (
    <div className="mx-auto my-0 flex h-full min-h-[calc(100vh-116px)] flex-col items-center">
      <h1 className="text-2xl text-gray-100">Compra efetuada</h1>

      <div className="flex flex-wrap items-center gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="my-8 flex min-w-52 flex-col items-center justify-center text-center"
          >
            <div className="flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-custom-gradient p-1">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={520}
                height={480}
                className="object-cover"
              />
            </div>

            <p className="mt-8 max-w-[560px] text-center text-xl text-gray-300">
              <strong>{product.name}</strong>
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-[560px] text-center text-xl text-gray-300">
        🎉 Uhuul <strong>{costumerName}</strong>, seu pedido já está a caminho
        da sua casa. 🎉
      </p>

      <Link
        href="/"
        className="mt-20 block text-lg font-bold text-green-500 hover:text-green-300"
      >
        Voltar ao catálogo
      </Link>
    </div>
  );
}
