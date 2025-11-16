import NoteItem from "./NoteItem";
import '../styles/NoteList.css';

export default function NoteList({notes, handleDeleteNote}) {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>   
    );
};
