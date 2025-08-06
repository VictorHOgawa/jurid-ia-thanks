import Image from "next/image";

export function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-4 bg-white px-8 pb-4 text-primary lg:h-32 lg:flex-row">
      <Image
        src="/logo-dark.png"
        alt=""
        width={500}
        height={200}
        quality={100}
        className="h-max w-11/12 object-contain xl:h-20 xl:w-max"
      />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        Copyright © 2025
      </span>
      <Image
        src="/logoEx.png"
        alt=""
        width={500}
        height={500}
        className="h-max w-11/12 object-contain xl:h-20 xl:w-max"
      />
    </div>
  );
}
