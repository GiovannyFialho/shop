import { Product } from "@/app/components/Product";

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

  return <Product id={id} />;
}
