"use client";
import Image from "next/image";
import CountUp from "react-countup";

export function Results() {
  return (
    <div className="mx-auto flex h-full w-11/12 flex-col gap-8 pb-16 pt-8 lg:h-[120vh] 2xl:h-screen">
      <div className="flex flex-col items-center justify-center gap-4 text-primary">
        <Image
          src="/logo-primary.png"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="h-max w-11/12 object-contain xl:h-20 xl:w-max"
        />
        <span className="text-3xl font-semibold xl:text-4xl">
          Resultados em Números
        </span>
        <span className="lg:text-xl">O impacto da Jurid.IA na advocacia</span>
      </div>
      <div className="flex h-full w-full flex-col justify-between gap-8 lg:flex-row">
        <div className="lg:w-1/2] relative flex h-80 w-full flex-col justify-end gap-8 overflow-hidden rounded-xl bg-[url('/results-bg.jpg')] bg-cover bg-center bg-no-repeat p-8 text-white shadow-primary lg:h-full lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 h-full w-full object-cover"
            src="/video.mp4"
          />
        </div>
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-2 lg:w-1/2 lg:gap-8">
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-zinc-100">
              <Image
                src="/result-1.svg"
                alt=""
                width={200}
                height={200}
                className="h-max w-6 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp
                  end={1000}
                  prefix="+"
                  separator="."
                  enableScrollSpy
                  scrollSpyOnce
                />
              </span>
              <span className="lg:text-xl">
                Escritórios de Advocacia Beneficiados
              </span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-zinc-100">
              <Image
                src="/result-2.svg"
                alt=""
                width={200}
                height={200}
                className="h-max w-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp end={20} prefix="+" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-xl">
                Anos de Experiência no Mercado Jurídico
              </span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-zinc-100">
              <Image
                src="/result-3.svg"
                alt=""
                width={200}
                height={200}
                className="h-max w-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp end={50} suffix="%" enableScrollSpy scrollSpyOnce />
              </span>
              <span className="lg:text-xl">
                Tempo economizado em Tarefas Repetitivas
              </span>
            </div>
          </div>
          <div className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border p-2 lg:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-zinc-100">
              <Image
                src="/result-4.svg"
                alt=""
                width={200}
                height={200}
                className="h-max w-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold lg:text-4xl">
                <CountUp
                  end={50000}
                  prefix="+"
                  enableScrollSpy
                  separator="."
                  scrollSpyOnce
                />
              </span>
              <span className="lg:text-xl">
                Documentos Criados de Forma Inteligente
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
