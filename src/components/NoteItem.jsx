import '../styles/NoteItem.css';

function NoteItem({ id, text, date, handleDeleteNote }) {
    return (
        <div className="note-item">
            <p className="note-text">{text}</p>
            <div className="note-item-footer">
                <small>{date}</small>
                <button className="delete-button" onClick={() => handleDeleteNote(id)}>Delete</button>
            </div>
        </div>
    )
};

export default NoteItem;