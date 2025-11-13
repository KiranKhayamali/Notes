import NoteItem from "./NoteItem";

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
