import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPropertyByPath(obj: any, path: string): any {
  const parts = path.split("."); // Split path into parts

  // Traverse the object based on the path
  return parts.reduce(
    (acc, key) => (acc && acc[key] !== "undefined" ? acc[key] : undefined),
    obj
  );
}
