import { useState } from 'react';
import '../styles/NoteItem.css';

function NoteItem({ id, text, date, color, handleDeleteNote, handleEditNote }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleSaveEdit = () => {
        if (editedText.trim().length > 0) {
            handleEditNote(id, editedText);
            setIsEditing(false);
        }
    };

    return (
        <div className="note-item" style={{ backgroundColor: color }}>
            {isEditing ? (
                <textarea 
                    className='note-edit-textarea'
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <span className="note-text">{text}</span>
            )}

            <div className="note-item-footer">
                <small>{date}</small>

                <div className='note-actions'>
                    {isEditing ? (
                        <>
                            <button className='save-btn' onClick={handleSaveEdit}>
                                Save
                            </button>
                            <button 
                                className='cancel-btn' 
                                onClick={() => {
                                    setIsEditing(false);
                                    setEditedText(text);
                                }}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button className='edit-btn' onClick={() => setIsEditing(true)}>
                                Edit
                            </button>
                            <button className='delete-btn' onClick={() => handleDeleteNote(id)}>
                                Delete
                            </button>
                        </>
                    )}  
                </div>
            </div>
        </div>
    );
}

export default NoteItem;