export interface Note {
  id: string;
  author: string;
  note: string;
  image: string | null;
}

export interface NoteMutation {
  author: string;
  note: string;
  image: File | null;
}
