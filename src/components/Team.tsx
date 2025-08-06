"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function Team() {
  const slides = [
    {
      id: "1",
      name: "Pedro Savordelli",
      photo: "/pedro.jpg",
    },
    {
      id: "2",
      name: "Gustavo Savordelli",
      photo: "/gustavo.jpg",
    },
    {
      id: "3",
      name: "João Stel",
      photo: "/joao.jpg",
    },
    {
      id: "4",
      name: "Gabriel Antônio",
      photo: "/gabriel.jpg",
    },
    {
      id: "5",
      name: "Pedro Savordelli",
      photo: "/pedro.jpg",
    },
    {
      id: "6",
      name: "Gustavo Savordelli",
      photo: "/gustavo.jpg",
    },
    {
      id: "7",
      name: "João Stel",
      photo: "/joao.jpg",
    },
    {
      id: "8",
      name: "Gabriel Antônio",
      photo: "/gabriel.jpg",
    },
  ];

  const sliderRef = useRef<SwiperType | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as SwiperType).slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    (sliderRef.current as SwiperType).slideNext();
  }, []);

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="bg-secondary flex h-max w-full flex-col items-center justify-center">
      <div className="relative h-full w-full py-8 lg:h-3/5">
        <Swiper
          className="h-96"
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides
          loop
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onBeforeInit={(swiper) => {
            sliderRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative flex h-full w-60 items-center justify-center overflow-hidden rounded-xl bg-white/30 px-8"
            >
              <Image
                src={item.photo}
                alt=""
                width={1000}
                height={1000}
                quality={100}
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 z-10 h-full w-full bg-[radial-gradient(circle,rgba(0,0,0,0.15),rgba(40,42,59,0.25))]" />
              <div className="to-secondary/20 absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-b from-transparent backdrop-blur-[1px]" />
              <span className="z- absolute bottom-4 left-4 z-20 text-2xl font-semibold text-white">
                {item.name}
              </span>
              <Image
                src="/small-logo.png"
                alt=""
                width={200}
                height={500}
                className="absolute bottom-4 right-4 z-30 w-12 object-contain opacity-50"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={ref1}
          className="text-secondary mx-auto mt-8 flex w-11/12 items-center justify-between gap-8"
        >
          <div
            className={twMerge(
              "flex translate-y-20 flex-col text-white opacity-0 transition delay-300 duration-700",
              isVisible1.isIntersecting && "translate-y-0 opacity-100",
            )}
          >
            <span className="text-xl font-semibold lg:text-3xl">
              Conheça Nossa Equipe
            </span>
            <span className="lg:w-2/3 lg:text-xl">
              Especialistas em negócios, inovação e tecnologia, focados em
              transformar a advocacia com soluções eficientes e inovadoras.
            </span>
          </div>
          <div className="text-secondary flex items-center gap-2">
            <div className="cursor-pointer rounded-full border border-primary bg-white p-2 transition duration-200 hover:bg-opacity-50">
              <ArrowLeft size={32} onClick={handlePrev} />
            </div>
            <div className="cursor-pointer rounded-full border border-primary bg-white p-2 transition duration-200 hover:bg-opacity-50">
              <ArrowRight size={32} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
