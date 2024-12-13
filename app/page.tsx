"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import Shirt1 from "@/app/assets/images/products/1camiseta.png";
import Shirt2 from "@/app/assets/images/products/2camiseta.png";
import Shirt3 from "@/app/assets/images/products/3camiseta.png";
import Shirt4 from "@/app/assets/images/products/4camiseta.png";

export default function Home() {
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
      <a
        href="#"
        className="keen-slider__slide bg-custom-gradient group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
      >
        <Image
          src={Shirt1}
          width={401}
          height={401}
          alt=""
          className="object-cover"
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Camiseta 1</strong>
          <span className="text-xl font-bold text-green-300">R$79,90</span>
        </footer>
      </a>

      <a
        href="#"
        className="keen-slider__slide bg-custom-gradient group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
      >
        <Image
          src={Shirt2}
          width={401}
          height={401}
          alt=""
          className="object-cover"
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Camiseta 2</strong>
          <span className="text-xl font-bold text-green-300">R$79,90</span>
        </footer>
      </a>

      <a
        href="#"
        className="keen-slider__slide bg-custom-gradient group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
      >
        <Image
          src={Shirt3}
          width={401}
          height={401}
          alt=""
          className="object-cover"
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Camiseta 3</strong>
          <span className="text-xl font-bold text-green-300">R$79,90</span>
        </footer>
      </a>

      <a
        href="#"
        className="keen-slider__slide bg-custom-gradient group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
      >
        <Image
          src={Shirt4}
          width={401}
          height={401}
          alt=""
          className="object-cover"
        />

        <footer className="absolute bottom-1 left-1 right-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black bg-opacity-60 p-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <strong className="text-lg">Camiseta 4</strong>
          <span className="text-xl font-bold text-green-300">R$79,90</span>
        </footer>
      </a>
    </main>
  );
}
