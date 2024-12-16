import Stripe from "stripe";

import { HomeListProducts } from "@/app/components/HomeListProducts";
import { stripe } from "@/app/lib/stripe";

export default async function Home() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
    };
  });

  return <HomeListProducts products={products} />;
}
