"use client";

// import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "../button";
import { Users } from "../../lib/definitions";
import { updateInvoice } from "../../lib/actions";

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: any;
  customers: Users[] | undefined;
}) {
  const status = [
    {
      id: 1,
      name: "Backlog",
      value: "backlog",
    },
    {
      id: 2,
      name: "WIP",
      value: "wip",
    },
    {
      id: 3,
      name: "On Hold",
      value: "onHold",
    },
    {
      id: 4,
      name: "Finished",
      value: "finished",
    },
  ];
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  return (
    <form action={updateInvoiceWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Assign to
          </label>
          <div className="relative">
            <select
              id="assignee"
              name="assignee"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue="invoice.login_id"
            >
              <option value="" disabled>
                Select a user
              </option>
              {customers?.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Enter title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                defaultValue={invoice.title}
                id="title"
                name="title"
                type="text"
                step="0.01"
                placeholder="Enter Title"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter Description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                defaultValue={invoice.description}
                id="description"
                name="description"
                type="text"
                step="0.01"
                placeholder="Enter Description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter link
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                defaultValue={invoice.link}
                id="link"
                name="link"
                type="text"
                step="0.01"
                placeholder="Enter Link"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
              {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>

        {/* Task Status */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Select Status
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={invoice.status}
            >
              <option value="" disabled>
                Select Status
              </option>
              {status.map((customer) => (
                <option key={customer.id} value={customer.name}>
                  {customer.name}
                </option>
              ))}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/projects"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Project</Button>
      </div>
    </form>
  );
}
