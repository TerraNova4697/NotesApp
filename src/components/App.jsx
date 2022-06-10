import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addNote(note) {
    const key = notesArray.length;
    note.key = key;
    setNotesArray((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
      setNotesArray(prevValue => {
          return ( prevValue.filter(note => note.key !== id));
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addNote} />
      <div className="notes-container">
        {notesArray.map((note) => (
          <Note onDeleteClick={deleteNote}
            key={note.key}
            id={note.key}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
