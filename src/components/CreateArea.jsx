import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({title: "", content: "", key: 0});

    function handleNoteChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        props.onAddNote(note);
        setNote({title: "", content: "", key: 0});
        event.preventDefault();
    }

    return (
        <div>
        <form>
            <input value={note.title} onChange={handleNoteChange} name="title" placeholder="Title" />
            <textarea value={note.content} onChange={handleNoteChange} name="content" placeholder="Take a note..." rows="3" />
            <button onClick={handleClick}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;