import React from "react";
import { CardHeader, CardTitle } from "../ui/card";
import TableBreadcrumb from "./TableBreadcrumb";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const TableCardHeader = <T,>({
  columns,
  toggleColumnHiding,
}: TableCardHeaderProps<T>) => {
  return (
    <CardHeader>
      <div className="px-2 pt-2 flex text-muted-foreground">
        <TableBreadcrumb />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="ml-auto">
              <Eye className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {
              columns?.map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.header}
                    className={cn("capitalize", {
                      "text-muted-foreground": column.enableHiding,
                    })}
                    checked={!column.enableHiding}
                    IconCheckedComponent={Eye}
                    IconComponent={EyeOff}
                    onCheckedChange={() => toggleColumnHiding(column.header)}
                  >
                    <span
                      className={cn("capitalize", {
                        "text-muted-foreground": column.enableHiding,
                      })}
                    >
                      {column.header}
                    </span>
                  </DropdownMenuCheckboxItem>
                );
              })
              /*table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })*/
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
  );
};

export default TableCardHeader;
