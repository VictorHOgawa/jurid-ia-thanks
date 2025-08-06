"use client";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function Projects() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="mx-auto flex h-screen w-11/12 flex-col items-center gap-4 py-4 text-primary lg:gap-8 lg:py-8">
      <Image
        src="/logo-primary.png"
        alt=""
        width={500}
        height={200}
        quality={100}
        className="h-max w-11/12 object-contain xl:h-20 xl:w-max"
      />
      <div ref={ref1} className="flex flex-col items-center gap-4">
        <span
          className={twMerge(
            "-translate-x-20 text-2xl font-semibold opacity-0 transition delay-300 duration-1000 lg:text-4xl",
            isVisible1.isIntersecting && "translate-x-0 opacity-100",
          )}
        >
          Veja como o Jurid.IA transforma a Advocacia
        </span>
        <span
          className={twMerge(
            "translate-x-20 opacity-0 transition delay-300 duration-1000 lg:w-1/2 lg:text-center lg:text-xl",
            isVisible1.isIntersecting && "translate-x-0 opacity-100",
          )}
        >
          Veja como nossa solução otimiza a rotina dos advogados, acelera
          processos e aumenta a produtividade
        </span>
      </div>
      <div className="grid h-full w-full grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-3 flex items-center justify-center rounded-3xl bg-opacity-30 bg-[url('/project-1.jpg')] bg-cover bg-center bg-no-repeat lg:col-span-1" />
        <div className="col-span-3 flex items-center justify-center rounded-3xl bg-opacity-30 bg-[url('/project-3.jpg')] bg-cover bg-center bg-no-repeat lg:col-span-1" />
        <div className="col-span-3 flex items-center justify-center rounded-3xl bg-opacity-30 bg-[url('/project-2.jpg')] bg-cover bg-center bg-no-repeat lg:col-span-1" />
      </div>
      <button
        // onClick={() => window.open("whatsappnumber", "_blank")}
        className="rounded-3xl border border-primary bg-primary px-8 py-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-[1] hover:bg-transparent hover:text-primary lg:w-max"
      >
        Conheça Como Simplificar Sua Advocacia
      </button>
    </div>
  );
}
