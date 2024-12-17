"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";

interface HomeListProductsProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string | number;
  }[];
}

export function HomeListProducts({ products }: HomeListProductsProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  return (
    <main
      ref={sliderRef}
      className="keen-slider ml-auto flex min-h-[400px] max-w-[calc(100vw-((100vw-1180px)/2))]"
    >
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="keen-slider__slide group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-custom-gradient"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover"
          />

          <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <strong className="text-lg">{product.name}</strong>
            <span className="text-xl font-bold text-green-300">
              {product.price}
            </span>
          </footer>
        </Link>
      ))}
    </main>
  );
}
