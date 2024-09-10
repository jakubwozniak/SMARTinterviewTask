"use client";

import React from "react";
import { usersColumns } from "@/constants/usersTableColumns";
import UsersTableCategorized from "./UsersTableCategorized";

const UsersTableAllFeatures = () => {
  return (
    <UsersTableCategorized
      columns={usersColumns}
      rootName="Users Categorized"
    />
  );
};

export default UsersTableAllFeatures;
