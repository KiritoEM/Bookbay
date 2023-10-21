import React from "react";
import Logo from "./../../public/Store.png";
import 'font-awesome/css/font-awesome.min.css';
import Link from "next/link";


const Nav = () => {
    return (
        <div className="nav w-100">
          <div className="nav_primary w-100">
            <div className="contain d-flex">
              <div className="logo d-flex">
                <div className="image">
                  <img src="/Store.png" alt="" />
                </div>
                <div className="title">
                  <h1>
                    Book<span>Bay</span>
                  </h1>
                </div>
              </div>
    
              <div className="search_bar">
                <div className="input-group d-flex">
                  <div className="input1">
                    <input type="text" className="form-control" placeholder="Recherchez un livre..."/>
                  </div>
                  <div className="input-group-append h-100" id="search">
                    <button className="btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="iconesHero">
                   <div className="iconesHero_container d-flex">
                         <div className="cart d-flex">
                               <span className="icon"> <i className="fa fa-shopping-cart"></i></span>
                               <span className="count"><p>1</p></span>
                         </div>
    
                         <div className="user d-flex">
                            <i className="fa fa-user"></i>  
                         </div>
                   </div>
              </div>
            </div>
          </div>
    
          <div className="nav_secondary w-100">
                <div className="contain d-flex justify-content-center">
                       <div className="toggle">
                             <ul className="d-flex text-center">
                                 <Link href="#"className="active"><li>Accueil</li></Link>
                                 <Link href="/listes"><li>Listes des livres</li></Link>
                                 <Link href=""><li>Contact</li></Link>
                             </ul>
                       </div>
                </div>
          </div>
        </div>
      );
};

export default Nav;