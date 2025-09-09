import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  ShoppingBag,
  Scissors,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Novesluzby = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-5 left-4 right-4 z-50 px-6 py-2 rounded-2xl shadow-lg">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" aria-label="Domů">
              <img
                src={`${process.env.PUBLIC_URL}/logocimice.png`}
                alt="Tenis Čimice Logo"
                className="h-12 w-12 mr-2"
              />
            </Link>
            <div className="ml-2 flex flex-col items-center">
              <a
                href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-yellow-300 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/tenis_cimice/?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-yellow-300 mt-1 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menu desktop */}
          <ul className="hidden md:flex md:space-x-4">
            {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map(
              (item) => (
                <li key={item} className="flex-shrink-0 relative group">
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
                    className="hover:text-yellow-300 transition duration-300 font-semibold px-2 py-2"
                  >
                    {item}
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Burger */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <CloseIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden fixed top-[4.5rem] right-0 w-64 bg-amber-50 text-orange-700 shadow-md transform transition-transform duration-500 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } rounded-xl overflow-hidden`}
          >
            <ul className="flex flex-col">
              {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map(
                (item, idx) => (
                  <li
                    key={item}
                    className="border-b border-orange-200"
                    style={{ animation: `fadeIn .3s ease ${(idx + 1) * 60}ms both` }}
                  >
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
                      className="block px-4 py-3 hover:bg-orange-200 transition duration-300 font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main className="pt-24 max-w-screen-xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <section className="relative bg-white rounded-2xl shadow-lg border-t-4 border-yellow-500 p-8 overflow-hidden">
          <div className="absolute -top-12 -right-10 h-40 w-40 bg-yellow-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <header className="text-center relative z-[1] mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-orange-600">Doplňkové služby</h1>
          <p className="text-gray-700 max-w-2xl mx-auto mt-2">
              Profesionální servis a tenisové vybavení na jednom místě.  
              Od vyplétání raket po poradenství s výběrem výbavy.
            </p>
          </header>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 relative z-[1]">
            {/* Prodej */}
            <article className="group relative bg-white rounded-2xl shadow-md p-6 border border-amber-100 hover:shadow-xl transition overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-400" />
              <div className="absolute -top-10 -right-10 h-28 w-28 bg-orange-100 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-orange-50 text-orange-600 grid place-items-center shadow-inner">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-orange-600">Prodej vybavení</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Široký výběr tenisových raket, míčů, omotávek, tašek a dalšího vybavení značky{' '}
                <strong>Babolat</strong>. Rádi poradíme s výběrem.
              </p>
              <Link
                to="/kontakt"
                className="text-orange-600 font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-2"
              >
                Kontaktujte nás <span aria-hidden>→</span>
              </Link>
            </article>

            {/* Vyplétání */}
            <article className="group relative bg-white rounded-2xl shadow-md p-6 border border-amber-100 hover:shadow-xl transition overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-400" />
              <div className="absolute -top-10 -right-10 h-28 w-28 bg-yellow-100 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-yellow-50 text-yellow-600 grid place-items-center shadow-inner">
                  <Scissors className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-yellow-600">Vyplétání raket</h2>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>250 Kč</strong> s vlastním výpletem.  
                Se zakoupeným výpletem dle typu strun:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Babolat RPM Blast (černý)</strong>: 450 Kč</li>
                <li><strong>RPM Rough (žlutý, červený)</strong>: 450 Kč</li>
                <li><strong>RPM Power (modrý, hnědý)</strong>: 400 Kč</li>
                <li><strong>RPM Hurricane (žlutý)</strong>: 400 Kč</li>
                <li><strong>RPM Soft (šedý)</strong>: 400 Kč</li>
                <li><strong>Babolat SYN Gut (žlutý)</strong>: 400 Kč</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto py-8 flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Tenis Čimice</h3>
            <p className="text-gray-400">
              Na Průhonu 812/3, 181 00 Praha 8 <br /> © 2024 Tenis Čimice
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Kontaktujte nás</h3>
            <ul>
              <li className="flex items-center">
                <Mail className="mr-2" />
                <a href="mailto:kptennis@volny.cz" className="text-gray-400 hover:text-white">
                  kptennis@volny.cz
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" />
                <a href="tel:+420602354978" className="text-gray-400 hover:text-white">
                  +420 602 354 978
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" />
                <a href="tel:+420724265022" className="text-gray-400 hover:text-white">
                  +420 724 265 022
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Novesluzby;
