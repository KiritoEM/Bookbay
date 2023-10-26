import React from "react";
import { Book_Cart } from "../../typescript/Types";
import { useApp } from "../../hooks/Context/AppContext";
import { AddItem } from "./AddItem";

export function deleteItem() {
  const { bookCart, setBookUpdate, displayButtonAdd } = useApp();
  const { setAjout, setCount, setBookCart } = AddItem();

  const deletePanierItem = (item_ID: string) => {
    const updatedCart = bookCart.filter(
      (cartItem: Book_Cart) => cartItem.id !== item_ID
    );
    setBookUpdate(updatedCart);
    displayButtonAdd(item_ID);
  };

  return { deletePanierItem };
}
