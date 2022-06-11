import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({title: "", content: "", key: 0});
    const [isClicked, setIsClicked] = useState(false);
    

    function handleNoteChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function onWriteNoteClicked() {
        setIsClicked(true);
    }

    function handleClick(event) {
        props.onAddNote(note);
        setNote({title: "", content: "", key: 0});
        setIsClicked(false);
        event.preventDefault();
    }

    function onBlurHandle() {
        setIsClicked(false);
    }

    return (
        <div>
        <form  className="create-note">
            { isClicked ? <input value={note.title} onChange={handleNoteChange} name="title" placeholder="Title" /> : null }
            <textarea value={note.content} 
            onClick={onWriteNoteClicked}
            onChange={handleNoteChange}
            onBlur={onBlurHandle}
             name="content" 
             placeholder="Take a note..." 
             rows={ isClicked ? "3" : "1"} />
            { isClicked ? 
            <Zoom in={true}>
                <Fab onClick={handleClick}><AddIcon/></Fab>
            </Zoom>
            : null }
        </form>
        </div>
    );
}

export default CreateArea;