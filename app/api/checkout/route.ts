import { NextRequest, NextResponse } from "next/server";

import { stripe } from "@/app/lib/stripe";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { priceId } = data;

  if (!priceId) {
    return NextResponse.json({ message: "Price not found" }, { status: 400 });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_URL}/success`,
    cancel_url: `${process.env.NEXT_URL}/`,
  });

  return NextResponse.json(
    { checkoutUrl: checkoutSession.url },
    { status: 201 },
  );
}
