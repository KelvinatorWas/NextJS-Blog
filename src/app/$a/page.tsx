import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GetSessionParams, getSession } from "next-auth/react";
import RouteButton from "@/src/components/AdminComponents/RouteButton";
import { getData } from "@/src/utils/crud";
import { DB_BLOGS_RECENT, linkComb } from "@/src/utils/serverLinks";
import { BlogData } from "@/src/utils/types";

const AdminPanel = async () => {
  const session = await getServerSession(authOptions);

  const recentBlogs = await getData<BlogData[]>(linkComb(DB_BLOGS_RECENT, 4))

  if (!session) {
    redirect("http://localhost:3000/api/auth/signin?callbackUrl=/");
  }

  return (
    <main className="grid grid-cols-3 grid-rows-3 m-3 gap-2">
      {/* Dashboard */}
      <section className="flex flex-col pt-0 pb-3 bg-lblue-3 rounded-sm shadow-lg shadow-gray-500 h-fit">
        <div className="flex bg-tpurple p-3 rounded-sm font-bold text-white border-b-2 border-active">
          Dashboard
        </div>
        <RouteButton
          label="Create New Blog"
          href="/$a/createblog"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600 mx-3",
            borderColor: "hover:border-blue-900",
          }}
        />

        <RouteButton
          label="All Blogs"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600 mx-3",
            borderColor: "hover:border-blue-900",
          }}
        />

        <RouteButton
          label="All Comments"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600 mx-3",
            borderColor: "hover:border-blue-900",
          }}
        />

        <RouteButton
          label="Test"
          hoverColors={{
            labelColor: "hover:text-white",
            bgColor: "hover:bg-blue-600 mx-3",
            borderColor: "hover:border-blue-900",
          }}
        />
      </section>
      {/* Recent Blogs */}
      <section className="flex flex-col pb-3 bg-lblue-3 rounded-sm shadow-lg shadow-gray-500 gap-3 col-end-4">
      <div className="flex bg-tpurple p-3 rounded-sm font-bold text-white border-b-2 border-active">
          Most Recent Blogs
        </div>
        {
          recentBlogs.map(({post_id, description, title}) => {
            return (
              <div className="flex flex-row mx-3 items-center bg-lblue text-md rounded-sm font-bold">
                <span className="bg-tpurple text-white border-r-2 p-3 rounded-sm border-active">{title}</span>
                <div className="mx-2">
                  <span className="text-xs font-normal overflow-hidden">{description}</span>
                </div>
              </div>
            );
          })
        }
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
