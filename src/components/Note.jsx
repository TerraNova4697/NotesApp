import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function onDeleteClick() {
        props.onDeleteClick(props.id);
    }
    
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={onDeleteClick}><DeleteIcon /></button>
        </div>
    );
};

export default Note;