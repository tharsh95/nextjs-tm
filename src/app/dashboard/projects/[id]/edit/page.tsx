import Form from "../../../../ui/projects/edit-form";
import Breadcrumbs from "../../../../ui/projects/breadcrumbs";
import { fetchTaskById, fetchUsers } from "../../../../lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [users, task] = await Promise.all([fetchUsers(), fetchTaskById(id)]);

  if (!task) {
      notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Projects", href: "/dashboard/projects" },
          {
            label: "Edit project",
            href: `/dashboard/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={task} customers={users} />
    </main>
  );
}
