"use client";
import {
  EditorState,
  RawDraftContentState,
  convertFromRaw,
  convertToRaw,
} from "draft-js";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import DOMPurify from "dompurify";
import "./style.css";
import draftToHtml from "draftjs-to-html";

type EditorProps = {
  getValue?: (v: string) => void;
  setValue?: string;
};

const CEditor = ({ getValue, setValue }: EditorProps) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (!setValue) return;
    const raw = JSON.parse(setValue) as RawDraftContentState;
    setEditorState(EditorState.createWithContent(convertFromRaw(raw)));
  }, []);

  const [convertedData, setConvertedData] = useState("");

  useEffect(() => {
    const rawData = convertToRaw(editorState.getCurrentContent());
    const markup = draftToHtml(rawData);
    setConvertedData(markup);

    if (getValue) getValue(JSON.stringify(rawData));
  });

  const purifyHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

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
      <section className="p-2 mt-4 bg-lblue border border-gray-500 min-h-96 rounded-md mb-4">
        <h2 className="ml-1 my-2">Preview</h2>
        <div className="bg-white px-2 min-h-96 max-h-96 border border-gray-500 rounded-md overflow-hidden overflow-y-scroll">
          <div
            className="mt-4"
            dangerouslySetInnerHTML={purifyHTML(convertedData)}
          ></div>
        </div>
      </section>
    </section>
  );
};

export default CEditor;
