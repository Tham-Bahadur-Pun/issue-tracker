import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  return (
    <main className="p-5">
      <h1>hello world</h1>
      <Pagination
        currentPage={+searchParams.page}
        itemCount={100}
        pageSize={10}
      />
    </main>
  );
}
