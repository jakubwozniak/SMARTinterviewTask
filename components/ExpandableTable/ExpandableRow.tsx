import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { TableCell, TableRow } from "../ui/table";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import { ChevronDown } from "lucide-react";

const ExpandableRow = ({
  id,
  colSpan,
  parentName,
  className,
  itemsCount,
  children,
}: ExpandableRowProps) => {
  const {
    breadcrumbIds,
    setBreadcrumb,
    addBreadcrumbItem,
    removeAllBreadcrumbItemChilds,
  } = useBreadcrumb();
  const handleTriggerClick = (id: string) => {
    const isIdOpen = breadcrumbIds.includes(id);

    removeAllBreadcrumbItemChilds(parentName);

    if (!isIdOpen)
      addBreadcrumbItem({
        id: id,
        label: id,
        onClick: () => removeAllBreadcrumbItemChilds(id),
      });
  };

  return (
    <Collapsible key={id} asChild open={breadcrumbIds.includes(id)}>
      <>
        <CollapsibleTrigger asChild onClick={() => handleTriggerClick(id)}>
          <TableRow
            className={`${className} [&[data-state=open]>td>div>.chevronAnimated]:rotate-180 `}
          >
            <TableCell colSpan={colSpan}>
              <div className="flex">
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 mr-1 chevronAnimated" />
                {id} ({itemsCount})
              </div>
            </TableCell>
          </TableRow>
        </CollapsibleTrigger>
        <CollapsibleContent asChild>{children}</CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default ExpandableRow;
