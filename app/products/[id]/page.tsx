interface MetadataProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: MetadataProps) {
  return {
    title: `Produto ${params.id}`,
    description: "salve",
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Produto {id}</h1>
    </div>
  );
}
