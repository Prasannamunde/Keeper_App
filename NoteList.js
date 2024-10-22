// src/components/NoteList.js
import React from 'react';
import Note from './Note';
import './NoteList.css';

function NoteList({ notes, deleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={() => deleteNote(index)} />
      ))}
    </div>
  );
}

export default NoteList;
