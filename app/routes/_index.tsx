import type { MetaFunction } from "@remix-run/node";
import { ProfileForm } from "~/components/form/profile-form";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl">React Query + Zod Form</h1>
      <ProfileForm />
    </div>
  );
}
