import React, { useState } from 'react';
import { Mail, Phone, Menu as MenuIcon, X as CloseIcon, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Minitenis = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-0 left-0 right-0 z-50 py-4 px-6">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logocimice.png"
                alt="Tenis Čimice Logo"
                className="h-12 w-12 mr-2"
              />
            </Link>
            {/* Social Media Icons */}
            <div className="ml-4 flex flex-col items-center">
              <a href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 mt-2">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? (
                <CloseIcon className="h-8 w-8" />
              ) : (
                <MenuIcon className="h-8 w-8" />
              )}
            </button>
          </div>
          <ul className={`hidden md:flex md:space-x-4`}>
            {['Domů','O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
              <li key={item} className="flex-shrink-0">
                <Link
                  to={
                    item === 'Domů' ? '/' :
                    item === 'O nás' ? '/o-nas' :
                    item === 'Aktuality' ? '/aktuality' :
                    item === 'Kempy' ? '/kempy' :
                    item === 'Ceník' ? '/cenik' :
                    item === 'Školička' ? '/skolicka' :
                    item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                    item === 'Kontakt' ? '/kontakt' :
                    '#'
                  }
                  className="hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-16 right-0 w-64 bg-white text-black shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} rounded-lg overflow-hidden`}>
            <ul className="flex flex-col">
              {['Domů','O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
                <li key={item} className="border-b border-gray-300">
                  <Link
                    to={
                      item === 'Domů' ? '/' : 
                      item === 'O nás' ? '/o-nas' :
                      item === 'Aktuality' ? '/aktuality' :
                      item === 'Kempy' ? '/kempy' :
                      item === 'Ceník' ? '/cenik' :
                      item === 'Školička' ? '/skolicka' :
                      item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                      item === 'Kontakt' ? '/kontakt' :
                      '#'
                    }
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </nav>
      </header>

      <main className="pt-20 max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
  <section className="bg-white rounded-lg shadow-lg p-12 mb-16 relative overflow-hidden">

    
    {/* Section Header */}
    <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-extrabold mb-6 text-orange-600 text-center">
          Školička Minitenisu
        </h1>
        <p className="text-lg mb-10 text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
          Pro děti od 4 až 7 let: Seznamte své děti s tenisem s pomocí speciálních pomůcek a her!
        </p>
      </div>
      
    </div>

    {/* Content Blocks */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Trénink formou hry</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Tréninková jednotka zahrnuje přivítání, zahřátí, cvičení na koordinaci, údery a tenisové hry. Hravá forma tréninku podporuje zábavu i učení.
        </p>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Cíl minitenisu</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Cílem je naučit děti základní tenisové dovednosti zábavnou formou. Děti se učí soutěžit, pomáhat si a být samostatné, což jim pomáhá nejen na kurtu, ale i v životě.
        </p>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Socializace dětí</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Děti navazují kamarádství, učí se spolupracovat a tvoří tým. Tento aspekt je pro nás stejně důležitý jako technický pokrok.
        </p>
      </div>

      <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Příprava na opravdový tenis</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ve věku sedmi let jsou děti připravené přejít na skutečný tenis, se základy úderů a kontrolou míče. Je to přirozený přechod díky jejich hravému tréninku.
        </p>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-12">
      <a href="/kontakt" className="bg-orange-600 text-white text-lg font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-700 transition">
        Přihlásit
      </a>
    </div>
  </section>
</main>


<footer className="bg-gray-800 text-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between">
    <div className="mb-4 md:mb-0">
      <h3 className="text-2xl font-semibold mb-2">Tenis Čimice</h3>
      <p className="text-gray-400">
        Na Průhonu 812/3, 181 00 Praha 8 <br />
        © 2024 Tenis Čimice
      </p>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">Kontaktujte nás</h3>
      <ul>
        <li className="flex items-center">
          <Mail className="mr-2" />
          <a
            href="mailto:kptennis@volny.cz"
            className="text-gray-400 hover:text-white"
          >
            kptennis@volny.cz
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="mr-2" />
          <a
            href="tel:+420602354978"
            className="text-gray-400 hover:text-white"
          >
            +420 602 354 978
          </a>
        </li>
        <li className="flex items-center">
          <Phone className="mr-2" />
          <a
            href="tel:+420724265022"
            className="text-gray-400 hover:text-white"
          >
            +420 724 265 022
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Minitenis;