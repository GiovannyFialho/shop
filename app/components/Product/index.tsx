"use client";

interface ProductProps {
  id: string;
}

export function Product({ id }: ProductProps) {
  return (
    <main className="mx-auto my-0 grid max-w-[1180px] grid-cols-2 items-stretch gap-16 pb-8">
      <div className="flex h-[calc(600px-0.5rem)] w-full max-w-[576px] items-center justify-center rounded-lg bg-custom-gradient p-1"></div>

      <div className="flex flex-col">
        <h1 className="text-2xl text-gray-300">Camiseta {id}</h1>
        <span className="mt-4 block text-2xl text-green-300">R$ 80,00</span>

        <p className="mt-10 text-base text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vitae
          dicta quas consequatur repellat laudantium, iusto vero! Atque
          repellat, tempora fugiat accusantium, temporibus qui quisquam minus
          odio laborum, perferendis fugit!
        </p>

        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 text-base font-bold text-white transition-all duration-300 hover:bg-green-700">
          Comprar agora
        </button>
      </div>
    </main>
  );
}
