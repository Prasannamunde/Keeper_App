import React, { useState } from 'react';
import NoteForm from './src/NoteForm';
import NoteList from './src/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  return (
    <div>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
