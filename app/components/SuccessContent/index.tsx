"use client";

import Image from "next/image";
import Link from "next/link";

interface SuccessContent {
  costumerName: string | null | undefined;
  product: {
    name: string;
    imageUrl: string;
  };
}

export function SuccessContent({ costumerName, product }: SuccessContent) {
  return (
    <div className="mx-auto my-0 flex h-full min-h-[calc(100vh-116px)] flex-col items-center">
      <h1 className="text-2xl text-gray-100">Compra efetuada</h1>

      <div className="mt-16 flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-custom-gradient p-1">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={520}
          height={480}
          className="object-cover"
        />
      </div>

      <p className="mt-8 max-w-[560px] text-center text-xl text-gray-300">
        Uhuul <strong>{costumerName}</strong>, sua{" "}
        <strong>{product.name}</strong> já está a caminho da sua casa.
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
