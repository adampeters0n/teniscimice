import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Novinky = () => {
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

          {/* Desktop menu */}
          <ul className="hidden md:flex md:space-x-4">
            {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
              <li key={item} className="flex-shrink-0 relative group">
                <Link
                  to={
                    item === 'O nás' ? '/o-nas' :
                    item === 'Aktuality' ? '/aktuality' :
                    item === 'Kempy' ? '/kempy' :
                    item === 'Ceník' ? '/cenik' :
                    item === 'Školička' ? '/skolicka' :
                    item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                    item === 'Kontakt' ? '/kontakt' : '/'
                  }
                  className="hover:text-yellow-300 transition duration-300 font-semibold px-2 py-2"
                >
                  {item}
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <CloseIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>

          {/* Mobile drawer */}
          <div
            className={`md:hidden fixed top-[4.5rem] right-0 w-64 bg-amber-50 text-orange-700 shadow-md transform transition-transform duration-500 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } rounded-xl overflow-hidden`}
          >
            <ul className="flex flex-col">
              {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item, idx) => (
                <li
                  key={item}
                  className="border-b border-orange-200"
                  style={{ animation: `fadeIn .3s ease ${(idx + 1) * 60}ms both` }}
                >
                  <Link
                    to={
                      item === 'O nás' ? '/o-nas' :
                      item === 'Aktuality' ? '/aktuality' :
                      item === 'Kempy' ? '/kempy' :
                      item === 'Ceník' ? '/cenik' :
                      item === 'Školička' ? '/skolicka' :
                      item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                      item === 'Kontakt' ? '/kontakt' : '/'
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

      {/* MAIN */}
      <main className="pt-24 max-w-screen-xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <section className="relative bg-white rounded-3xl shadow-lg p-8 md:p-10 overflow-hidden">
          {/* soft glow */}
          <div
            className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[360px] w-[900px] rounded-full blur-3xl opacity-70"
            style={{ background: 'radial-gradient(closest-side, rgba(255,204,128,.22), rgba(255,255,255,0) 70%)' }}
          />
          <header className="text-center relative z-[1] mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
              Aktuality
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-orange-600">Co je nového</h1>
            <p className="text-gray-700 max-w-2xl mx-auto mt-2">
              Všechny čerstvé novinky, fotky a videa sdílíme na našich sociálních sítích.
              Sledujte nás, ať vám nic neuteče.
            </p>

            {/* stat „pilulky“ */}
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-lg mx-auto">
              {[
                { n: 'Instagram', t: '@tenis_cimice' },
                { n: 'Facebook',  t: 'Tenis Čimice' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-center"
                >
                  <div className="text-base font-extrabold text-orange-600">{s.n}</div>
                  <div className="text-xs text-orange-700">{s.t}</div>
                </div>
              ))}
            </div>
          </header>

          {/* INFO CARDS */}
          <div className="relative z-[1] grid md:grid-cols-2 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/tenis_cimice/?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-2xl shadow p-6 border border-amber-100 hover:shadow-md transition overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-2">
                <div className="shrink-0 rounded-xl p-2 bg-orange-50 border border-amber-100">
                  <Instagram className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Instagram</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Fotky, videa, stories i zákulisí z tréninků a turnajů.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition"
              >
                Otevřít Instagram
              </button>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-white rounded-2xl shadow p-6 border border-amber-100 hover:shadow-md transition overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-t-2xl" />
              <div className="flex items-center gap-3 mb-2">
                <div className="shrink-0 rounded-xl p-2 bg-orange-50 border border-amber-100">
                  <Facebook className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Facebook</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Krátké zprávy, pozvánky na akce a fotogalerie z našich kurtů.
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-700 transition"
              >
                Otevřít Facebook
              </button>
            </a>
          </div>

          {/* tip */}
          <div className="relative z-[1] mt-8 p-4 rounded-2xl bg-orange-50 border border-orange-200 text-center">
            Označ nás ve stories a příspěvcích, rádi nasdílíme dál! 🎾
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
                <a href="mailto:kptenis@volny.cz" className="text-gray-400 hover:text-white">
                  kptenis@volny.cz
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

export default Novinky;
