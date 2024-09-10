import { getPropertyByPath } from "@/lib/utils";
import { useMemo } from "react";

const useCategorize = <T>(
  items: T[],
  itemCategoryPath: string,
  listOfCategories: Category[]
) => {
  return useMemo(() => {
    const categoryItems: { [key: string]: T[] } = {};
    const otherItems: T[] = [];

    listOfCategories.forEach((category) => {
      categoryItems[category.name] = [];
    });

    items.forEach((item) => {
      const categories = getPropertyByPath(item, itemCategoryPath) as string[];
      if (!Array.isArray(categories)) return;

      let categorized = false;

      categories.forEach((categoryName) => {
        const matchingCategory = listOfCategories.find(
          (category) => category.name === categoryName
        );
        if (matchingCategory) {
          categoryItems[matchingCategory.name].push(item);
          categorized = true;
        }
      });

      if (!categorized) {
        otherItems.push(item);
      }
    });

    return { ...categoryItems, otherItems };
  }, [items, itemCategoryPath, listOfCategories]);
};

export default useCategorize;
