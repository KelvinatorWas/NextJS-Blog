import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GetSessionParams, getSession } from "next-auth/react";

const AdminPanel = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("http://localhost:3000/api/auth/signin?callbackUrl=/");
  }

  return (
    <main className="flex items-center flex-col">
    
    <h1 className="font-bold w-2/4 p-1 mt-3 text-center text-2xl text-black bg-lblue rounded-lg rounded-b-none border-b-2 border-tpurple">Admin Panel</h1>
    <section className="flex flex-col p-3 pt-0 w-2/4 bg-lblue-3 rounded-lg rounded-t-none shadow-lg shadow-gray-500">
      
      <div className="flex p-3 items-center h-12 bg-lblue rounded-md mt-3 border-b-2 border-tpurple">
        <span className="font-bold text-sm select-none ">Create New Blog</span>
      </div>
      <div className="flex h-12 bg-lblue rounded-lg mt-3 border-b-2 border-tpurple">

      </div>

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
