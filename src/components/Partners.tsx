"use client";
import Image from "next/image";

export function Partners() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 pb-16 pt-4">
      <Image
        src="/logo-dark.png"
        alt=""
        width={1000}
        height={200}
        quality={100}
        className="h-max w-11/12 object-contain xl:h-20 xl:w-max"
      />
      <span className="flex flex-col items-center gap-1 px-4 text-center font-semibold lg:flex-row lg:text-xl">
        Transformando a rotina jurídica de mais de 1.000 escritórios em todo o
        Brasil.
      </span>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-1/2 lg:flex-row">
        <Image
          src="/instagram.svg"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="hover:animate-shake h-10 w-max cursor-pointer object-contain"
          onClick={() =>
            window.open("https://www.instagram.com/juridia.adv/", "_blank")
          }
        />
        <Image
          src="/facebook.svg"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="hover:animate-shake h-10 w-max cursor-pointer object-contain"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=61552119535431",
              "_blank",
            )
          }
        />
        <Image
          src="/whatsapp.svg"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="hover:animate-shake h-10 w-max cursor-pointer object-contain"
        />
        <Image
          src="/linkedin.svg"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="hover:animate-shake h-10 w-max cursor-pointer object-contain"
        />
        <Image
          src="/youtube.svg"
          alt=""
          width={500}
          height={200}
          quality={100}
          className="hover:animate-shake h-10 w-max cursor-pointer object-contain"
          onClick={() =>
            window.open(
              "https://www.youtube.com/@JuridInteligenciaArtificial",
              "_blank",
            )
          }
        />
      </div>
    </div>
  );
}
