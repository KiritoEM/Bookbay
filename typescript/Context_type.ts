import { Book , Book_Cart} from "./Types"

 interface Type_context {
     bookData: Book[],
     searchValue:string,
     clickedSearch:boolean,
     bookCart: Book_Cart[],
     count: number,
     navpanier: boolean,
     setDataList: (bookdata:Book[])=> void,
     setSearch : (item: string)=> void,
     setSearchtoogle : ()=> void,
     scrollTop : ()=> void,
     addCart: (bookdata:Book_Cart)=> void,
     Cartcount: ()=> void,
     Navtoogle: ()=> void,
     clearCart: ()=> void,
     setBookUpdate: (book: Book_Cart[])=> void,
  }
export default Type_context;