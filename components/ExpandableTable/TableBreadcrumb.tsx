"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";

const TableBreadcrumb = () => {
  const { breadcrumb } = useBreadcrumb();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => {
          const isLastItem = index === breadcrumb.length - 1;

          return isLastItem ? (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink className="text-sm md:text-base line-clamp-1 max-w-36 md:max-w-60">
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-sm md:text-base hover:text-black cursor-pointer line-clamp-1 max-w-40 md:max-w-60"
                  onClick={item.onClick}
                >
                  {item.label?.length > 10
                    ? item.label.slice(0, 10)
                    : item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default TableBreadcrumb;
