"use client";

import React from "react";
import UsersTable from "./UsersTable";
import { usersColumns } from "@/constants/usersTableColumns";

const UsersTableAllColumns = () => {
  return <UsersTable columns={usersColumns} rootName="Users" />;
};

export default UsersTableAllColumns;
