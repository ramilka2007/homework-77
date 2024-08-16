export interface Note {
    id: string;
    author: string;
    note: string;
}

export interface NoteMutation {
    author: string;
    note: string;
    image: string | null;
}