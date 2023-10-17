import { useState } from "react";
import "./App.css";

import Header from "./Component/Header";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";
import Footer from "./Component/Footer";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (newData) => {
    setAddItem((prevData) => [...prevData, newData]);
  };

  const onDelete = (id) => {
    setAddItem((prevData) => prevData.filter((_, index) => index !== id));
  };

  return (
    <div className="App">
      <Header />
      <CreateNote passNote={addNote} />
      <div className="relative flex flex-row flex-wrap gap-5 justify-start">
        {addItem &&
          addItem.map((val, index) => (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
