"use client";

import { useMemo, useState } from "react";
import { MenuItem } from "@/components/menu-item";
import {
    categoryLabels,
    menuCategories,
    menuProducts,
    type MenuCategory,
} from "@/lib/menu-products";

function chunk<T>(items: T[], size: number): T[][] {
    const rows: T[][] = [];
    for (let i = 0; i < items.length; i += size) {
        rows.push(items.slice(i, i + size));
    }
    return rows;
}

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
            <section className="flex w-full flex-col items-center justify-center gap-7 overflow-clip py-4 leading-normal whitespace-nowrap">
                <h1 className="font-display text-xl font-normal text-navy">
                    Menu
                </h1>
                <div className="flex w-full items-center justify-center gap-14 text-sm tracking-[0.56px]">
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

            <div className="flex w-full flex-col items-center gap-12">
                {chunk(products, 4).map((row) => (
                    <div
                        key={row.map((product) => product.id).join("-")}
                        className="flex items-center justify-center gap-6"
                    >
                        {row.map((product) => (
                            <MenuItem key={product.id} product={product} />
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
