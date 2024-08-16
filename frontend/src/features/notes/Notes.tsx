import React, { useEffect } from 'react';
import NoteForm from './components/NoteForm';
import OneNote from './components/OneNote';
import { allNotes, createNote } from './noteThunk';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { NoteMutation } from '../../types';
import {
  selectNoteCreating,
  selectNotes,
  selectNotesFetching,
} from './noteSlice';
import Spinner from '../../UI/Spinner/Spinner';
import { Grid } from '@mui/material';

const Notes = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(selectNotes);
  const isFetching = useAppSelector(selectNotesFetching);
  const isCreating = useAppSelector(selectNoteCreating);

  useEffect(() => {
    dispatch(allNotes());
  }, [dispatch]);

  const onSubmit = async (note: NoteMutation) => {
    await dispatch(createNote(note));
    await dispatch(allNotes());
  };

  return (
    <>
      <NoteForm onSubmit={onSubmit} isLoading={isCreating} />
      <hr />
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          {notes.length > 0 ? (
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {notes.map((note) => (
                <OneNote
                  key={note.id}
                  author={note.author}
                  note={note.note}
                  image={note.image}
                />
              ))}
            </Grid>
          ) : (
            <h1>No notes</h1>
          )}
        </>
      )}
    </>
  );
};

export default Notes;
