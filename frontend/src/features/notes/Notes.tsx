import React from 'react';
import NoteForm from './components/NoteForm';
import OneNote from './components/OneNote';

const Notes = () => {
  return (
    <>
      <NoteForm />
      <hr />
      <OneNote />
    </>
  );
};

export default Notes;
