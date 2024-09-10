"use client";

import React, { useEffect, useState } from "react";
import ExpandableTable from "../ExpandableTable/ExpandableTable";

import { Card } from "../ui/card";

import LoaderSpinner from "../LoaderSpinner";
import Error from "../Error";
import BreadcrumbProvider from "@/providers/BreadcrumbProvider";
import ErrorBoundary from "../ErrorBoundary";
import TableCardHeader from "../ExpandableTable/TableCardHeader";
import useColumns from "../../app/hooks/useColumns";
import { useGetAllUsersQuery } from "@/lib/state/users/apiSlice";

const UsersTableCategorized = <T,>({
  columns,
  rootName,
}: UsersTableProps<T>) => {
  const { data, error, isLoading } = useGetAllUsersQuery();

  const [categorizedData, setModifiedData] = useState<IUser[]>([]);

  const { visibleColumns, allColumns, toggleColumnHiding } =
    useColumns(columns);

  useEffect(() => {
    if (!isLoading && !error && data) {
      console.log("New Users:", data);
      const updatedData = data.map((item, index) => {
        let categories: string[] = [];

        if (index === 0) {
          categories = ["category1"];
        } else if (index === 1 || index === 2) {
          categories = ["category2"];
        }
        return { ...item, categories };
      });
      setModifiedData(updatedData);
    }
  }, [data, error, isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <LoaderSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <Error error="Error loading data. Please try again later." />
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <BreadcrumbProvider
        defaultBreadcrumb={[
          {
            id: rootName,
            label: rootName,
            onClick: () => null,
          },
        ]}
        defaultBreadcrumbNamePath={rootName}
      >
        <TableCardHeader
          toggleColumnHiding={toggleColumnHiding}
          columns={allColumns}
        />
        <div>
          <ErrorBoundary>
            {categorizedData && categorizedData.length ? (
              <ExpandableTable<IUser>
                items={categorizedData}
                columns={visibleColumns as Column<IUser | undefined>[]}
                itemCategoryPath="categories"
                rootName={rootName}
                listOfCategories={[
                  { name: "category1", color: "emerald-400" },
                  { name: "category2", color: "cyan-500" },
                ]}
              />
            ) : (
              <div>No items to render</div>
            )}
          </ErrorBoundary>
        </div>
      </BreadcrumbProvider>
    </Card>
  );
};

export default UsersTableCategorized;
