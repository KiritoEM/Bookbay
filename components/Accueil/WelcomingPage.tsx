import React from 'react';
import {scrollToList} from '../routes/scrollToList';
import { useApp } from '../../hooks/Context/AppContext';

const Welcoming_page: React.FC = () => {
  const {clickedSearch} = useApp();

  const {scroll} =scrollToList();

    return (
      <div className={`welcoming ${clickedSearch ? "hide" : "show"}`}>
        <div className="welcoming_container">
          <div className="welcom_desc">
            <div className="main-title text-center">
              <h1>
                Découvrez la Magie des <span>Livres d' Harry Potter</span>
              </h1>

              <div className="boutons_list d-flex justify-content-center">
                <div className="list_button d-flex">
                  <button className="btn d-flex" onClick={scroll}>
                    <div className="book_icon">
                       <i className="fa fa-book"></i>
                    </div>
                    <p>Listes</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="waves">
          <div className="waves_container">
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgb(21, 124, 207, 0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgb(21, 124, 207, 0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgb(21, 124, 207, 0.3)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="7"
                  fill="rgb(21, 124, 207)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
};

export default Welcoming_page;