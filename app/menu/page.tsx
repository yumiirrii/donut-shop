import Image from "next/image";
import { Header } from "@/components/header";
import { MenuCatalog } from "@/components/menu-catalog";

export default function MenuPage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 bg-background px-24 pb-[72px]">
      <Header />
      <MenuCatalog />

      <div className="pointer-events-none absolute top-20 left-[1091px] flex size-20 items-center justify-center">
        <div className="relative size-20 -scale-y-100 rotate-180">
          <Image
            src="/images/star-menu.png"
            alt=""
            fill
            className="object-cover"
            sizes="80px"
            aria-hidden
          />
        </div>
      </div>
      <div className="pointer-events-none absolute top-[143px] left-[991px] size-[68px]">
        <Image
          src="/images/star-menu.png"
          alt=""
          fill
          className="object-cover"
          sizes="68px"
          aria-hidden
        />
      </div>
    </div>
  );
}
