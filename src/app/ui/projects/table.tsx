import Image from "next/image";
import { UpdateInvoice, DeleteInvoice, ViewInvoice } from "./buttons";
import InvoiceStatus from "./status";
import { formatDateToLocal, trimStringTo15Words } from "../../lib/utils";
// import { fetchFilteredInvoices } from '@/app/lib/data';
import { fetchTasks } from "../../lib/data";
export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const tasks = await fetchTasks(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tasks?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{invoice.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {invoice.description}
                    </p>
                  </div>
                  {invoice.status}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{invoice.name}</p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Assigned To
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
              <tbody>
                {tasks?.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p>{invoice.title}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {trimStringTo15Words(invoice.description)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {invoice.status}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {formatDateToLocal(invoice.date)}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <ViewInvoice id={invoice.id} />
                        <UpdateInvoice id={invoice.id} />
                        <DeleteInvoice id={invoice.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
8