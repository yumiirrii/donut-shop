import Link from "next/link";

const navItems = [
    { label: "Top", href: "/" },
    { label: "Menu", href: "" },
    { label: "Cart", href: "" },
] as const;

export function Header() {
    return (
        <header className="relative z-10 flex h-20 w-full items-center gap-[120px] overflow-clip whitespace-nowrap">
            <Link
                href="/"
                className="shrink-0 font-display text-2xl font-bold leading-none text-navy transition-colors hover:text-accent-purple"
            >
                Do<span className="text-accent-purple">z</span> Donuts
            </Link>
            <nav className="hidden sm:flex items-center gap-16 font-sans text-sm font-medium tracking-[0.56px] text-black">
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="transition-opacity hover:opacity-60"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
