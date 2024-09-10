import { useMemo, useState } from "react";

const useColumns = <T>(columns: Column<T>[]) => {
  const [allColumns, setVisibleColumns] = useState<Column<T>[]>(columns);

  const toggleColumnHiding = (id: string) => {
    setVisibleColumns((prevColumns) =>
      prevColumns.map((column: Column<T>, index) => {
        if (column.header === id) {
          return {
            ...column,
            enableHiding: !column.enableHiding,
          };
        }
        return column;
      })
    );
  };

  const visibleColumns = useMemo(() => {
    return allColumns.filter((column) => !column.enableHiding);
  }, [allColumns]);

  return { visibleColumns, allColumns, toggleColumnHiding };
};

export default useColumns;
