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
              {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item, idx) => (
                <li key={item} className="border-b border-orange-200" style={{ animation: `fadeIn .3s ease ${(idx + 1) * 60}ms both` }}>
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
        {/* HERO „O nás“ */}
        <section className="relative overflow-hidden rounded-2xl bg-white shadow-lg border-t-4 border-orange-600 p-8">
          <div className="absolute -top-12 -right-12 h-44 w-44 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <header className="text-center">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
              O nás
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-orange-600">Tenisová škola Čimice</h1>
            <p className="text-gray-700 max-w-2xl mx-auto mt-2">
              Působíme na dvorcích Sokola Čimice (Na Průhonu, Praha&nbsp;8). Učíme děti i dospělé, od prvních krůčků po závodní tenis.
            </p>
          </header>

          {/* Stat čipy */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { n: '15+', t: 'let zkušeností' },
              { n: '7', t: 'kurtů celkem' },
              { n: '4', t: 'kryté haly (zima)' },
            ].map((s, i) => (
              <div
                  key={i}
                  className="rounded-2xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-center"
                >
                  <div className="text-xl font-extrabold text-orange-600">{s.n}</div>
                  <div className="text-xs text-orange-700">{s.t}</div>
                </div>
            ))}
          </div>
        </section>

        {/* CO DĚLÁME – karty */}
        <section className="mt-10 grid lg:grid-cols-3 gap-8">
          <article className="relative bg-white rounded-2xl shadow-lg p-6 border border-amber-100 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500" />
            <h2 className="text-2xl font-bold text-orange-600">Tréninková příprava</h2>
            <p className="mt-3 text-gray-700">
              Skupinově i individuálně v jakémkoli věku. Rozvoj pohybu, techniky a
              koordinačních dovedností. S jasným plánem a postupným zvyšováním nároků.
            </p>
            <ul className="mt-4 text-sm text-gray-700 space-y-1">
              <li>• Po–Pá 13:00–19:00</li>
              <li>• Možnost zařazení do závodního programu</li>
            </ul>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border border-rose-100 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-500 to-pink-500" />
            <h2 className="text-2xl font-bold text-red-600">Školička minitenisu</h2>
            <p className="mt-3 text-gray-700">
              Pro děti od 4 let. Zábavnou formou budujeme koordinaci, první údery a vztah ke sportu.
            </p>
            <ul className="mt-4 text-sm text-gray-700 space-y-1">
              <li>• Hravé a pestré tréninky</li>
              <li>• Důraz na bezpečí a radost z pohybu</li>
            </ul>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border border-yellow-100 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-400" />
            <h2 className="text-2xl font-bold text-yellow-600">Cíl & hodnoty</h2>
            <p className="mt-3 text-gray-700">
              Individuální přístup, fair&nbsp;play a zdravé návyky. Technika, taktika i mindset ruku v ruce.
            </p>
            <ul className="mt-4 text-sm text-gray-700 space-y-1">
              <li>• Vztah k tenisu na celý život</li>
              <li>• Měřitelný posun a jasné cíle</li>
            </ul>
          </article>
        </section>

        {/* PROGRAMY – další bloky jako timeline/sekce */}
        <section className="mt-10 grid lg:grid-cols-2 gap-8">
          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-2xl font-extrabold text-orange-600">Závodní tenis</h3>
            <p className="mt-3 text-gray-700">
              Úspěšně se účastníme soutěží ČTS ve všech kategoriích:
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-gray-800">
              {['BABYTENIS', 'MLADŠÍ ŽACTVO', 'STARŠÍ ŽACTVO', 'DOROST', 'DOSPĚLÍ'].map((t) => (
                <li key={t} className="rounded-lg border border-amber-100 bg-amber-50/40 px-3 py-2 text-sm">{t}</li>
              ))}
            </ul>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-red-500">
            <h3 className="text-2xl font-extrabold text-red-600">Příměstské kempy & soustředění</h3>
            <p className="mt-3 text-gray-700">
              Každé léto 4 příměstské kempy a jedno pobytové soustředění (Malá Skála). Zlepšení hry, parta a spousta pohybu.
            </p>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-yellow-500">
            <h3 className="text-2xl font-extrabold text-yellow-600">Turnaje</h3>
            <p className="mt-3 text-gray-700">
              Klubové akce (Vánoční/letní) i turnaje v rámci ČTS pro registrované hráče.
            </p>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-600">
            <h3 className="text-2xl font-extrabold text-orange-600">Výuka dospělých</h3>
            <p className="mt-3 text-gray-700">
              Individuální hodiny pro rekreační i ambiciózní hráče. Technika, taktika a kondice na míru.
            </p>
          </article>
        </section>

        {/* ZÁZEMÍ & DALŠÍ AKTIVITY */}
        <section className="mt-10 grid lg:grid-cols-3 gap-8">
          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600 lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-blue-700">Trenérské vedení</h3>
            <p className="mt-3 text-gray-700">
              Tréninky vedou zkušení trenéři I.–III. třídy s odborným vzděláním pod záštitou ČTS.
            </p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              {['Technika & pohyb', 'Mindset & plán', 'Zábava & bezpečí'].map((t) => (
                <div key={t} className="rounded-lg border border-blue-100 bg-white p-3 text-sm text-gray-800">
                  {t}
                </div>
              ))}
            </div>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-2xl font-extrabold text-amber-700">Další aktivity v areálu</h3>
            <ul className="mt-3 text-gray-700 space-y-1">
              <li>• Dětské hřiště</li>
              <li>• Pingpongový stůl</li>
              <li>• Basketbalový koš</li>
              <li>• Víceúčelová plocha</li>
            </ul>
          </article>
        </section>

        {/* CTA pruh */}
        <section className="mt-10">
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 shadow-lg">
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-white/20 rounded-full blur-3xl opacity-60" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h4 className="text-2xl font-extrabold">Chcete vyzkoušet trénink?</h4>
                <p className="text-white/90">Rychlá rezervace kurtu nebo napište — ozveme se zpět.</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/rezervace-kurtu"
                  className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full shadow hover:shadow-md hover:scale-[1.02] transition"
                >
                  Rezervovat kurt
                </Link>
                <Link
                  to="/kontakt"
                  className="bg-white/15 text-white font-semibold px-5 py-2 rounded-full ring-1 ring-white/40 hover:bg-white/25 transition"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

      {/* keyframes pro mobile menu fadeIn (reuse) */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};

export default Onasnas;
