import React from "react";
import { TableCell, TableRow as ShadcnTableRow } from "@/components/ui/table";
const TableRow = React.forwardRef(function TableRow<T>(
  { item, columns, className, onClick }: TableRowProps<T>,
  ref: React.Ref<HTMLTableRowElement>
) {
  const handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <ShadcnTableRow className={className} onClick={handleClick}>
      {columns.map((column, colIndex) => (
        <TableCell key={colIndex} className={`${column.className} min-h-24`}>
          <div className="line-clamp-4">{column.accessor(item)}</div>
        </TableCell>
      ))}
    </ShadcnTableRow>
  );
});

export default TableRow;
