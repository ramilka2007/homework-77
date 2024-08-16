import { Note } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { createNote, allNotes } from './noteThunk.ts';

export interface NotesState {
  notes: Note[];
  notesFetching: boolean;
  isCreating: boolean;
}

const initialState: NotesState = {
  notes: [],
  notesFetching: false,
  isCreating: false,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNote.pending, (state: NotesState) => {
        state.isCreating = true;
      })
      .addCase(createNote.fulfilled, (state: NotesState) => {
        state.isCreating = false;
      })
      .addCase(createNote.rejected, (state: NotesState) => {
        state.isCreating = false;
      });
  },
  selectors: {
    selectNotes: (state) => state.notes,
    selectNotesFetching: (state) => state.notesFetching,
    selectNoteCreating: (state) => state.isCreating,
  },
});

export const notesReducer = notesSlice.reducer;

export const { selectNotes, selectNotesFetching, selectNoteCreating } =
  notesSlice.selectors;
