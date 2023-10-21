import React from 'react';
import Image from 'next/image';
import harry1 from "./../../public/harry1.jpg";

const Suggestion_livres: React.FC = () => {
    return (
      <div className="suggestion">
        <div className="suggestion_container">
          <div className="row" id="title">
            <div className="col-12  d-flex justify-content-center">
              <div className="titre_suggestion text-center">
                <div className="subtitle">
                  <h2>
                    <i className="fa fa-book flip"></i> Suggestion
                  </h2>
                </div>

                <div className="maintitle">
                  <h1>Notre suggestion de livres</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4" id="content">
            <div className="col-4">
              <div className="box">
                <div className="box_image">
                  <img src="/harry1.jpg" alt="" className='image' />
                </div>

                <div className="box_content">
                  <div className="titre_prix d-flex">
                    <span className="titre">
                        <h1>Harry- potter</h1>
                    </span>

                    <span className="prix">
                        <h1></h1>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4"></div>
            <div className="col-4"></div>

            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
};

export default Suggestion_livres;