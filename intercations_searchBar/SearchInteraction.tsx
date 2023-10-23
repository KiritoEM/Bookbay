import React from 'react';
import { Book } from '../typescript/Types';

export  function SearchInteraction() {

    let book_list_filtered: Book[]= [];

      const Search_interaction= (search_Element:Book[], selectedElement: string) => {
           search_Element.filter((element) => element.title === selectedElement);
      };
      
   return {Search_interaction};
  
}
