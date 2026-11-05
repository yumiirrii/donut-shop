import { Header } from "@/components/header";
import { MenuCatalog } from "@/components/menu-catalog";

export default function MenuPage() {
    return (
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 bg-background px-24 pb-[72px]">
            <Header />
            <MenuCatalog />
        </div>
    );
}
