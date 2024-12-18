import { NextRequest, NextResponse } from "next/server";

import { CartItem } from "@/app/context/cart";
import { stripe } from "@/app/lib/stripe";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { cartItems } = data;

  if (!cartItems) {
    return NextResponse.json({ message: "Price not found" }, { status: 400 });
  }

  const lineItems = cartItems.map((item: CartItem) => ({
    price: item.defaultPriceId,
    quantity: item.quantity,
  }));

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
  });

  return NextResponse.json(
    { checkoutUrl: checkoutSession.url },
    { status: 201 },
  );
}
