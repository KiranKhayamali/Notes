import { useState, useEffect, use } from 'react';
import {v4 as uuidv4} from 'uuid';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    const newNote = {
      id: uuidv4(),
      text: text,
      color: color,
      date: new Date().toLocaleDateString()
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className='app-title'>Notes App</h1>
      <SearchBar handleSearch={setSearchText} />
      <NoteForm onAddNote={addNote} />
      <NoteList notes={filteredNotes} handleDeleteNote={deleteNote} handleEditNote={editNote}/>
    </div>
  );
}

export default App;
