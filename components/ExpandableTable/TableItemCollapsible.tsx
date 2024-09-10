import React from "react";

import TableRow from "./TableRow";
import { TableRow as ShadcnTableRow, TableCell } from "@/components/ui/table";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import { getPropertyByPath } from "@/lib/utils";
const TableItemCollapsible = <T extends { id: number } | undefined>({
  DetailsComponent,
  item,
  columns,
  parentName,
  ...props
}: TableItemCollapsibleProps<T>) => {
  const {
    breadcrumbIds,
    breadcrumbNamePath,
    addBreadcrumbItem,
    removeAllBreadcrumbItemChilds,
  } = useBreadcrumb();
  const handleTriggerClick = (id: string, title: string) => {
    const isIdOpen = breadcrumbIds.includes(id);

    removeAllBreadcrumbItemChilds(parentName);

    if (!isIdOpen)
      addBreadcrumbItem({
        id: id,
        label: title,
        onClick: () => null,
      });
  };

  return (
    <TableRow
      className={props.className}
      item={item}
      columns={columns as Column<unknown>[]}
    />
  );
};

export default TableItemCollapsible;
