import Link from "next/link";

export default function Success() {
  return (
    <div className="mx-auto my-0 flex h-full flex-col items-center">
      <h1 className="text-2xl text-gray-100">Compra efetuada</h1>

      <div className="mt-16 flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-lg bg-custom-gradient p-1"></div>

      <p className="mt-8 max-w-[560px] text-center text-xl text-gray-300">
        Uhuul <strong>Giovanny Fialho</strong>, sua{" "}
        <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua
        casa.
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
