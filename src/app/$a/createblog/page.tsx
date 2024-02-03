import CEditor from "@/src/components/AdminComponents/Editor/Editor";
import Input from "@/src/components/Input/Input";
import Textarea from "@/src/components/Textarea/Textarea";

const CreateNewBlog = () => {
  return (
    <section>
      {/* Editor */}
      <div className="flex flex-col items-center m-3 shadow-md shadow-gray-500">
        <h2 className="my-2">Create New Blog</h2>
        <div className="flex flex-col p-3 shadow-md shadow-gray-500 gap-2 rounded-md">
          <Input
            placeholder="Insert Blog Title"
            className="rounded-md border-2 placeholder:text-gray-700 bg-white"
          />
          <Textarea
            placeholder="Description..."
            className="flex rounded-md border-2 placeholder:text-gray-700 bg-white"
          />
        </div>

        <CEditor />
      </div>
    </section>
  );
};

export default CreateNewBlog;
