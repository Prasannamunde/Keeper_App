// src/components/NoteForm.js
import React, { useState } from 'react';
import './NoteList.css';

function NoteForm({ addNote }) {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: '', content: '' });
  };

  return (
    <form className="note-form" onSubmit={submitNote}>
      <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
        className="input-title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Content"
        className="input-content"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default NoteForm;
