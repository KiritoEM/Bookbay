import { Book , Book_Cart, AjoutState} from "./Types"

 interface Type_context {
   bookData: Book[];
   searchValue: string;
   clickedSearch: boolean;
   bookCart: Book_Cart[];
   count: number;
   navpanier: boolean;
   ajout: AjoutState;
   setAPIData: (bookdata: Book[]) => void;
   setSearch: (item: string) => void;
   setSearchtoogle: () => void;
   cancelSearchToggle: () => void;
   scrollTop: () => void;
   addCart: (bookdata: Book_Cart) => void;
   Cartcount: () => void;
   Navtoogle: () => void;
   clearCart: () => void;
   setBookUpdate: (book: Book_Cart[]) => void;
   handleButtonAdd: (item_ID: string) => void;
   displayButtonAdd: (item_ID: string) => void;
   deleteOne: () => void;
 }
export default Type_context;