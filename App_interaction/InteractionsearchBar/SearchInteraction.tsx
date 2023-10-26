import React, { useState } from 'react';
import { Book } from '../../typescript/Types';

export  function SearchInteraction() {
   const [clickedSearch, setClicked] = useState(false);
   const [searchValue, setSearchValue] = useState<string>(
      "Aucun livre correspondant"
    );

    const setSearch = (item: string) => {
      setSearchValue(item);
    };
  
    const setSearchtoogle = () => {
      setClicked(true);
    };
      
   return {clickedSearch,searchValue,setSearch,setSearchtoogle};
  
}
