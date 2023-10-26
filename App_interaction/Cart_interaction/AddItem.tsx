import React, { useState } from 'react'
import { Book_Cart, Book, AjoutState } from '../../typescript/Types';
import useCart from '../../hooks/CustomHooks/useCart';

export  function AddItem() {

    const {
      bookCart,
      bookData,
      count,
      ajout,
      setBookCart,
      setBookData,
      setCount,
      setAjout,
    } = useCart();

  const setAPIData = (bookdata: Book[]) => {
    setBookData(bookdata);
  };

  const addCart = (bookdata: Book_Cart) => {
    const updatedCart = [...bookCart, bookdata];
    setBookCart(updatedCart);
    localStorage.setItem("bookCart", JSON.stringify(updatedCart));
  };

  const Cartcount = () => {
    setCount(count + 1);
  };

  const handleButtonAdd= (item: string)=>{
    setAjout({ ...ajout, [item]: true });
 }
  
  return {bookData,bookCart,count,setAPIData,addCart,Cartcount,setBookCart,setCount,setBookData,ajout,setAjout,handleButtonAdd}
}
