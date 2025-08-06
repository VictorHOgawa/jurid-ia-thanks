"use client";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function Hero() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="mx-auto flex h-[calc(100vh-80px)] w-11/12 flex-col items-center justify-center">
      <div
        ref={ref1}
        className="shadow-secondary relative flex h-[90%] w-full flex-col items-center justify-center overflow-hidden rounded-3xl shadow-md"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/video2.mp4"
        />
        <div className="bg-secondary/70 absolute h-full w-full" />
        <div className="z-10 flex flex-col items-center justify-center gap-8 px-4 text-center text-white lg:w-2/3 lg:px-0">
          <span
            className={twMerge(
              "-translate-x-20 text-xl font-semibold leading-normal opacity-0 transition delay-[250ms] duration-[600ms] lg:text-4xl",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Transformando a Advocacia com Inteligência Artificial
          </span>
          <span
            className={twMerge(
              "opacity-0 transition delay-500 duration-[600ms] lg:text-xl xl:w-1/2",
              isVisible1.isIntersecting && "opacity-100",
            )}
          >
            Mais de 1.000 advogados já utilizam nossa IA para otimizar tarefas
            jurídicas e economizar horas de trabalho, tudo em questão de
            minutos.
          </span>
          <div
            className={twMerge(
              "flex flex-col items-center gap-4 opacity-0 transition delay-700 duration-[600ms] lg:flex-row",
              isVisible1.isIntersecting && "opacity-100",
            )}
          >
            <button className="flex items-center gap-2 rounded-xl border bg-white p-4 font-semibold text-primary transition duration-200 hover:-translate-y-0.5 hover:scale-[1] hover:border-white hover:bg-transparent hover:text-white">
              Acesse o Jurid.IA Agora
              <ArrowRight />
            </button>
            <button className="rounded-xl border bg-transparent p-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-[1] hover:border-primary hover:bg-white hover:text-primary">
              Tire suas Dúvidas no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
