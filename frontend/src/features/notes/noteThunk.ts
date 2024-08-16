import { createAsyncThunk } from '@reduxjs/toolkit';
import { Note, NoteMutation } from '../../types';
import axiosApi from '../../axiosApi';

export const allNotes = createAsyncThunk<Note[]>(
  'notes/fetchNotes',
  async () => {
    const { data: notes } = await axiosApi.get<Note[] | null>('/notes');
    return notes;
  },
);

export const createNote = createAsyncThunk<void, NoteMutation>(
  'notes/create',
  async (noteMutation) => {
    const formData = new FormData();
    if (noteMutation.author === '') {
      formData.append('author', 'Anonymous');
    } else {
      formData.append('author', noteMutation.author);
    }

    formData.append('note', noteMutation.note);

    if (noteMutation.image) {
      formData.append('image', noteMutation.image);
    }

    await axiosApi.post('/notes', formData);
  },
);
