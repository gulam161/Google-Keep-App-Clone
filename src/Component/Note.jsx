import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="w-80 h-15vh pt-5 pl-10 rounded-md shadow-md">
        <h1 className="text-black text-lg">{props.title}</h1>
        <p className="text-black">{props.content}</p>
        <button onClick={deleteNote} className="relative">
          <DeleteIcon className="delete text-yellow-400 bg-white rounded-full hover:text-white hover:bg-yellow-400" />
        </button>
      </div>
    </>
  );
}

export default Note;
