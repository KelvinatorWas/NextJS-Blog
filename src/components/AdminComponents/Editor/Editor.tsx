"use client";
import { EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./style.css";

const CEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <section className="w-3/4 mt-4">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        placeholder="Type your blog here!"
        wrapperClassName="bg-lblue border border-gray-500 rounded-md p-2"
        editorClassName="bg-white px-2 border border-gray-500 rounded-md editor-minmax-height"
        toolbarClassName="toolbar-style"
      />
    </section>
  );
};

export default CEditor;
