// src/App.js
import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const deleteNote = (indexToDelete) => {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== indexToDelete));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Keeper App</h1>
      </header>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
