import React from 'react';
import { TextField } from '@mui/material';
import { Textarea } from '@mui/joy';
import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import FileInput from '../../../UI/FileInput/FileInput';
import {SendNote} from "../../../types";

const NoteForm = () => {
    const [note, setNote] = React.useState<SendNote>({
        author: '',
        note: '',
        image: null,
    });

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setNote(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const fileInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, files} = event.target;
        const value = files && files[0] ? files[0] : null
        setNote((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    };
  return (
    <>
      <form className="form">
        <TextField
          style={{ width: 500, marginBottom: 30 }}
          label="Username"
          name="author"
          id="author"
          onChange={inputChangeHandler}
          value={note.author}
        />
        <Textarea
          required
          style={{ width: 500, marginBottom: 30 }}
          color="primary"
          minRows={3}
          variant="soft"
          size="lg"
          name="note"
          id="note"
          placeholder="Note"
          onChange={inputChangeHandler}
          value={note.note}
        />

        <FileInput onChange={fileInputChangeHandler} name="image" label="File" />

        <LoadingButton
          size="medium"
          loadingPosition="end"
          endIcon={<SendIcon />}
          variant="contained"
          type="submit"
          style={{ marginTop: '20px' }}
        >
          <span>Send</span>
        </LoadingButton>
      </form>
    </>
  );
};

export default NoteForm;
