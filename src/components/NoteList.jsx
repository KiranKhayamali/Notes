import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import NoteItem from "./NoteItem";
import '../styles/NoteList.css';

export default function NoteList({notes, handleDeleteNote, handleEditNote, handlePinNote, handleRecorder}) {
    return (
        <DragDropContext onDragEnd={(result) => handleRecorder(result)}>
            <Droppable droppableId="notes">
                {(provided) => (
                    <div className="note-list"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                         {notes.map((note, index) => (
                            <Draggable
                            key={note.id}
                            draggableId={note.id}
                            index={index}
                            isDragDisabled={note.isPinned} // ⛔ Pinned notes can't move
                        >
                            {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...(!note.isPinned ? provided.dragHandleProps : {})}
                                className={`draggable-item ${snapshot.isDragging ? "dragging" : ""}`}
                            >
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
                            </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
