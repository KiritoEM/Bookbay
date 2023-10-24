import React from 'react';
import img from "./../../public/Harry Potter et l'Ordre du Phénix.jpg"


const Panier = () => {
    return (
      <div className="panier">
        <div className="panier_container d-flex justify-content-center align-item-center">
          <div className="panier_content rounded">
            <div className="row">
              <div className="col-12">
                <div className="cart_couv">
                  <div className="maintitle">
                    <h1>
                      <i className="fa fa-shopping-cart" id="icon_cart"></i>{" "}
                      Votre panier
                    </h1>
                  </div>
                </div>
              </div>

              <div className="col-12 mt-4">
                <div className="cart">
                  <div className="row">
                    <article className="col-12 d-flex" id="col-12">
                      <div className="image-titre d-flex">
                        <div className="image"></div>

                        <div className="title">
                          <h3>Harry Potter et l'Ordre du Phénix</h3>
                        </div>
                      </div>

                      <div className="delete-prix d-flex">
                             <div className="delete_button">
                                <i className="fa fa-trash" id="icon_delete"> Effacer</i>
                             </div>

                             <div className="prix">
                                   <h1>15.9$</h1>
                             </div>
                      </div>
                    </article>

                    <article className="col-12 d-flex" id="col-12">
                      <div className="image-titre d-flex">
                        <div className="image"></div>

                        <div className="title">
                          <h3>Harry Potter et l'Ordre du Phénix</h3>
                        </div>
                      </div>

                      <div className="delete-prix d-flex">
                             <div className="delete_button">
                                <i className="fa fa-trash" id="icon_delete"> Effacer</i>
                             </div>

                             <div className="prix">
                                   <h1>15.9$</h1>
                             </div>
                      </div>
                    </article>

                    <article className="col-12 d-flex" id="col-12">
                      <div className="image-titre d-flex">
                        <div className="image"></div>

                        <div className="title">
                          <h3>Harry Potter et l'Ordre du Phénix</h3>
                        </div>
                      </div>

                      <div className="delete-prix d-flex">
                             <div className="delete_button">
                                <i className="fa fa-trash" id="icon_delete"> Effacer</i>
                             </div>

                             <div className="prix">
                                   <h1>15.9$</h1>
                             </div>
                      </div>
                    </article>

                    <article className="col-12 d-flex" id="col-12">
                      <div className="image-titre d-flex">
                        <div className="image"></div>

                        <div className="title">
                          <h3>Harry Potter et l'Ordre du Phénix</h3>
                        </div>
                      </div>

                      <div className="delete-prix d-flex">
                             <div className="delete_button">
                                <i className="fa fa-trash" id="icon_delete"> Effacer</i>
                             </div>

                             <div className="prix">
                                   <h1>15.9$</h1>
                             </div>
                      </div>
                    </article>

                    <article className="col-12 d-flex" id="col-12">
                      <div className="image-titre d-flex">
                        <div className="image"></div>

                        <div className="title">
                          <h3>Harry Potter et l'Ordre du Phénix</h3>
                        </div>
                      </div>

                      <div className="delete-prix d-flex">
                             <div className="delete_button">
                                <i className="fa fa-trash" id="icon_delete"> Effacer</i>
                             </div>

                             <div className="prix">
                                   <h1>15.9$</h1>
                             </div>
                      </div>
                    </article>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Panier;