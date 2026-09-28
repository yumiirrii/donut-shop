import Image from "next/image";
import Link from "next/link";

type LinkButtonProps = {
  variant?: "Menu" | "Cart";
};

const variants = {
  Menu: {
    href: "/menu",
    label: "Menu",
    icon: "/images/donut-icon.svg",
    widthClass: "w-[400px]",
  },
  Cart: {
    href: "/cart",
    label: "Cart",
    icon: "/images/shopping-cart.svg",
    widthClass: "w-[180px]",
  },
} as const;

export function LinkButton({ variant = "Menu" }: LinkButtonProps) {
  const { href, label, icon, widthClass } = variants[variant];

  return (
    <Link
      href={href}
      className={`group relative flex ${widthClass} shrink-0 flex-col items-center overflow-clip rounded-[24px] border border-white/70 bg-white/35 py-12 shadow-[0px_4px_2px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1`}
    >
      <div className="flex w-full flex-col items-center gap-3">
        <Image
          src={icon}
          alt=""
          width={48}
          height={48}
          className="size-12 transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        <span className="w-full text-center font-display text-xl tracking-[0.8px] text-black">
          {label}
        </span>
      </div>
    </Link>
  );
}
