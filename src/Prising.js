import React, { useState } from 'react';
import { Mail, Phone, Menu as MenuIcon, X as CloseIcon, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Prising = () => {
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
  <section className="bg-white rounded-lg shadow-lg p-12 mb-16">
    <h1 className="text-5xl font-extrabold mb-6 text-orange-600 text-center">
      Ceník tenisové školy
    </h1>
    <p className="text-lg mb-10 text-gray-600 text-center max-w-2xl mx-auto">
      Vyberte si z našich tréninků a pronájmů. Nabízíme letní i zimní možnosti s flexibilními tarify.
    </p>

        {/* Pronájem kurtů letní sezona */}
        <h2 className="text-4xl font-bold mt-16 mb-8 text-center text-gray-800">Pronájem tenisových kurtů (letní sezona)</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { name: 'Antukové kurty', price: '200 Kč / 1h', description: '180 Kč / 1h s předplatným na sezonu.' },
        { name: 'Kurty s umělou trávou', price: '200 Kč / 1h', description: '180 Kč / 1h s předplatným.' },
        { name: 'S osvětlením', price: '220 Kč / 1h', description: 'Příplatek za osvětlení.' }
      ].map((service) => (
        <div key={service.name} className="border-2 border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 hover:border-orange-400 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
          <p className="text-4xl font-extrabold text-orange-500 mb-4">{service.price}</p>
          <p className="text-md text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>

    {/* Mezera mezi sekcemi */}
    <div className="my-16"></div>

    {/* Letní sezona */}
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Letní sezona 2024 (8. 4. - 5. 10. 2024)</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Jeden hráč + trenér', price: '590 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Dva hráči + trenér', price: '320 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Tři hráči + trenér', price: '240 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Čtyři hráči + trenér', price: '190 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Skupina více hráčů', price: '170 Kč / 1h', description: 'Skupinový trénink s trenérem.' }
      ].map((service) => (
        <div key={service.name} className="border-2 border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 hover:border-orange-400 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
          <p className="text-4xl font-extrabold text-orange-500 mb-4">{service.price}</p>
          <p className="text-md text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>

    {/* Pronájem haly zimní sezona */}
    <h2 className="text-4xl font-bold mt-16 mb-8 text-center text-gray-800">Pronájem haly (zimní sezona 2024/2025)</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { time: '07:00 - 14:00', weekday: '400 Kč / 1h', weekend: '400 Kč / 1h' },
        { time: '14:00 - 21:00', weekday: '530 Kč / 1h', weekend: '400 Kč / 1h' },
        { time: '21:00 - 23:00', weekday: '400 Kč / 1h', weekend: '400 Kč / 1h' }
      ].map((session) => (
        <div key={session.time} className="border-2 border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 hover:border-orange-400 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{session.time}</h3>
          <p className="text-lg font-bold text-orange-500 mb-2">Po-Pá: {session.weekday}</p>
          <p className="text-lg font-bold text-orange-500">So-Ne: {session.weekend}</p>
        </div>
      ))}
    </div>

    {/* Předplatné na celou sezónu */}
    <div className="mt-8 p-6 bg-gray-50 border-2 border-gray-300 rounded-lg text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Předplatné na celou sezónu</h3>
      <p className="text-lg text-gray-700">
        7. 10. 2024 - 4. 4. 2025: 1 hodina za 390 Kč nebo 1 hodina za 490 Kč
      </p>
    </div>

    {/* Zimní sezona */}
    <h2 className="text-4xl font-bold mt-16 mb-8 text-center text-gray-800">Zimní sezona 2024/2025 (7. 10. 2024 - 4. 4. 2025)</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Jeden hráč + trenér', price: '790 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Dva hráči + trenér', price: '410 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Tři hráči + trenér', price: '330 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: 'Čtyři hráči + trenér', price: '250 Kč / 1h', description: 'Tréninková lekce s trenérem.' },
        { name: '5 a více hráčů + trenér', price: '220 Kč / 1h', description: 'Skupinový trénink s trenérem.' }
      ].map((service) => (
        <div key={service.name} className="border-2 border-gray-300 rounded-lg p-6 text-center bg-gray-50 hover:bg-gray-100 hover:border-orange-400 transition-all">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
          <p className="text-4xl font-extrabold text-orange-500 mb-4">{service.price}</p>
          <p className="text-md text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
    {/* Informativní sekce */}
    <div className="mt-16 p-6 bg-orange-50 rounded-lg shadow-md">
      <h3 className="text-3xl font-bold text-orange-600 mb-4">Důležité informace</h3>
      <p className="text-gray-800 mb-4">
        Cena je uvedena za jednu tréninkovou lekci a zahrnuje trenéra, pronájem kurtu, míče, pomůcky, DPH, pojištění.
        Platba tréninků probíhá formou předplaceného kreditu, ze kterého se hráčům odečítají pouze odehrané tréninky v
        daném počtu hráčů. Systém umožňuje tréninky kombinovat v různých počtech hodin a hráčů.
      </p>
      <p className="text-gray-800 mb-4 font-semibold">
        Výhoda platebního systému naší tenisové školy dle dodržování pravidel omluv:
      </p>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li>Neprobíhá předem úhrada celé sezony</li>
        <li>Neprobíhá úhrada prázdnin a svátků</li>
        <li>Platba kreditu probíhá po vyčerpání a je zasílán elektronický přehled</li>
        <li>Hradí se pouze reálně odehrané hodiny dle tarifu</li>
        <li>Možnost variability počtu tréninků a spoluhráčů</li>
        <li>Trénink hráčům nepropadá při zrušení z důvodu nepřízně počasí</li>
      </ul>
      <p className="text-gray-800 font-semibold">
        Uvedené ceny TŠ platí pro děti trénující pravidelně a jsou členy sokolské organizace. Nečlenové mají cenu o 10 % vyšší.
      </p>
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

export default Prising;
