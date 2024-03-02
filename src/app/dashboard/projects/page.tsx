import Pagination from '../../ui/projects/pagination';
import Search from '../../ui/search';
import Table from '../../ui/projects/table';
import { CreateInvoice } from '../../ui/projects/buttons';
 
import { Suspense } from 'react';
import { fetchTasksPages } from '../../lib/data';


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchTasksPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        {/* <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>  */}
        <h1 className={`text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search tasks..." />
        <CreateInvoice />
      </div>
       <Suspense key={query + currentPage} fallback={<div>Loading... </div>}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}