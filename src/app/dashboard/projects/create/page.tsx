import Form from "../../../ui/projects/create-form";
import Breadcrumbs from "../../../ui/projects/breadcrumbs";
import { fetchUsers } from "../../../lib/data";

export default async function Page() {
  const  users  = await fetchUsers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Projects", href: "/dashboard/projects" },
          {
            label: "Create Project",
            href: "/dashboard/projects/create",
            active: true,
          },
        ]}
      />
      <Form customers={users} />
    </main>
  );
}
