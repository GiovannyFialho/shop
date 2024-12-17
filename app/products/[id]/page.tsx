import Stripe from "stripe";

import { stripe } from "@/app/lib/stripe";

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

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return (
    <Product
      product={{
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0],
        price: price.unit_amount
          ? new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price.unit_amount / 100)
          : 0,
      }}
    />
  );
}
