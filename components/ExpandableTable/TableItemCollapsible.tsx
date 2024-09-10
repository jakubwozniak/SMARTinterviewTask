import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import TableRow from "./TableRow";
import { TableRow as ShadcnTableRow, TableCell } from "@/components/ui/table";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import { getPropertyByPath } from "@/lib/utils";
const TableItemCollapsible = <T extends { id: string } | undefined>({
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
    <Collapsible key={item!.id} asChild open={breadcrumbIds.includes(item!.id)}>
      <>
        <CollapsibleTrigger
          asChild
          onClick={() =>
            handleTriggerClick(
              item!.id,
              getPropertyByPath(item, breadcrumbNamePath)
            )
          }
        >
          <TableRow
            className={props.className}
            item={item}
            columns={columns as Column<unknown>[]}
          />
        </CollapsibleTrigger>
        <CollapsibleContent asChild>
          <ShadcnTableRow className={props.className}>
            <TableCell colSpan={columns.length} className="bg-slate-50 py-12">
              <DetailsComponent item={item} {...props} />
            </TableCell>
          </ShadcnTableRow>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default TableItemCollapsible;
