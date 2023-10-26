import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Book, Book_Cart, AjoutState } from "../../typescript/Types";
import Type_context from "../../typescript/Context_type";
import { useAPI } from "../APi/useAPI";
import { SearchInteraction } from "../../App_interaction/InteractionsearchBar/SearchInteraction";
import { AddItem } from "../../App_interaction/Cart_interaction/AddItem";
import { deleteItem } from "../../App_interaction/Cart_interaction/deleteItem";
import { useNav } from "../CustomHooks/useNav";

type Props = {
  children: ReactNode;
};

const AppContext = createContext<Type_context | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: Props) => {
  const { clickedSearch, setSearch, setSearchtoogle, searchValue } =
    SearchInteraction();
  const {
    bookData,
    bookCart,
    count,
    setAPIData,
    addCart,
    Cartcount,
    setBookCart,
    setCount,
    setBookData,
    ajout,
    setAjout,
    handleButtonAdd,
  } = AddItem();

  const {navpanier,setNav} = useNav();

  const clearCart = () => {
    setBookCart([]);
    setCount(0);
    setAjout({ [0]: false });
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const Navtoogle = () => {
    setNav(!navpanier);
  };

  const setBookUpdate = (book: Book_Cart[]) => {
    setBookCart(book);
  };

  const displayButtonAdd = (item: string) => {
    setAjout({ ...ajout, [item]: false });
  };

  const deleteOne = () => {
    setCount(count - 1);
  };

  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        setAPIData,
        bookData,
        searchValue,
        setSearch,
        clickedSearch,
        setSearchtoogle,
        scrollTop,
        bookCart,
        addCart,
        count,
        Cartcount,
        deleteOne,
        Navtoogle,
        navpanier,
        clearCart,
        setBookUpdate,
        ajout,
        handleButtonAdd,
        displayButtonAdd,
      }}
    >
      {children}
      <BooksProvider />
    </AppContext.Provider>
  );
};

function BooksProvider() {
  useAPI();
  return null;
}
