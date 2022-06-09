import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes"

function App() {
    return (
        <div>
            <Header />
            <div className="notes-container">
                {notes.map(note => (
                    <Note key={note.key} tite={note.title} content ={note.content}/>
                ))}
            </div>
            
            <Footer/>
        </div>
        
    );
}

export default App;