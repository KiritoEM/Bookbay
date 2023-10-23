import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Book } from "../../typescript/Types";
import Type_context from "../../typescript/Context_type";
import { useAPI } from "../useAPI";
import { SearchInteraction } from "../../intercations_searchBar/SearchInteraction";

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
  const {Search_interaction} = SearchInteraction();
  const [bookData, setBookData] = useState<Book[]>([]);
  const [clickedSearch, setClicked] = useState(false);
  const [ bookDataAffichage, setBookDataAff] = useState<Book[]>(bookData);
  const [ searchValue, setSearchValue] = useState<string>("Aucun livre correspondant");

  const setDataList = (bookdata: Book[]) => {
    setBookData(bookdata);
    console.log('donnés recu depuis useAPI: ',bookData)
  };

  let booklist: Book[]=[];

 
  const setSearch = (item:string) => {
    setSearchValue(item);
  };

  const setSearchtoogle  = () => {
     setClicked(true);
    console.log(clickedSearch);
  };

  const scrollTop = () => {
      window.scrollTo(0,0);
  };

  useEffect(() => {
    
  }, []);

  return (
    <AppContext.Provider value={{ setDataList, bookData ,searchValue,setSearch, bookDataAffichage,clickedSearch,setSearchtoogle, scrollTop}}>
      {children}
      <BooksProvider /> 
    </AppContext.Provider>
  );
};

function BooksProvider() {
  useAPI();

  return null;
}
