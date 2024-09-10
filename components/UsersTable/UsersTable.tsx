"use client";

import React, { useEffect } from "react";
import ExpandableTable from "../ExpandableTable/ExpandableTable";

import { Card } from "../ui/card";

import LoaderSpinner from "../LoaderSpinner";
import Error from "../Error";
import BreadcrumbProvider from "@/providers/BreadcrumbProvider";
import ErrorBoundary from "../ErrorBoundary";
import TableCardHeader from "../ExpandableTable/TableCardHeader";
import useColumns from "../../app/hooks/useColumns";
import { useGetAllUsersQuery } from "@/lib/state/users/apiSlice";

const UsersTable = <T,>({ columns, rootName }: UsersTableProps<T>) => {
  //https://redux-toolkit.js.org/rtk-query/usage/cache-behavior
  const { data, error, isLoading } = useGetAllUsersQuery();

  const { visibleColumns, allColumns, toggleColumnHiding } =
    useColumns(columns);

  useEffect(() => {
    if (!isLoading && !error && data) {
      console.log("New Users:", data);
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
    console.log(error);
    return (
      <Card className="p-6">
        <Error error={"Error loading data. Please try again later."} />
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
        <TableCardHeader columns={allColumns} />
        <div>
          <ErrorBoundary>
            {data && data.length ? (
              <ExpandableTable<IUser>
                items={data}
                columns={visibleColumns as Column<IUser | undefined>[]}
                itemCategoryPath="categories"
                rootName={rootName}
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

export default UsersTable;
