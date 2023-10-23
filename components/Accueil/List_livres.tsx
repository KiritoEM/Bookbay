import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import harry1 from "./../../public/harry1.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { useApp } from '../../hooks/Context/AppContext';
import { Book } from '../../typescript/Types';
import image from "./../../public/Babar, Harry Potter & Cie.jpg"
import axios from 'axios';
import { SearchInteraction } from '../../intercations_searchBar/SearchInteraction';

const List_livres: React.FC = () => {
   const {bookData,searchValue,clickedSearch}= useApp();

   const filteredBooks = bookData.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
      
 );

  

  return (
    <div className="list w-100">
      <div className="list_container">
        <div className="row" id="title">
          <div className="col-12  d-flex justify-content-center" id='List'>
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
          filteredBooks.map((book) => (
            <div className="col-md-6 col-lg-4" key={book.id}>
              <article className="box bg-light">
                <div className="box_image">
                  <span className='image'>
                       <img src={`/${book.title}.jpg`} alt="" />
                  </span>
                  <span className="prix d-flex justify-content-end">
                    <h2>Prix: 350$</h2>
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
                    <button className="btn">
                      Ajouter au panier <i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          )))

          :
          (
            bookData.map((book) => (
              <div className="col-md-6 col-lg-4" key={book.id}>
                <article className="box bg-light">
                  <div className="box_image">
                    <span className='image'>
                         <img src={`/${book.title}.jpg`} alt="" />
                    </span>
                    <span className="prix d-flex justify-content-end">
                      <h2>Prix: 350$</h2>
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
                      <button className="btn">
                        Ajouter au panier <i className="fa fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))
          )
        
        }
        </div>
      </div>
    </div>
  );
};

export default List_livres;