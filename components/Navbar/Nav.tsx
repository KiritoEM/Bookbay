import React, { useEffect, useState } from "react";
import Logo from "./../../public/Store.png";
import 'font-awesome/css/font-awesome.min.css';
import Link from "next/link";
import { scrollToList } from "../routes/scrollToList";
import { SearchInteraction } from "../../intercations_searchBar/SearchInteraction";
import { useApp } from "../../hooks/Context/AppContext";
import { useRouter } from "next/router";


const Nav : React.FC = () => {
  const router = useRouter();


  const { scroll } = scrollToList();
  const {setSearch,setSearchtoogle, scrollTop, count, Navtoogle} = useApp();

  const [element,setElement]= useState("");

  //  --------------------------Search interaction------------------------------

  const { Search_interaction } = SearchInteraction();

  //   --------------------Navbar toggle-------------------------------------

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const ClickItem = () => {
    setOpen(false);
  };

  const change=  (e:any) => {
      setSearch(e.target.value)
  }

  // -------------navigation with useRouter--------------------

  // const handleNavigation = () => {
  //   router.push('/panier');
  // };

  // const [cartcount, setCount] = useState<number>(0);

  // useEffect(() => {
  //     const cartData = localStorage.getItem('bookCartcount');
  //     if (cartData !== null) {
  //         const parsedCount: number = JSON.parse(cartData);
  //         setCount(parsedCount);
  //     }
  // }, []);

  
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
            <form
              action=""
              onSubmit={(e: any) => {
                e.preventDefault();
                setSearchtoogle();
                scrollTop();
              }}
            >
              <div className="input-group d-flex">
                <div className="input1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Entrez le titre du livre..."
                    onChange={change}
                  />
                </div>
                <div className="input-group-append h-100" id="search">
                  <button
                    className="btn"
                    onClick={() => {
                      setSearchtoogle();
                      scrollTop();
                    }}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="iconesHero">
            <div className="iconesHero_container d-flex" onClick={Navtoogle}>
              <div className="cart d-flex">
                <span className="icon">
                  {" "}
                  <i className="fa fa-shopping-cart"></i>
                </span>
                <span className="count">
                  <p>{count}</p>
                </span>
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
          <div className={`toggle ${open ? "open_" : "close_"}`}>
            <ul className="d-md-flex text-center">
              <a href="/" className="active" onClick={ClickItem}>
                <li>Accueil</li>
              </a>
              <a
                onClick={() => {
                  scroll();
                  ClickItem();
                }}
              >
                <li>Listes des livres</li>
              </a>
              <Link href="" onClick={ClickItem}>
                <li>Contact</li>
              </Link>

              <a className="d-md-none">
                <div className="search_bar d-flex justify-content-center">
                  <form
                    action=""
                    onSubmit={(e: any) => {
                      e.preventDefault();
                      setSearchtoogle();
                      scrollTop();
                    }}
                  >
                    <div className="input-group d-flex justify-content-center">
                      <div className="input1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Entrez le titre du livre..."
                          onChange={change}
                        />
                      </div>
                      <div className="input-group-append" id="search">
                        <button
                          className="btn"
                          onClick={() => {
                            setSearchtoogle();
                            scroll();
                            ClickItem();
                          }}
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </a>
            </ul>
          </div>

          <div
            className="hamburger_button justify-content-center d-flex d-md-none"
            onClick={handleClick}
          >
            <h1>
              menu <i className="fa fa-bars" id="bar"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav