"use client";
import CEditor from "@/src/components/AdminComponents/Editor/Editor";
import { CButton } from "@/src/components/CButton/CButton";
import Input from "@/src/components/Input/Input";
import Textarea from "@/src/components/Textarea/Textarea";
import { uploadData } from "@/src/utils/crud";
import { DB_BLOGS } from "@/src/utils/serverLinks";
import { BlogData } from "@/src/utils/types";
import { format } from "date-fns";
import { Content } from "next/font/google";
import React, { MouseEventHandler, useState } from "react";

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

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!blogContent || !desc || !title ) return;
    
    const newBlog = {
      title: title,
      description: desc,
      content: blogContent,
      createdAt: format(new Date(), "yyyy-MM-dd HH-mm-ss"),
      updatedAt: null,
    }

    uploadData(DB_BLOGS, newBlog);
  }

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
        <div>
          <CButton label="Submit" style="green" onClick={onSubmit}/>
        </div>
      </div>

      <CEditor
        getValue={onEditorChange}
        //setValue='{"blocks":[{"key":"6u0cp","text":"Hello World😎!","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":1,"style":"SUBSCRIPT"},{"offset":1,"length":2,"style":"BOLD"},{"offset":2,"length":2,"style":"SUPERSCRIPT"},{"offset":4,"length":1,"style":"ITALIC"},{"offset":6,"length":6,"style":"CODE"},{"offset":6,"length":6,"style":"color-rgb(40,50,78)"},{"offset":6,"length":7,"style":"STRIKETHROUGH"}],"entityRanges":[],"data":{}}],"entityMap":{}}'
      />

    </div>
  );
};

export default CreateBlog;
