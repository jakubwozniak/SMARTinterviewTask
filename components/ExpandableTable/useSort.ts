import { useEffect, useMemo, useState } from "react";

const useSort = <T>(
  items: T[],
  columns: Column<T>[],
  defaultSortColumnName: string | null,
  defaultSortDirection: SortDirection
) => {
  const [sortColumnName, setSortColumnName] = useState<string | null>(null);
  const [sortColumnId, setSortColumnId] = useState<number>(-1);
  const [sortDirection, setSortDirection] =
    useState<SortDirection>(defaultSortDirection);

  useEffect(() => {
    const index = getColumnIndex(sortColumnName);

    if (index !== -1) {
      if (index !== sortColumnId) setSortColumn(sortColumnName);
      if (columns[index].enableHiding) setSortColumn(null);
    } else {
      setSortColumn(null);
    }
    return () => {};
  }, [columns]);

  const sortedItems = useMemo(() => {
    if (sortColumnId === -1) return items;

    return [...items].sort((itemA, itemB) => {
      const titleA =
        columns[sortColumnId].accessorValue(itemA)?.toLowerCase() ?? "";
      const titleB =
        columns[sortColumnId].accessorValue(itemB)?.toLowerCase() ?? "";
      return sortDirection.direction === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
  }, [items, sortColumnId, sortDirection, columns]);

  const updateSortDirection = (id: number) => {
    if (id === sortColumnId) {
      setSortDirection({
        direction: sortDirection.direction === "asc" ? "desc" : "asc",
      });
      if (sortDirection.direction === "desc") setSortColumn(null);
    } else {
      setSortColumnId(id);
      setSortColumnName(columns[id].header);
      setSortDirection({ direction: "asc" });
    }
  };

  const getColumnIndex = (header: string | null) => {
    return columns.findIndex((column) => column.header === header);
  };

  const setSortColumn = (header: string | null) => {
    const index = getColumnIndex(header);
    setSortColumnId(index);
    setSortColumnName(header);
    return index;
  };

  return { sortedItems, sortColumnId, sortDirection, updateSortDirection };
};

export default useSort;
