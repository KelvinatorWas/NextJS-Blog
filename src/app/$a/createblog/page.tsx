import CEditor from "@/src/components/AdminComponents/Editor/Editor";
import React from "react";

const CreateNewBlog = () => {
  return (
    <section>
      {/* Editor */}
      <div className="flex flex-col items-center">
        <CEditor />
      </div>
    </section>
  );
};

export default CreateNewBlog;
