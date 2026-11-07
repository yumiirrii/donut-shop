"use client";

import { useMemo, useState } from "react";
import { MenuItem } from "@/components/menu-item";
import {
    categoryLabels,
    menuCategories,
    menuProducts,
    type MenuCategory,
} from "@/lib/menu-products";

// function chunk<T>(items: T[], size: number): T[][] {
//     const rows: T[][] = [];
//     for (let i = 0; i < items.length; i += size) {
//         rows.push(items.slice(i, i + size));
//     }
//     return rows;
// }

export function MenuCatalog() {
    const [category, setCategory] = useState<MenuCategory>("all");

    const products = useMemo(
        () =>
            category === "all"
                ? menuProducts
                : menuProducts.filter(
                      (product) => product.category === category,
                  ),
        [category],
    );

    return (
        <>
            <section className="flex w-full flex-col items-center justify-center gap-7 overflow-clip py-4 leading-normal">
                <h1 className="font-display text-xl font-normal text-navy">
                    Menu
                </h1>
                <div className="flex w-full items-center justify-center gap-x-5 gap-y-3 text-xs tracking-[0.56px] sm:gap-x-10 sm:text-sm lg:gap-14">
                    {menuCategories.map((id) => {
                        const isActive = category === id;
                        return (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setCategory(id)}
                                className={`cursor-pointer 
                                  ${
                                      isActive
                                          ? "font-extrabold text-accent-purple"
                                          : "font-medium text-black transition-opacity hover:opacity-60"
                                  }`}
                            >
                                {categoryLabels[id]}
                            </button>
                        );
                    })}
                </div>
            </section>

            <div className="w-full mx-auto max-w-[1092px] mt-8">
                <div className="flex w-full flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-12">
                    {products.map((product) => (
                        <MenuItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
}
