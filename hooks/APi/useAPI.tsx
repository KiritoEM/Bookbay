import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Book } from "../../typescript/Types";
import { useApp } from "../Context/AppContext";

export function useAPI() {
  const { setAPIData, bookData } = useApp();

  const cachedData = useMemo(() => {
    const apiKey = "AIzaSyDJj52J76k16l9fTl3zYQTB15iK2m1MrV8"; 
    const searchQuery = "harry potter";

    // Si le tableau venant de AppContext bookData[] est vide
    if (bookData.length === 0) {
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
                  imageLinks: any;
                  title: any;
                  authors: any;
                  description: any;
                  image: any;
                };
              }
            ) => {
              const id = book.id;
              const title = book.volumeInfo.title;
              const authors = book.volumeInfo.authors;
              const image = book.volumeInfo.imageLinks?.thumbnail || "image non disponible";
              const description = book.volumeInfo.description || "Description non disponible";

              return { id, title, authors, image, description };
            })
            .filter((book: any) => book.description !== "Description non disponible");
          setAPIData(extractedData);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données :", error);
          console.log("Détails de l'erreur :", error);
        });
    }
    return bookData;
  }, []);

  return cachedData;
}

