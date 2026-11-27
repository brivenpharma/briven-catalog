import { CategoriesView } from "briven-ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Categories | Briven Pharmaceutical",
  description:
    "Browse our certified WHO-GMP pharmaceutical formulations by therapeutic category.",
};

export default function CategoriesPage() {
  return <CategoriesView />;
}
