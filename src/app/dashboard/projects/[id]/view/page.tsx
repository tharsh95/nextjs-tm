import Card from "../../../../ui/projects/viewcard";
import Breadcrumbs from "../../../../ui/projects/breadcrumbs";
import { fetchTaskById, fetchUsers } from "../../../../lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [task] = await Promise.all([fetchTaskById(id)]);
  if (!task) {
      notFound();
    }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Projects", href: "/dashboard/projects" },
          {
            label: " View project",
            href: `/dashboard/projects/${id}/view`,
            active: true,
          },
        ]}
      />
      <Card task={task} />
    </main>
  );
}
