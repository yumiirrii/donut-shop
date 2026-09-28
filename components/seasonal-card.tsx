import Image from "next/image";
import Link from "next/link";

const seasonalItems = [
  { id: 1, name: "Product Name", price: "¥300" },
  { id: 2, name: "Product Name", price: "¥300" },
] as const;

export function SeasonalCard() {
  return (
    <section
      className="relative flex w-[600px] shrink-0 items-center overflow-clip rounded-[24px] border border-white/60 py-12 pr-12 pl-[60px] shadow-[0_8px_32px_rgba(17,44,78,0.06)] backdrop-blur-md"
      style={{
        backgroundImage:
          "linear-gradient(104.68deg, rgba(151, 4, 249, 0.1) 0%, rgba(126, 225, 255, 0.1) 100%)",
      }}
    >
      <div className="flex min-w-0 flex-1 flex-col items-start gap-8">
        <h2 className="font-display text-xl tracking-[0.8px] text-black">
          Seasonal Picks
        </h2>

        <div className="flex w-full flex-col items-start">
          {seasonalItems.map((item) => (
            <div key={item.id} className="flex w-full items-center">
              <div className="relative size-[200px] shrink-0">
                <Image
                  src="/images/donut-crumb.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
              <div className="flex shrink-0 flex-col items-start gap-3 px-6 leading-normal">
                <p className="w-full font-accent text-2xl tracking-[0.96px] text-accent-cyan">
                  Limited Online!
                </p>
                <div className="flex w-full flex-col items-start gap-2 text-black">
                  <p className="whitespace-nowrap font-sans text-xl font-semibold tracking-[0.8px]">
                    {item.name}
                  </p>
                  <p className="font-sans text-lg font-normal tracking-[0.72px]">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-end">
          <Link
            href="/menu"
            className="shrink-0 overflow-clip rounded-[32px] px-8 py-5 text-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02]"
            style={{
              backgroundImage:
                "linear-gradient(140.55deg, rgba(151, 4, 249, 0.8) 0%, rgba(126, 225, 255, 0.8) 100%)",
            }}
          >
            <span className="whitespace-nowrap font-sans text-base font-semibold tracking-[0.64px]">
              Seasonal Donuts Menu →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
