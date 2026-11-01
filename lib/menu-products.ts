export const menuCategories = ["all", "seasonal", "originals"] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuProduct = {
  id: string;
  name: string;
  price: string;
  description: string;
  category: Exclude<MenuCategory, "all">;
};

const description =
  "Texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttex";

export const menuProducts: MenuProduct[] = [
  { id: "1", name: "Product Name", price: "¥ 300", description, category: "seasonal" },
  { id: "2", name: "Product Name", price: "¥ 300", description, category: "originals" },
  { id: "3", name: "Product Name", price: "¥ 300", description, category: "seasonal" },
  { id: "4", name: "Product Name", price: "¥ 300", description, category: "originals" },
  { id: "5", name: "Product Name", price: "¥ 300", description, category: "seasonal" },
  { id: "6", name: "Product Name", price: "¥ 300", description, category: "originals" },
  { id: "7", name: "Product Name", price: "¥ 300", description, category: "seasonal" },
  { id: "8", name: "Product Name", price: "¥ 300", description, category: "originals" },
];

export const categoryLabels: Record<MenuCategory, string> = {
  all: "All",
  seasonal: "Seasonal",
  originals: "Originals",
};
