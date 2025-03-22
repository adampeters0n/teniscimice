import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Onasnas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-0 left-0 right-0 z-50">
        {/* Obal s maximální šířkou a centrováním */}
        <div className="max-w-screen-xl mx-auto py-4 px-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/logocimice.png`}
                  alt="Tenis Čimice Logo"
                  className="h-12 w-12 mr-2"
                />
              </Link>
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
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 mt-2"
                >
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

            {/* Menu pro větší obrazovky */}
            <ul className="hidden md:flex md:space-x-4">
              {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
                <li key={item} className="flex-shrink-0">
                  <Link
                    to={
                      item === 'O nás'
                        ? '/o-nas'
                        : item === 'Aktuality'
                        ? '/aktuality'
                        : item === 'Kempy'
                        ? '/kempy'
                        : item === 'Ceník'
                        ? '/cenik'
                        : item === 'Školička'
                        ? '/skolicka'
                        : item === 'Doplňkové služby'
                        ? '/doplnkove-sluzby'
                        : item === 'Kontakt'
                        ? '/kontakt'
                        : '/'
                    }
                    className="hover:text-yellow-300 transition duration-300 font-semibold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Menu pro mobily */}
        <div
          className={`md:hidden fixed top-16 right-0 w-64 bg-white text-black shadow-lg transform transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } rounded-lg overflow-hidden`}
        >
          <ul className="flex flex-col">
            {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
              <li key={item} className="border-b border-gray-300">
                <Link
                  to={
                    item === 'O nás'
                      ? '/o-nas'
                      : item === 'Aktuality'
                      ? '/aktuality'
                      : item === 'Kempy'
                      ? '/kempy'
                      : item === 'Ceník'
                      ? '/cenik'
                      : item === 'Školička'
                      ? '/skolicka'
                      : item === 'Doplňkové služby'
                      ? '/doplnkove-sluzby'
                      : item === 'Kontakt'
                      ? '/kontakt'
                      : '/'
                  }
                  className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-20 max-w-screen-xl mx-auto mt-8 mb-16 px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-orange-600 text-center">
            Tenisová škola Čimice
          </h1>

          <p className="text-lg mb-10 text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Tenisová škola působící na dvorcích Sokola Čimice, ul. Na Průhonu, Praha 8.
            Nabízíme výuku dětí všech věkových kategorií.
          </p>

          <div className="space-y-10">
            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">
                Tenisová tréninková příprava
              </h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Probíhá skupinovou nebo individuální formou v jakémkoliv věku. Jednotlivé tréninky jsou
                zaměřené na rozvoj pohybových schopností a nácvik techniky na základě správně volených
                koordinačních cvičení s následným zdokonalováním v soutěžních podmínkách. V hlubším zájmu
                je možné zařazení do programu závodního tenisu. Tréninky probíhají od pondělí do pátku od 13
                do 19 hodin.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Školička minitenisu</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Tenis pro děti od 4 do 7 let je zaměřen na rozvoj pohybových schopností. Během přípravy se
                děti pestrými a všestrannými cvičeními učí první tenisové krůčky formou hry.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">
                Hlavní cíl naší tenisové školy
              </h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Individuální přístup ke každému hráči. Naším cílem je naučit děti nejen dovednostem techniky a
                taktiky, ale také vést je k rozvoji osobnosti na základě fair play a správné životosprávy. Chceme
                u dětí vytvořit vztah k tenisu jako celoživotní aktivitě přispívající ke zdravému životnímu stylu.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Závodní tenis</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Naše družstva se úspěšně účastní soutěží Českého tenisového svazu ve všech věkových kategoriích:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>BABYTENIS</li>
                <li>MLADŠÍ ŽACTVO</li>
                <li>STARŠÍ ŽACTVO</li>
                <li>DOROST</li>
                <li>DOSPĚLÍ</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">
                Příměstské kempy a soustředění v Malé Skále
              </h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Během prázdnin pořádáme vždy čtyři příměstské kempy a jedno pobytové soustředění pro závodní i
                rekreační hráče. Děti zde mají možnost zlepšovat své tenisové dovednosti, navazovat nové kamarádské
                vztahy a užít si spoustu pohybu a zábavy při dalších sportovních aktivitách.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Turnaje</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Každoročně pořádáme klubové turnaje pro všechny děti, například Vánoční turnaje a turnaje na závěr
                letní sezóny. Pro registrované hráče pořádáme turnaje v rámci Českého tenisového svazu.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Výuka dospělých</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Tenisovou výuku nabízíme také dospělým formou individuálních hodin.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Trenérské vedení</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Tréninky jsou vedeny zkušenými trenéry I., II. a III. třídy s několikaletou praxí a odborným vzděláním
                pod záštitou Českého tenisového svazu.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-semibold text-red-600">Další aktivity</h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
                V areálu je menším dětem k dispozici dětské hřiště, pingpongový stůl, basketbalový koš a
                víceúčelová plocha pro další sportovní aktivity.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
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

export default Onasnas;
