import React , {useEffect, useState} from 'react';
import img from "./../../public/Harry Potter et l'Ordre du Phénix.jpg";
import { useApp } from '../../hooks/Context/AppContext';
import { Book_Cart } from '../../typescript/Types';


const Panier: React.FC = () => {

    const {bookCart, navpanier} = useApp();

    // ---------------recuperation dee données du panier via localstorage----------------------
    // const [parsedCartData, setParsedCartData] = useState<Book_Cart[]>([]);

    // useEffect(() => {
    //     const cartData = localStorage.getItem('bookCart');
    //     if (cartData !== null) {
    //         const parsedData: Book_Cart[] = JSON.parse(cartData);
    //         setParsedCartData(parsedData);
    //     }
    // }, [parsedCartData]);

    // const deletePanierItem = (item_ID: Book_Cart) => {
    //   const updatedCart = parsedCartData.filter((cartItem: Book_Cart) => cartItem.id !== item_ID.id);
    //   setParsedCartData(updatedCart);

    //   localStorage.setItem('bookCart', JSON.stringify(updatedCart));
    // }

    // const clearPanier = () => {
    //   setParsedCartData([]);
    //   localStorage.removeItem('bookCart');
    // };
    

    return (
      <div className={`panier ${navpanier ? "show_" : "hide_"}`}>
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

                  <div className="deleteAll">
                    <h1>
                      <i className="fa fa-trash" id="icon_delete"></i>
                      Vider
                    </h1>
                  </div>
                </div>
              </div>

              <div className="col-12 mt-4">
                <div className="cart">
                  <div className="row gx-2 gx-md-0">
                    {bookCart.length == 0 ? (
                      <h1 className="vide">Panier vide</h1>
                    ) : (
                      bookCart.map((item: any) => (
                        <article
                          className="col-12 d-flex"
                          id="col-12"
                          key={item.id}
                        >
                          <div className="image-titre d-flex">
                            <div className="image"></div>

                            <div className="title">
                              <h3>{item.title}</h3>
                            </div>
                          </div>

                          <div className="delete-prix d-flex">
                            <div className="delete_button  align-item-center d-none d-md-flex">
                              <div className="align-item-center d-flex">
                                <i className="fa fa-trash" id="icon_delete"></i>
                              </div>{" "}
                              <div className="align-item-center d-none d-lg-flex">
                                <p>Effacer</p>
                              </div>
                            </div>

                            <div className="prix">
                              <h1>{item.Price}</h1>
                            </div>
                          </div>
                        </article>
                      ))
                    )}
                  </div>
                </div>

                <div className={`totalPrix ${bookCart.length==0 ? "hide" : "show"}`}>
                  <div className="total_contain d-flex">
                    <div className="texte">
                      <h1>Total : </h1>
                    </div>

                    <div className="prix">
                      <p>350$</p>
                    </div>

                    <div className="payement">
                      <button className="btn">Payer</button>
                    </div>
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