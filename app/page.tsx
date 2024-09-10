import UserFilters from "@/components/UserFilters";
import UsersTableAllColumns from "@/components/UsersTable/UsersTableAllColumns";
import UsersTableAllFeatures from "@/components/UsersTable/UsersTableAllFeatures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-12 hsx:p-2">
      <section className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex flex-col">
        <UserFilters />

        <p className="text-center py-6">
          This table contains the solution to the assignment.
        </p>
        <UsersTableAllColumns />
        <p className="text-center pt-12 pb-6">
          Additionally, I would like to present other possible features of the
          table.
        </p>
        <UsersTableAllFeatures />
      </section>
    </main>
  );
}
