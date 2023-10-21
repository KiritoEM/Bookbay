import React from 'react'
import Nav from '../components/Nav';
import Welcoming_page from '../components/Welcoming_page';
import Suggestion_livres from '../components/Suggestion_livres';
import Head from 'next/head';

export default function page() {
  return (
    <>
       <Head>
          <title>Accueil</title>
       </Head>
        <div className="accueil">
          {/* ---------------barre de navigation--------------- */}
          <Nav />

          {/* ---------------page d' accueil--------------- */}
          <Welcoming_page />

          {/* ---------------barre de navigation--------------- */}
          <Suggestion_livres />
        </div>

    </>
  );
}
