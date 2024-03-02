import { formatDateToLocal } from "../../lib/utils";


export default function Card({
  task,
}: {
  task: any | undefined;
}) {
  return (
    <div className="rounded-md bg-gray-50 p-4 md:p-6">
      <div>
        <div>
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center rounded-md bg-blue-100 w-[10rem] h-[5rem]">
              <h1 className="text-2xl font-semibold">{task.name}</h1>
            </div>
            <div className="flex justify-center items-center rounded-md bg-blue-100 w-[10rem] h-[5rem]">
              <h1 className="text-2xl font-semibold">{task.status}</h1>
            </div>
            <div className="flex justify-center items-center rounded-md bg-blue-100 w-[10rem] h-[5rem]">
              <a href={task.link} target="_blank" className="text-xl font-semibold border-blue-700 border-b-4">Link</a>
            </div>
            <div className="flex justify-center items-center rounded-md bg-blue-100 w-[10rem] h-[5rem]">
              <h1  className="text-xl font-semibold">{formatDateToLocal(task.date)}</h1>
            </div>
          </div>
          <div className="mt-10 rounded-md bg-blue-100 p-6">
            <span>
                <h1 className="text-2xl">Title</h1>
                <h1>{task.title}</h1>
            </span>
          </div>
          <div className="mt-10 rounded-md bg-blue-100 p-6">
            <span>
                <h1 className="text-2xl">Description</h1>
                <h1>{task.description}</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
