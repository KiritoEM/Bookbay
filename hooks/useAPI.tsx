import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Book } from "../typescript/Types";
import { useApp } from "./Context/AppContext";

export function useAPI() {
  const { setDataList, bookData } = useApp();
  const apiKey = "AIzaSyCizMpgqpWhN_4cMHjIEL6WBpcJ7CdiLlA";
  const searchQuery = "harry potter";

  const cachedData = useMemo(() => {

  //si le tableau venant de AppContext bookData[] est vide
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
                const image = book.volumeInfo.imageLinks?.thumbnail || "image non dispo";
                const description =
                  book.volumeInfo.description || "Description non disponible";

                return { id, title, authors, image, description };
              }
            )
            .filter((book: any) => (book.description !== "Description non disponible"));
          setDataList(extractedData);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données :", error);
          console.log("Détails de l'erreur :", error);
        });
    }
    return bookData;
  }, [setDataList, bookData, apiKey, searchQuery]);

  return cachedData;
}
//AIzaSyBOdoExLNhZIUinkDT_9k26ef8Yo70lxbE
