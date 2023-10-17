import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const AddEvent = () => {
    if (note.title.trim() === "" && note.content.trim() === "") {
      alert("Please enter a title or content before adding a note");
    } else {
      props.passNote(note);
    }
    setNote({ title: "", content: "" });
  };

  // const AddEvent = () => {
  //   props.passNote(note);
  //   setNote({ title: "", content: "" });
  // };

  const expandIt = () => {
    setExpand(true);
  };

  const showContainer = () => {
    setExpand(false);
  };

  return (
    <div
      className="w-full h-60 flex justify-center items-center"
      onDoubleClick={showContainer}
    >
      <form
        className="relative w-1/3 h-auto flex flex-col gap-5 p-4 border rounded-md shadow-md"
        onSubmit={(e) => e.preventDefault()}
      >
        {expand ? (
          <input
            className="outline-none py-2 placeholder-black text-lg font-semibold"
            type="text"
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title..."
            autoComplete="off"
          />
        ) : null}

        <textarea
          rows=""
          cols=""
          id=""
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a note..."
          onClick={expandIt}
          className="outline-none pt-1.5 placeholder-gray-600"
        ></textarea>
        {expand ? (
          <button onClick={AddEvent} className="relative">
            <AddIcon className="Add text-yellow-400 bg-white rounded-full hover:text-white hover:bg-yellow-400" />
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
