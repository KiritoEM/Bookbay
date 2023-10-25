
export interface Book {
    id: string;
    title: string;
    authors: string[];
    image:string;
    description: string;
  }

  export interface Book_Cart {
    id: string;
    title: string;
    Price: number,
    image: string
  }

  export interface AjoutState {
    [key: string]: boolean;
  }

  