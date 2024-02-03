"use client";
import CEditor from "@/src/components/AdminComponents/Editor/Editor";
import Input from "@/src/components/Input/Input";
import Textarea from "@/src/components/Textarea/Textarea";
import React, { useState } from "react";

const CreateBlog = () => {
  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onTitleChange = (e: string) => {
    setTitle(e);
  };

  const onDescChange = (e: string) => {
    setDesc(e);
  };

  const onEditorChange = (e: string) => {
    setBlogContent(e);
  };

  console.log(blogContent);

  return (
    <div className="flex flex-col items-center m-3 shadow-md shadow-gray-500">
      <h2 className="my-2">Create New Blog</h2>
      <div className="flex flex-col p-3 shadow-md shadow-gray-500 gap-2 rounded-md">
        <Input
          placeholder="Insert Blog Title"
          className="rounded-md border-2 placeholder:text-gray-700 bg-white"
          getValue={onTitleChange}
        />
        <Textarea
          placeholder="Description..."
          className="flex rounded-md border-2 placeholder:text-gray-700 bg-white"
          getValue={onDescChange}
        />
      </div>

      <CEditor
        getValue={onEditorChange}
        //setValue='{"blocks":[{"key":"6u0cp","text":"Hello World😎!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":1,"style":"SUBSCRIPT"},{"offset":1,"length":2,"style":"BOLD"},{"offset":2,"length":2,"style":"SUPERSCRIPT"},{"offset":4,"length":1,"style":"ITALIC"},{"offset":6,"length":6,"style":"CODE"},{"offset":6,"length":6,"style":"color-rgb(40,50,78)"},{"offset":6,"length":7,"style":"STRIKETHROUGH"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
      />
    </div>
  );
};

export default CreateBlog;
