import React, { useState } from 'react';
import { Mail, Phone, Menu as MenuIcon, X as CloseIcon, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Novesluzby = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-amber-50">
     <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-5 left-4 right-4 z-50 px-6 py-2 rounded-b-2xl rounded-t-2xl shadow-lg">
  <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <Link to="/">
        <img
          // Logo z public složky
          src={`${process.env.PUBLIC_URL}/logocimice.png`}
          alt="Tenis Čimice Logo"
          className="h-12 w-12 mr-2"
        />
      </Link>
      {/* Odebrán text "Tenis Čimice", zachovány sociální ikony */}
      <div className="ml-4 flex flex-col items-center">
        <a
          href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/tenis_cimice/?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 mt-2"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </div>

    {/* Hamburger menu pro mobilní zobrazení */}
    <div className="flex items-center md:hidden">
      <button onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? (
          <CloseIcon className="h-8 w-8" />
        ) : (
          <MenuIcon className="h-8 w-8" />
        )}
      </button>
    </div>

    {/* Menu pro větší obrazovky */}
    <ul className="hidden md:flex md:space-x-4">
      {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
        <li key={item} className="flex-shrink-0">
          <Link
            to={
              item === 'O nás' ? '/o-nas' :
              item === 'Aktuality' ? '/aktuality' :
              item === 'Kempy' ? '/kempy' :
              item === 'Ceník' ? '/cenik' :
              item === 'Školička' ? '/skolicka' :
              item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
              item === 'Kontakt' ? '/kontakt' :
              '/'
            }
            className="hover:text-yellow-300 transition duration-300 font-semibold"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

    {/* Menu pro mobily */}
    <div
  className={`md:hidden fixed top-[4.5rem] right-0 w-64 bg-amber-50 text-orange-700 shadow-md transform transition-transform duration-500 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } rounded-xl overflow-hidden`}
>
  <ul className="flex flex-col">
    {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
      <li key={item} className="border-b border-orange-200">
        <Link
          to={
            item === 'O nás' ? '/o-nas' :
            item === 'Aktuality' ? '/aktuality' :
            item === 'Kempy' ? '/kempy' :
            item === 'Ceník' ? '/cenik' :
            item === 'Školička' ? '/skolicka' :
            item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
            item === 'Kontakt' ? '/kontakt' :
            '/'
          }
          className="block px-4 py-3 hover:bg-orange-200 transition duration-300 font-semibold"
          onClick={() => setIsMenuOpen(false)}
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
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-orange-600 text-center">
            Doplňkové služby
          </h1>
          
          <p className="text-lg mb-10 text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Nabízíme kvalitní tenisové vybavení a profesionální vyplétání tenisových raket pro hráče všech úrovní.
          </p>

          <div className="space-y-10">
            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Prodej tenisového vybavení</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Nabízíme široký výběr tenisových raket, míčů, omotávek, tašek a dalšího tenisového vybavení od značky Babolat. Naši trenéři vám rádi poradí při výběru vhodné výbavy.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Vyplétání tenisových raket</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Cena za vyplétání s vlastním výpletem: <strong>250 Kč</strong>.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Cena za vyplétání se zakoupeným výpletem závisí na zvoleném typu strun:
              </p>
              <ul className="text-gray-700 list-disc list-inside mt-4">
                <li><strong>Babolat RPM Blast (Černý)</strong>: 450 Kč</li>
                <li><strong>RPM Rough (Žlutý, Červený)</strong>: 450 Kč</li>
                <li><strong>RPM Power (Modrý, Hnědý)</strong>: 400 Kč</li>
                <li><strong>RPM Hurricane (Žlutý)</strong>: 400 Kč</li>
                <li><strong>RPM Soft (Šedý)</strong>: 400 Kč</li>
                <li><strong>Babolat SYN Gut (Žlutý)</strong>: 400 Kč</li>
              </ul>
            </div>
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

export default Novesluzby;
