"use client";
import React from "react";
import UsersFilterInput from "./UsersFilterInput";
import { RootState } from "@/lib/store";
import {
  updateEmailFilter,
  updateNameFilter,
  updatePhoneFilter,
  updateUsernameFilter,
} from "@/lib/state/users/usersSlice";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const UserFilters = () => {
  return (
    <Card className="p-6 w-full">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4">
        <UsersFilterInput
          selector={(state: RootState) => state.users.filters.name}
          updateFilter={updateNameFilter}
          type="text"
          id="name"
          placeholder="Name"
        />
        <UsersFilterInput
          selector={(state: RootState) => state.users.filters.username}
          updateFilter={updateUsernameFilter}
          type="text"
          id="username"
          placeholder="Username"
        />
        <UsersFilterInput
          selector={(state: RootState) => state.users.filters.email}
          updateFilter={updateEmailFilter}
          type="email"
          id="email"
          placeholder="Email"
        />
        <UsersFilterInput
          selector={(state: RootState) => state.users.filters.phone}
          updateFilter={updatePhoneFilter}
          type="text"
          id="phone"
          placeholder="Phone"
        />
      </CardContent>
    </Card>
  );
};

export default UserFilters;
