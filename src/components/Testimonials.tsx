"use client";
import { Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOnScreen from "../utils/IsOnScreen";

export function Testimonials() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useOnScreen(ref1);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center lg:h-screen">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-[url('/testimonials-bg.jpg')] bg-cover bg-center bg-no-repeat shadow-primary">
        <div className="absolute h-full w-full bg-primary/70" />
        <div className="z-10 mx-auto flex h-full w-11/12 flex-col gap-8 py-8 text-white">
          <div
            ref={ref1}
            className={twMerge(
              "flex -translate-x-20 flex-col gap-8 text-white opacity-0 transition delay-300 duration-700",
              isVisible1.isIntersecting && "translate-x-0 opacity-100",
            )}
          >
            <span className="text-xl font-semibold lg:text-4xl">
              O Que os Advogados Estão Dizendo:
            </span>
            <span className="text-sm lg:w-1/3 lg:text-xl">
              Uma revolução na prática jurídica. O Jurid.IA transforma tarefas
              complexas em soluções rápidas, economizando tempo e aumentando a
              produtividade dos advogados.
            </span>
          </div>
          <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-2 border-primary lg:h-3/5 lg:flex-row">
            <div className="flex h-72 w-full items-center justify-center border-r border-primary bg-white lg:h-full lg:w-[48%]">
              <div className="rounded-full bg-primary/50 p-2">
                <Play className="text-white" size={24} />
              </div>
            </div>
            <div className="flex h-2/3 w-full flex-col justify-center gap-4 border-l border-primary bg-white/80 p-4 text-primary lg:h-full lg:w-[52%] lg:gap-8 lg:p-8">
              <Image
                src="/logo-primary.png"
                alt=""
                width={500}
                height={200}
                quality={100}
                className="h-max w-11/12 object-contain xl:h-20 xl:w-max"
              />
              <span className="w-11/12 text-sm lg:text-xl">
                “O Jurid.IA transformou minha rotina. Agora, consigo concluir
                tarefas jurídicas em minutos, ganhando tempo para focar no que
                realmente importa: os meus clientes.”
              </span>
              <div className="flex flex-col">
                <span className="font-semibold lg:text-2xl">
                  Dr. Pedro Savordelli
                </span>
                <span className="text-sm lg:text-xl">Sócio Proprietário</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
