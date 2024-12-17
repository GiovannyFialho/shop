import { redirect } from "next/navigation";
import Stripe from "stripe";

import { stripe } from "@/app/lib/stripe";

import { SuccessContent } from "@/app/components/SuccessContent";
interface SuccessPageProps {
  searchParams: { session_id?: string };
}

export default async function Success({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return (
    <SuccessContent
      costumerName={costumerName}
      product={{
        name: product.name,
        imageUrl: product.images[0],
      }}
    />
  );
}
