import { Header } from "@/components/header";
import { MenuCatalog } from "@/components/menu-catalog";

export default function MenuPage() {
    return (
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 bg-background pb-[72px]">
            <div className="mx-auto w-full max-w-[1176px] px-5 sm:px-8 lg:px-24">
                <Header />
            </div>

            <div className="w-full px-12">
                <MenuCatalog />
            </div>
        </div>
    );
}
