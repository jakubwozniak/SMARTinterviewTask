import { useMemo } from "react";

const useFilters = <T>(data: T[], filters: Array<(item: T) => boolean>) => {
  console.log(data);
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      filters.every((filterFunc) => {
        return filterFunc(item);
      })
    );
  }, [data, filters]);

  return filteredData;
};

export default useFilters;
