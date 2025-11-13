import { useState } from "react";

function NoteForm({ onAddNote }) {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        };
    };

    const handleSubmit = () => {
        if (noteText.trim().length > 0) {
            onAddNote(noteText);
            setNoteText("");
        };
    };

    return (
        <div className="note-form">
            <textarea
                rows="4"
                placeholder="Write your note here...."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save-button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}

export default NoteForm;