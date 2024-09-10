import { RootState } from "@/lib/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

interface FilterSelector<T> {
  selector: (state: RootState) => string;
  filterFunc: (user: T, filterValue: string) => boolean;
}

const useFilters = <T>(data: T[], filter: FilterSelector<T>) => {
  const filterValue = useSelector(filter.selector);
  const filteredData = useMemo(() => {
    return data.filter((_data) => filter.filterFunc(_data, filterValue));
  }, [data, filter, filterValue]);

  return filteredData;
};

export default useFilters;
