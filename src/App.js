import { useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import {Sun, Moon} from 'lucide-react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './App.css';

function AppContent() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchText, setSearchText] = useState("");
  const { dark, toggleDarkMode } = useTheme();

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, color) => {
    const newNote = {
      id: uuidv4(),
      text: text,
      color: color,
      isPinned: false,
      date: new Date().toLocaleDateString()
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  
  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  const togglePinNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note
    )
    );
  }
  
  const filteredNotes = notes.filter((note) =>
  note.text.toLowerCase().includes(searchText.toLowerCase())
);

const sortedNotes = [...filteredNotes].sort((a, b) => {
  return (b.isPinned === true) - (a.isPinned === true);
});


  const reorderedNotes = (result) => {
    if (!result.destination) return;

    const items = Array.from(sortedNotes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setNotes(items);
  };

  return (
    <div className="app-container">
        <div className="app-header">
          <h1 className='app-title'>{dark ? 'Notes App' : 'Notes App'}</h1>
          <button
            className={`theme-toggle-btn ${dark ? 'dark' : 'light'}`}
            onClick={() => toggleDarkMode()}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20}/> : <Moon size={20}/>}
          </button>
        </div>
      <SearchBar handleSearch={setSearchText} />
      <NoteForm onAddNote={addNote} />
      <NoteList 
        notes={sortedNotes} 
        handleDeleteNote={deleteNote} 
        handleEditNote={editNote} 
        handlePinNote={togglePinNote}
        handleRecorder={reorderedNotes}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
