import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GetSessionParams, getSession } from "next-auth/react";
import RouteButton from "@/src/components/AdminComponents/RouteButton";

const AdminPanel = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("http://localhost:3000/api/auth/signin?callbackUrl=/");
  }

  return (
    <main className="grid grid-cols-3 grid-rows-3 m-3 gap-2">
      {/* Dashboard */}
      <section className="flex flex-col p-3 pt-0 bg-lblue-3 rounded-sm shadow-lg shadow-gray-500">
        <RouteButton
          label="Create New Blog"
          href="/$a/createblog"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600",
            borderColor: "hover:bg-blue-900",
          }}
        />

        <RouteButton
          label="All Blogs"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600",
            borderColor: "hover:bg-blue-900",
          }}
        />

        <RouteButton
          label="All Comments"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600",
            borderColor: "hover:bg-blue-900",
          }}
        />

        <RouteButton
          label="Test"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600",
            borderColor: "hover:bg-blue-900",
          }}
        />
      </section>
    </main>
  );
};

export default AdminPanel;

export const ServerSide = async (context: GetSessionParams | undefined) => {
  const session = await getSession(context);

  return {
    props: {
      user: session?.user || null,
    },
  };
};
