import Image from "next/image";
import { Header } from "@/components/header";
import { LinkButton } from "@/components/link-button";
import { SeasonalCard } from "@/components/seasonal-card";

export default function Home() {
    return (
        // <div className="relative mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[68px] overflow-hidden bg-background px-24 pb-[72px]">
        <div className="relative mx-auto flex w-full max-w-[1176px] flex-col items-start gap-10 overflow-hidden bg-background px-5 pb-12 sm:px-8 sm:gap-12 lg:gap-[68px] lg:px-24 lg:pb-[72px]">
            {/* Hero donut column — top */}
            <div className="pointer-events-none absolute top-0 left-[652px] h-[741px] w-[529px] animate-fade-in hidden lg:block">
                <Image
                    src="/images/donut-hero.png"
                    alt="Stacked Doz Donuts"
                    fill
                    priority
                    className="object-cover"
                    sizes="529px"
                />
            </div>

            {/* Hero donut column — bottom (mirrored) */}
            <div className="pointer-events-none absolute top-[689px] left-[652px] flex h-[741px] w-[529px] items-center justify-center animate-fade-in hidden lg:block">
                <div className="h-[741px] w-[529px] -scale-y-100 rotate-180">
                    <div className="relative h-full w-full">
                        <Image
                            src="/images/donut-hero.png"
                            alt=""
                            fill
                            className="object-cover"
                            sizes="529px"
                            aria-hidden
                        />
                    </div>
                </div>
            </div>

            {/* Decorative stars */}
            <div className="pointer-events-none absolute top-20 left-[34px] size-20 animate-float-soft">
                <Image
                    src="/images/star.png"
                    alt=""
                    fill
                    className="object-cover animate-twinkle"
                    sizes="80px"
                    aria-hidden
                />
            </div>
            <div className="pointer-events-none absolute top-[383px] left-[508px] flex size-[68px] items-center justify-center animate-float-soft-delayed">
                <div className="relative size-[68px] -scale-y-100 rotate-180">
                    <Image
                        src="/images/star.png"
                        alt=""
                        fill
                        className="object-cover animate-twinkle"
                        sizes="68px"
                        aria-hidden
                    />
                </div>
            </div>

            <Header />

            <section className="relative z-10 flex w-full max-w-[893px] flex-col items-start gap-6">
                <h1 className="animate-fade-up w-full font-display text-[64px] leading-none font-bold text-navy">
                    <span className="block">
                        Your Daily Do
                        <span className="text-accent-purple">s</span>e
                    </span>
                    <span className="block">of Sweet</span>
                </h1>
                <p className="animate-fade-up-delayed font-display text-[36px] leading-normal tracking-[1.44px] text-body">
                    <span className="block">A little sweetness to </span>
                    <span className="block">brighten up </span>
                    <span className="block">your everyday</span>
                </p>
            </section>

            {/* <div className="relative z-10 flex flex-col items-center gap-6"> */}
            <div className="relative z-10 flex w-full min-w-0 flex-col items-center gap-6 lg:items-start">
                <SeasonalCard />
                {/* <div className="flex gap-6"> */}
                <div className="flex w-full min-w-0 items-center justify-center gap-3 sm:gap-6 lg:w-auto">
                    <LinkButton variant="Menu" />
                    <LinkButton variant="Cart" />
                </div>
            </div>
        </div>
    );
}
