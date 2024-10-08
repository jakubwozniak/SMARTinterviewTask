interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
  categories?: string[];
}

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    language: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
  accessorValue: (item: T) => string;
  className?: string;
  enableHiding: boolean;
}

interface ExpandableTableProps<T> {
  DetailsComponent?: React.ComponentType<any>;
  items: T[];
  columns: Column<T>[];
  rootName: string;
  breadcrumbNamePath?: string;
  itemCategoryPath?: string;
  listOfCategories?: Category[];
  defaultSortColumnId?: string | null;
  defaultSortDirection?: SortDirection;
  [key: string]: any;
}
type FilterFunc<T> = (item: T, filterValue: string) => boolean;
interface Category {
  name: string;
  color: string;
}

interface UsersTableProps<T> {
  columns: Column<T>[];
  rootName: string;
}

interface TableCardHeaderProps<T> {
  columns: Column<T>[];
  toggleColumnHiding?: (id: string) => void;
}

interface TableHeaderProps<T> {
  columns: Column<T>[];
  setSortColumnId: (id: number) => void;
  sortColumnId: number | null;
  sortDirection: SortDirection;
}

interface TableRowProps<T> {
  item: T;
  columns: Column<T>[];
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

interface TableItemCollapsibleProps<T> {
  DetailsComponent?: React.ComponentType<any>;
  item: T;
  columns: Column<T>[];
  [key: string]: any;
}
interface ExpandableRowProps {
  id: string;
  colSpan: number;
  parentName: string;
  children?: React.ReactNode;
  [key: string]: any;
}

interface BreadcrumbContextType {
  breadcrumbIds: string[];
  breadcrumbNamePath: string;
  setBreadcrumbNamePath: React.Dispatch<React.SetStateAction<string>>;
  breadcrumb: BreadcrumbItem[];
  setBreadcrumb: React.Dispatch<React.SetStateAction<BreadcrumbItem[]>>;
  addBreadcrumbItem: (item: BreadcrumbItem) => void;
  removeAllBreadcrumbItemChilds: (label: string) => void;
}

interface BreadcrumbProviderProps {
  children: React.ReactNode;
  defaultBreadcrumb?: BreadcrumbItem[];
  defaultBreadcrumbNamePath?: string;
}

interface BreadcrumbItem {
  id: string;
  label: string;
  onClick: () => void;
}

interface SortDirection {
  direction: "asc" | "desc";
}
