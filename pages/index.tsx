import React from 'react'
import Nav from '../components/Navbar/Nav';
import Welcoming_page from '../components/Accueil/Welcoming_page';
import Suggestion_livres from '../components/Accueil/List_livres';
import Head from 'next/head';
import { AppProvider } from '../hooks/Context/AppContext';
import Footer from '../components/footer/Footer';
import Panier from '../components/panier/Panier';

export default function page() {
  return (
    <AppProvider>
      <Head>
        <title>Accueil</title>
      </Head>

      <main>
        <div className="accueil">
          {/* ---------------barre de navigation--------------- */}
          <Nav />

          {/* ---------------page d' accueil--------------- */}
          <Welcoming_page />

          {/* ---------------barre de navigation--------------- */}
          <Suggestion_livres />

          <Panier />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </AppProvider>
  );
}
