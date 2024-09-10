"use client";
import React, { useEffect } from "react";
import { Table, TableBody } from "@/components/ui/table";
import TableHeader from "./TableHeader";
import TableItemCollapsible from "./TableItemCollapsible";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import ExpandableRow from "./ExpandableRow";
import useSort from "./useSort";
import useCategorize from "./useCategorize";

const ExpandableTable = <T extends { id: string } | undefined>({
  DetailsComponent,
  items,
  columns,
  rootName,
  breadcrumbNamePath,
  itemCategoryPath,
  listOfCategories,
  defaultSortColumnId = null,
  defaultSortDirection = { direction: "asc" },
  ...props
}: ExpandableTableProps<T>) => {
  const { setBreadcrumb, setBreadcrumbNamePath } = useBreadcrumb();
  const { sortedItems, sortColumnId, sortDirection, updateSortDirection } =
    useSort(items, columns, defaultSortColumnId, defaultSortDirection);
  const categorizedItems: { [key: string]: T[] } = useCategorize(
    sortedItems,
    itemCategoryPath,
    listOfCategories
  );

  useEffect(() => {
    const handleBreadcrumbClick = () => setBreadcrumb((prev) => [prev[0]]);
    setBreadcrumbNamePath(breadcrumbNamePath);
    setBreadcrumb([
      { id: rootName, label: rootName, onClick: handleBreadcrumbClick },
    ]);
  }, [setBreadcrumb, setBreadcrumbNamePath, breadcrumbNamePath, rootName]);

  if (!items.length) throw new Error("No items to render.");

  const renderItem = (item: T, parentName: string, color: string) => (
    <TableItemCollapsible
      DetailsComponent={DetailsComponent}
      key={item!.id}
      item={item}
      columns={columns as Column<T>[]}
      parentName={parentName}
      className={`border-0 border-l-4 border-${color}`}
      {...props}
    />
  );

  return (
    <div className="relative w-full min-h-60 h-calc-lvh-5rem max-h-calc-lvh-5rem md:max-h-calc-100vh-10rem hsx:max-h-screen hsx:min-h-72 overflow-x-auto">
      <Table>
        <TableHeader
          sortColumnId={sortColumnId}
          setSortColumnId={updateSortDirection}
          sortDirection={sortDirection}
          columns={columns}
        />
        <TableBody>
          {listOfCategories.map((category) => (
            <ExpandableRow
              key={category.name}
              id={category.name}
              colSpan={columns.length}
              parentName={rootName}
              itemsCount={categorizedItems[category.name]?.length || 0}
              className={`border-0 border-t-0 border-l-4 border-${category.color}`}
            >
              <React.Fragment key={category.name}>
                {categorizedItems[category.name]?.map((item) =>
                  renderItem(item, category.name, category.color)
                )}
              </React.Fragment>
            </ExpandableRow>
          ))}
          {categorizedItems.otherItems?.map((item) =>
            renderItem(item, rootName, "#808080")
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpandableTable;
