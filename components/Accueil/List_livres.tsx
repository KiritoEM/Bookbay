import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import harry1 from "./../../public/harry1.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { useApp } from '../../hooks/Context/AppContext';
import { AjoutState} from '../../typescript/Types';
import image from "./../../public/Babar, Harry Potter & Cie.jpg"
import axios from 'axios';
import { SearchInteraction } from '../../intercations_searchBar/SearchInteraction';
import { BookPrices } from '../../bookPrices/BookPrices';
import { scrollToList } from '../routes/scrollToList';

const List_livres: React.FC = () => {
   const {bookData,searchValue,clickedSearch,addCart,count,Cartcount,handleAdd, ajout,setSearch,scrollTop}= useApp();
   const {bookPrices} = BookPrices();

   const booksWithPrices = bookData.map((book) => {
    const priceInfo = bookPrices.find((item) => item.title === book.title);
    const price = priceInfo ? priceInfo.price : 0;
  
    return {
      ...book,
      price,
    };
  });

   const filteredBooks = booksWithPrices.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
 );


  return (
    <div className={`w-100 list ${clickedSearch ? "down" : "up"}`}>
      <div className="list_container">
        <div className="row" id="title">
          <div className="col-12  d-flex justify-content-center" id="List">
            <div className="titre_list text-center">
              <div className="subtitle">
                <h2>
                  <i className="fa fa-book flip"></i> Listes
                </h2>
              </div>

              <div className="maintitle">
                <h1>Liste de livres disponibles</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-4 gy-4" id="content">
          {clickedSearch ? (
            filteredBooks.length === 0 ? (
              <div className="col-12 text-center">
                <h1 className="vide">
                  Aucun livre correspondant à: <span>"{searchValue}"</span>
                </h1>
              </div>
            ) : (
              filteredBooks.map((book) => (
                <div className="col-md-6 col-lg-4" key={book.id}>
                  <article className="box bg-light">
                    <div className="box_image">
                      <span className="image">
                        <img src={`/${book.title}.jpg`} alt="" />
                      </span>
                      <span className="prix d-flex justify-content-end">
                        <h2>Prix: {book.price} €</h2>
                      </span>
                    </div>

                    <div className="box_content">
                      <div className="titre_auth">
                        <div className="titre">
                          <h1>
                            <span>Titre</span> : {book.title}
                          </h1>
                        </div>
                      </div>

                      <div className="lign"></div>

                      <div className="synopsis">
                        <p>{book.description}</p>
                      </div>

                      <div className="cart d-flex justify-content-center">
                        {ajout[book.id] ? (
                          <div>
                            <button className="btn success">
                              Ajouté au panier
                              <i className="fa fa-check"></i>
                            </button>
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              Cartcount();
                              handleAdd(book.id);
                            }}
                            className=""
                          >
                            <button
                              className="btn"
                              onClick={() => {
                                addCart({
                                  id: book.id,
                                  title: book.title,
                                  Price: book.price,
                                  image: book.image,
                                });
                              }}
                            >
                              Ajouter au panier{" "}
                              <i className="fa fa-shopping-cart"></i>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
              ))
            )
          ) : (
            booksWithPrices.map((book) => (
              <div className="col-md-6 col-lg-4" key={book.id}>
                <article className="box bg-light">
                  <div className="box_image">
                    <span className="image">
                      <img src={`/${book.title}.jpg`} alt="" />
                    </span>
                    <span className="prix d-flex justify-content-end">
                      <h2>Prix: {book.price} €</h2>
                    </span>
                  </div>

                  <div className="box_content">
                    <div className="titre_auth">
                      <div className="titre">
                        <h1>
                          <span>Titre</span> : {book.title}
                        </h1>
                      </div>
                    </div>

                    <div className="lign"></div>

                    <div className="synopsis">
                      <p>{book.description}</p>
                    </div>

                    <div className="cart d-flex justify-content-center">
                      {ajout[book.id] ? (
                        <div>
                          <button className="btn success">
                            Ajouté au panier
                            <i className="fa fa-check"></i>
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            Cartcount();
                            handleAdd(book.id);
                          }}
                          className=""
                        >
                          <button
                            className="btn"
                            onClick={() => {
                              addCart({
                                id: book.id,
                                title: book.title,
                                Price: book.price,
                                image: book.image,
                              });
                            }}
                          >
                            Ajouter au panier{" "}
                            <i className="fa fa-shopping-cart"></i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))
          )}

          {clickedSearch && (
            <div className="All text-center mt-5">
              <button className="btn" onClick={()=>{setSearch("Harry Potter"); scrollTop()}}>
                {" "}
                <i className="fa fa-book flip"></i> Voir la liste de livres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List_livres;