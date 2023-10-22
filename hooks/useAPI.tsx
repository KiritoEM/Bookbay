import { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../typescript/Types";

export function useAPI() {
  const [data, setData] = useState<Book[]>([]);

  const apiKey = "AIzaSyDd7dkpqLUmH1HthzcHgohobNtKNS5UrRk";
  const searchQuery = "harry potter";


  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`
      )
      .then((response) => {
        const books = response.data.items;
        const extractedData = books
          .map(
            (book: {
              id: any;
              volumeInfo: {
                imageLinks: any; title: any; authors: any; description: any ,image: any
};
            }) => {
              const id = book.id;
              const title = book.volumeInfo.title;
              const authors = book.volumeInfo.authors;
              const image = book.volumeInfo.imageLinks?.thumbnail || "image non dispo";
              const description =
                book.volumeInfo.description || "Description non disponible";


          return {id,title,authors,image,description};
            }
          )
           .filter((book:any) => (book.description !== "Description non disponible")); 

           
           console.log("données depuis l ' API Google Books: ",extractedData);

        setData(extractedData);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        console.log("Détails de l'erreur :", error);
      });
  }, []);

  return {data}
}



// AIzaSyD_q2zpAdbO5nz89q1RVmPefYwIpAMVEVw

//AIzaSyDd7dkpqLUmH1HthzcHgohobNtKNS5UrRk
