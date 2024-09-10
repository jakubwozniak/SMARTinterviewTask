import BooksTableAllColumns from "@/components/BooksTable/BooksTableAllColumns";
import BooksTableBasicColumns from "@/components/BooksTable/BooksTableBasicColumns";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-12 hsx:p-2">
      <section className="z-10 w-full max-w-7xl items-center justify-between text-sm lg:flex flex-col">
        <BooksTableAllColumns />
        <div className="w-full pt-24">
          <BooksTableBasicColumns />
        </div>
      </section>
    </main>
  );
}
