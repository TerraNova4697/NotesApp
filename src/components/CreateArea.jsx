import React, { useState } from "react";

function CreateArea() {

    const [note, setNote] = useState({})

    function handleTitleChange() {

    }

    return (
        <div>
        <form>
            <input value={titleText} onChange={handleTitleChange} name="title" placeholder="Title" />
            <textarea value={noteText} onChange={handleNoteText} name="content" placeholder="Take a note..." rows="3" />
            <button>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;