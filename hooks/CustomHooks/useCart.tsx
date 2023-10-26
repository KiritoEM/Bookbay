import React, { useState } from "react";
import { Book_Cart, Book, AjoutState } from "../../typescript/Types";

export default function useCart() {
  const [bookData, setBookData] = useState<Book[]>([]);
  const [bookCart, setBookCart] = useState<Book_Cart[]>([]);
  const [count, setCount] = useState<number>(0);
  const [ajout, setAjout] = useState<AjoutState>({});

  return {
    bookCart,
    bookData,
    count,
    ajout,
    setBookCart,
    setBookData,
    setCount,
    setAjout,
  };
}
