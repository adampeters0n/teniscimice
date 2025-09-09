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

const Minitenis = () => {
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
        {/* HERO */}
        <section className="relative overflow-hidden rounded-2xl bg-white shadow-lg border-t-4 border-orange-600 p-8">
          <div className="absolute -top-12 -right-10 h-40 w-40 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <header className="text-center relative z-[1]">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
              Pro děti od 4 let
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-orange-700">Školička Minitenis</h1>
            <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
              Seznamte své děti s tenisem pomocí speciálních pomůcek a her v přátelském prostředí.
            </p>
          </header>

          {/* Stat čipy */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { n: '3×', t: 'týdně školička' },
              { n: '1:5', t: 'trenér : děti' },
              { n: '100%', t: 'zábava & bezpečí' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-orange-50/60 border border-orange-100 p-3 text-center">
                <div className="text-xl font-extrabold text-orange-700">{s.n}</div>
                <div className="text-xs text-orange-800">{s.t}</div>
              </div>
            ))}
          </div>
        </section>

        {/* HLAVNÍ OBSAH – 2 sloupce */}
        <section className="mt-10 grid lg:grid-cols-3 gap-8 items-start">
          {/* Levý sloupec – program & cíle */}
          <article className="lg:col-span-2 relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-500 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-yellow-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <header className="mb-4">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                  Program & cíle
                </span>
                <span className="h-2 w-2 rounded-full bg-yellow-300 shadow" />
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Učíme hrou, budujeme návyky</h2>
            </header>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
                <div className="text-sm font-semibold text-amber-700">Trénink formou hry</div>
                <p className="text-sm text-gray-700 mt-1">
                  Zahřátí, koordinace, první údery a tenisové hry. Děti se baví a přirozeně se učí.
                </p>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
                <div className="text-sm font-semibold text-amber-700">Cíl minitenisu</div>
                <p className="text-sm text-gray-700 mt-1">
                  Základní tenisové dovednosti, samostatnost, soutěživost i spolupráce v týmu.
                </p>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
                <div className="text-sm font-semibold text-amber-700">Socializace dětí</div>
                <p className="text-sm text-gray-700 mt-1">
                  Nová kamarádství, spolupráce a respekt. Stejně důležité jako technika.
                </p>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
                <div className="text-sm font-semibold text-amber-700">Příprava na „velký“ tenis</div>
                <p className="text-sm text-gray-700 mt-1">
                  Kolem 7 let plynulý přechod na větší kurt. Už s úderovými základy a kontrolou míče.
                </p>
              </div>
            </div>
          </article>

          {/* Pravý sloupec – rozvrh & přihlášení */}
          <aside className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-blue-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <header className="mb-3">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Organizace
              </span>
              <h3 className="mt-2 text-xl font-extrabold text-blue-700">Rozvrh & přihlášení</h3>
            </header>

            <ul className="text-gray-800 space-y-2">
              <li>• Skupiny dle věku a úrovně</li>
              <li>• Tréninky 45–60 minut</li>
              <li>• 1–3× týdně (dle domluvy)</li>
              <li>• Pomůcky a míče zajištěny</li>
            </ul>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-blue-100 bg-blue-50/40 p-3">
                <div className="text-sm font-semibold text-blue-700">Místo</div>
                <div className="text-sm text-gray-700">Sokol Čimice · Na Průhonu</div>
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50/40 p-3">
                <div className="text-sm font-semibold text-blue-700">Vybavení</div>
                <div className="text-sm text-gray-700">Raketa k zapůjčení možná</div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <Link
                to="/kontakt"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-full font-semibold text-center hover:shadow-lg hover:scale-[1.02] transition"
              >
                Přihlásit dítě
              </Link>
              <Link
                to="/cenik"
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold text-center hover:shadow-lg hover:scale-[1.02] transition"
              >
                Zjistit ceník
              </Link>
            </div>
          </aside>
        </section>

        {/* DOPLŇKY – co s sebou & FAQ mini */}
        <section className="mt-10 grid lg:grid-cols-2 gap-8">
          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-emerald-600 overflow-hidden">
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-emerald-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <h3 className="text-xl font-extrabold text-emerald-700">Co s sebou</h3>
            <ul className="mt-3 text-gray-800 space-y-1">
              <li>• Sportovní obuv, pití, kšiltovku</li>
              <li>• Pohodlné oblečení podle počasí</li>
              <li>• (Volitelně) vlastní raketu</li>
            </ul>
          </article>

          <article className="relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-600 overflow-hidden">
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-purple-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
            <h3 className="text-xl font-extrabold text-purple-700">Krátké FAQ</h3>
            <ul className="mt-3 text-gray-800 space-y-2">
              <li>
                <span className="font-semibold text-purple-700">Je to pro úplné začátečníky?</span> Ano, začínáme od
                úplných základů.
              </li>
              <li>
                <span className="font-semibold text-purple-700">Je možné zapůjčit si raketu?</span> Ano, raketu zapůjčíme dle věku a úrovně
              </li>
              <li>
                <span className="font-semibold text-purple-700">Mohu vyzkoušet jednu lekci?</span> Ano, domluvíme
                ochutnávku.
              </li>
            </ul>
          </article>
        </section>

        {/* CTA PRUH */}
        <section className="mt-10">
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 shadow-lg">
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-white/20 rounded-full blur-3xl opacity-60" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h4 className="text-2xl font-extrabold">Chcete vědět, kdy je nejbližší termín?</h4>
                <p className="text-white/90">Ozvěte se nám – najdeme ideální skupinu pro vaše dítě.</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/kontakt"
                  className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full shadow hover:shadow-md hover:scale-[1.02] transition"
                >
                  Kontakt
                </Link>
                <Link
                  to="/cenik"
                  className="bg-white/15 text-white font-semibold px-5 py-2 rounded-full ring-1 ring-white/40 hover:bg-white/25 transition"
                >
                  Ceník
                </Link>
              </div>
            </div>
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

      {/* mini keyframes pro mobile fadeIn */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
};

export default Minitenis;
