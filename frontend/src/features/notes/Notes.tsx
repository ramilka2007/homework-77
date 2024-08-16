import React from 'react';
import NoteForm from './components/NoteForm';
import { createNote } from './noteThunk';
import { useAppDispatch } from '../../app/hooks';
import { NoteMutation } from '../../types';

const Notes = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (note: NoteMutation) => {
    await dispatch(createNote(note));
  };

  return (
    <>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
};

export default Notes;
