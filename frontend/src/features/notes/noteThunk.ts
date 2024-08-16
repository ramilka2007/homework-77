import { createAsyncThunk } from '@reduxjs/toolkit';
import { NoteMutation } from '../../types';
import axiosApi from '../../axiosApi';

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
