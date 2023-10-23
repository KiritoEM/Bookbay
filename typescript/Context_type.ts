import { Book } from "./Types"

 interface Type_context {
     bookData: Book[],
     setDataList: (bookdata:Book[])=> void,
     bookDataAffichage: Book[],
     searchValue:string,
     setSearch : (item: string)=> void,
     setSearchtoogle : ()=> void,
     clickedSearch:boolean,
  }
export default Type_context;