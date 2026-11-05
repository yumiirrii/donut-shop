import Image from "next/image";
import type { MenuProduct } from "@/lib/menu-products";

type MenuItemProps = {
    product: MenuProduct;
};

export function MenuItem({ product }: MenuItemProps) {
    return (
        <article className="flex flex-col items-end gap-2">
            <div className="peer group flex items-center overflow-clip rounded-[24px] bg-white/25 px-6 py-5 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-[padding] duration-300 hover:px-10 hover:py-8">
                <div className="flex w-[207px] shrink-0 flex-col items-start gap-2">
                    <div className="relative flex size-[200px] items-center justify-center">
                        <div className="relative size-[200px] -rotate-90">
                            <Image
                                src="/images/donut-menu.png"
                                alt=""
                                fill
                                className="object-cover"
                                sizes="200px"
                            />
                        </div>
                    </div>
                    <p className="w-full font-sans text-base font-semibold tracking-[0.64px] text-black [overflow-wrap:anywhere]">
                        {product.name}
                    </p>
                    <p className="w-full font-sans text-sm font-normal tracking-[0.56px] text-black [overflow-wrap:anywhere]">
                        {product.price}
                    </p>
                    <p className="hidden w-full font-sans text-sm font-normal tracking-[0.56px] text-black [overflow-wrap:anywhere] group-hover:block">
                        {product.description}
                    </p>
                </div>
            </div>
            <button
                type="button"
                className="flex shrink-0 flex-col items-center justify-center overflow-clip rounded-[32px] bg-accent-purple px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] cursor-pointer peer-hover:hidden"
            >
                <span className="flex items-center gap-2">
                    <Image
                        src="/images/shopping-cart-menu.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                    />
                    <span className="whitespace-nowrap font-sans text-sm font-semibold tracking-[0.56px] text-white">
                        Add to Cart
                    </span>
                </span>
            </button>
        </article>
    );
}
