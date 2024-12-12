export async function generateMetadata() {
  return {
    title: `Produtos`,
    description: "Lista de produtos",
  };
}

export default function Product() {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Produtos</h1>
    </div>
  );
}
