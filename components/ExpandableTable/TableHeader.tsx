import React from "react";
import {
  TableHead,
  TableHeader as ShadcnTableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { ArrowDownUp, ArrowUpDown } from "lucide-react";
const TableHeader = <T,>({
  columns,
  setSortColumnId,
  sortColumnId,
  sortDirection,
}: TableHeaderProps<T>) => {
  return (
    <ShadcnTableHeader className="sticky top-[-1px] bg-card z-10">
      <TableRow className="sticky">
        {columns.map((column, index) => {
          return (
            <TableHead
              key={index}
              onClick={() => setSortColumnId(index)}
              className={cn(
                `${column.className} cursor-pointer text-muted-foreground`,
                {
                  "relative left-2": index !== columns.length - 1,
                  "text-neutral-700 font-semibold": index === sortColumnId,
                }
              )}
            >
              <div className="flex items-center min-w-36">
                <span className="pr-1">{column.header}</span>
                {index === sortColumnId ? (
                  sortDirection.direction === "asc" ? (
                    <ArrowUpDown size={15} />
                  ) : (
                    <ArrowDownUp size={15} />
                  )
                ) : null}
              </div>
            </TableHead>
          );
        })}
      </TableRow>
    </ShadcnTableHeader>
  );
};

export default TableHeader;
