import { RootState } from "@/lib/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

interface FilterSelector<T> {
  selector: (state: RootState) => string;
  filterFunc: (user: T, filterValue: string) => boolean;
}

const useFilters = <T>(data: T[], filters: FilterSelector<T>[]) => {
  const filterValues = filters.map((filter) => useSelector(filter.selector));
  const filteredData = useMemo(() => {
    return data.filter((_data) =>
      filters.every((filter, index) =>
        filter.filterFunc(_data, filterValues[index])
      )
    );
  }, [data, filters, filterValues]);

  return filteredData;
};

export default useFilters;
