import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Book, Book_Cart } from "../../typescript/Types";
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
  // -----------données via API---------------
  const [bookData, setBookData] = useState<Book[]>([]);

  // -----------activation de la recherchr---------------
  const [clickedSearch, setClicked] = useState(false);

  // --------------------------valeur entrée dans la barre de recherche----------------------
  const [searchValue, setSearchValue] = useState<string>(
    "Aucun livre correspondant"
  );

  // -----------activation de la recherchr---------------
  const [bookCart, setBookCart] = useState<Book_Cart[]>([]);

  const [count, setCount] = useState<number>(0);

  const [navpanier, setNav] = useState<boolean>(false);

  const setDataList = (bookdata: Book[]) => {
    setBookData(bookdata);
    console.log("donnés recu depuis useAPI: ", bookData);
  };

  const setSearch = (item: string) => {
    setSearchValue(item);
  };

  const setSearchtoogle = () => {
    setClicked(true);
    console.log(clickedSearch);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const addCart = (bookdata: Book_Cart) => {
    const updatedCart = [...bookCart, bookdata];
    setBookCart(updatedCart);
    // ---------------envoie dee données du panier vers localstorage en le transformant en code json----------------------
    localStorage.setItem("bookCart", JSON.stringify(updatedCart));

    console.log("Livre ajouté", bookdata);
    console.log("Nouveau panier", updatedCart);
  };

  const Cartcount = () => {
    setCount(count + 1);
    localStorage.setItem("bookCartcount", JSON.stringify(count));
  };

  const Navtoogle = () => {
    setNav(!navpanier);
  };


  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        setDataList,
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
        Navtoogle,
        navpanier
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
