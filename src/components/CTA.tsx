"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function CTA() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useOnScreen(ref2);

  return (
    <div className="flex h-[80vh] w-full flex-col lg:flex-row">
      <div className="relative flex h-1/2 w-full flex-col items-center justify-center overflow-hidden rounded-r-3xl text-white lg:h-full lg:w-1/2">
        <video
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="/video3.mp4"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-secondary/70" />
        <div className="z-20 mx-auto flex h-full w-3/4 flex-col justify-center gap-8 py-2">
          <span
            ref={ref1}
            className={twMerge(
              "-translate-x-full text-3xl font-semibold opacity-0 transition delay-300 duration-1000 lg:text-4xl",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Aproveite a Inteligência Artificial do JuridIA
          </span>
          <div
            className={twMerge(
              "flex translate-y-20 flex-col gap-4 opacity-0 transition delay-300 duration-1000",
              isVisible1.isIntersecting && "translate-y-0 opacity-100",
            )}
          >
            <span className="lg:text-xl">
              Libere seu potencial jurídico com uma IA que otimiza tarefas e
              acelera processos de forma prática e eficiente.
            </span>
            <button
              onClick={() =>
                window.open(
                  "https://app.juridia.com.br/sign-in?register",
                  "_blank",
                )
              }
              className="w-max rounded-xl border border-white bg-white px-8 py-4 font-semibold text-secondary transition duration-200 hover:-translate-y-0.5 hover:scale-[1] hover:bg-secondary hover:text-white"
            >
              Utilizar Agora
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-white text-secondary lg:h-full lg:w-1/2">
        <div className="mx-auto flex h-full w-3/4 flex-col justify-center gap-8 py-2">
          <span
            ref={ref2}
            className={twMerge(
              "translate-x-full text-3xl font-semibold opacity-0 transition delay-300 duration-1000 lg:text-4xl",
              isVisible2.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            Quer Acessar Sua Solução Jurídica Agora?
          </span>
          <div
            className={twMerge(
              "flex translate-y-20 flex-col gap-4 opacity-0 transition delay-300 duration-1000",
              isVisible1.isIntersecting && "translate-y-0 opacity-100",
            )}
          >
            <span className="lg:text-xl">
              Clique abaixo para conhecer como o Júri de A pode transformar sua
              rotina jurídica e aumentar sua produtividade.
            </span>
            <button
              // onClick={() => window.open("whatsappnumber", "_blank")}
              className="w-max rounded-xl border border-secondary bg-secondary px-8 py-4 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:scale-[1] hover:bg-white hover:text-secondary"
            >
              Converse com nosso time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
