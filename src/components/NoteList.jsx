import NoteItem from "./NoteItem";
import '../styles/NoteList.css';

export default function NoteList({notes, handleDeleteNote, handleEditNote, handlePinNote}) {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    color={note.color}
                    isPinned={note.isPinned}
                    handleDeleteNote={handleDeleteNote}
                    handleEditNote={handleEditNote}
                    handlePinNote={handlePinNote}
                />
            ))}
        </div>   
    );
};
