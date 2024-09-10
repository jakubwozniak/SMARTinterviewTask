export const usersColumns: Column<IUser>[] = [
  {
    header: "Name",
    accessor: (item) => item.name,
    accessorValue: (item) => item.name,
    enableHiding: false,
  },
  {
    header: "Username",
    accessor: (item) => item.username,
    accessorValue: (item) => item.username,
    enableHiding: false,
  },
  {
    header: "Email",
    accessor: (item) => item.email,
    accessorValue: (item) => item.email,
    enableHiding: false,
  },
  {
    header: "Phone",
    accessor: (item) => item.phone,
    accessorValue: (item) => item.phone,
    enableHiding: false,
  },
];
