import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    setNotes([...notes, { title, content }]);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <Header />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note key={index} title={note.title} content={note.content} />
        ))}
      </div>
      <form onSubmit={handleAddNote} className="note-form">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Note Title"
          required
        />
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Note Content"
          required
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
