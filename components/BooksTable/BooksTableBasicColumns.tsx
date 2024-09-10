"use client";

import React from "react";
import BooksTable from "./BooksTable";
import { basicBooksColumns } from "@/constants/bookTableColumns";

const BooksTableBasicColumns = () => {
  return <BooksTable columns={basicBooksColumns} />;
};

export default BooksTableBasicColumns;
