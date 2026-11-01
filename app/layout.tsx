import type { Metadata } from "next";
import { Allan, Nata_Sans, Syncopate } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
    variable: "--font-syncopate",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const nataSans = Nata_Sans({
    variable: "--font-nata-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "800"],
});

const allan = Allan({
    variable: "--font-allan",
    subsets: ["latin"],
    weight: ["700"],
});

export const metadata: Metadata = {
    title: "Doze Donuts",
    description:
        "Your Daily DoZe of Sweet — a little sweetness to brighten up your everyday.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${syncopate.variable} ${nataSans.variable} ${allan.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col font-sans">
                {children}
            </body>
        </html>
    );
}
