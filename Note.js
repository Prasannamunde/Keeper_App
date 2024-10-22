// src/components/Note.js
import React from 'react';
import './Note.css';

function Note({ note, onDelete }) {
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Note;
