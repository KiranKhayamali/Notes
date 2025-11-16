import { useState } from "react";
import '../styles/NoteForm.css';

function NoteForm({ onAddNote }) {
    const [noteText, setNoteText] = useState("");
    const [color, setColor] = useState("#fff8b5");
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
        <div className="note-form" style={ {backgroundColor: color}}>
            <textarea
                rows="4"
                placeholder="Write your note here...."
                value={noteText}
                onChange={handleChange}
            ></textarea>

            <div className="color-picker">
                {["#fff8b5", "#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff"].map((c) => (
                    <span
                        key={c}
                        className={`color-circle ${color === c ? "selected" : ""}`}
                        style={{ backgroundColor: c }}
                        onClick={() => setColor(c)}
                    ></span>
                ))}
            </div>

            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save-button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}

export default NoteForm;