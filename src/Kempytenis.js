import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ---------- Carousel ---------- */
const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // auto-play
  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % images.length),
      4500
    );
    return () => clearInterval(id);
  }, [images]);

  if (!images?.length) return null;

  return (
    <div className="mt-4">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        {/* 16:9 box */}
        <div className="w-full pt-[56.25%]" />
        <img
          src={images[currentIndex]}
          alt={`${alt} – snímek ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Arrows */}
        <div className="absolute inset-0 flex justify-between items-center px-3">
          <button
            onClick={() =>
              setCurrentIndex((p) => (p - 1 + images.length) % images.length)
            }
            className="bg-black/35 hover:bg-black/45 text-white p-2 rounded-full transition"
            aria-label="Předchozí snímek"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setCurrentIndex((p) => (p + 1) % images.length)}
            className="bg-black/35 hover:bg-black/45 text-white p-2 rounded-full transition"
            aria-label="Další snímek"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0">
          <div className="flex justify-center gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentIndex ? 'w-5 bg-red-600' : 'w-2 bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Kemp Card ---------- */
const KempSection = ({ title, date, description, images, badgeColor = 'orange' }) => {
  const bar =
    badgeColor === 'rose'
      ? 'from-red-500 to-pink-500'
      : badgeColor === 'amber'
      ? 'from-yellow-500 to-orange-400'
      : 'from-orange-500 to-yellow-500';

  const badgeText =
    badgeColor === 'rose'
      ? 'text-red-600'
      : badgeColor === 'amber'
      ? 'text-yellow-600'
      : 'text-orange-600';

  return (
    <article className="relative bg-white rounded-2xl shadow-lg p-6 border border-amber-100 overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${bar}`} />
      <div className="absolute -top-10 -right-10 h-32 w-32 bg-orange-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
      <header>
        <h2 className={`text-2xl font-extrabold ${badgeText}`}>{title}</h2>
        <p className="text-gray-600 mt-1">{date}</p>
      </header>
      <p className="text-gray-800 mt-3 leading-relaxed">{description}</p>
      <ImageCarousel images={images} alt={title} />
    </article>
  );
};

const Kempytenis = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const malaSkalaPopis =
    'Naše tenisové soustředění v Malé Skále nabízí intenzivní trénink a zábavu pro všechny úrovně hráčů. Užijte si týden plný tenisu v krásném prostředí Českého ráje.';
  const primestskePopis =
    'Příměstské kempy v Čimicích poskytují skvělou příležitost pro místní děti zlepšit své tenisové dovednosti a užít si aktivní léto. Každý den je plný tréninku, her a zábavy.';

  // Fotky – z public složky
  const images = [
    `${process.env.PUBLIC_URL}/Fotkamalaskalakurt.jpg`,
    `${process.env.PUBLIC_URL}/Fotkamalaskalaskala.jpg`,
    `${process.env.PUBLIC_URL}/Fotkamalaskalasrdce.jpg`,
    `${process.env.PUBLIC_URL}/Fotkamalaskalauvody.jpg`,
    `${process.env.PUBLIC_URL}/Fotkamalaskalavenku.jpg`,
  ];

  const cimiceImages = [
    `${process.env.PUBLIC_URL}/kemp2cela.jpg`,
    `${process.env.PUBLIC_URL}/kemp2deti.jpg`,
    `${process.env.PUBLIC_URL}/kemp2fotbal.jpg`,
    `${process.env.PUBLIC_URL}/kemp2cel2.jpg`,
    `${process.env.PUBLIC_URL}/kemp2basket.jpg`,
  ];

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
              Léto 2025
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-orange-700">Tenisové kempy</h1>
            <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
              Přidejte se k našim letním akcím a užijte si nezapomenutelné chvíle plné sportu a zábavy!
            </p>
          </header>

          {/* Stat čipy */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {[
              { n: '4×', t: 'příměstské kempy' },
              { n: '1×', t: 'soustředění' },
              { n: '10%', t: 'sleva při více turnusech' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-orange-50/60 border border-orange-100 p-3 text-center">
                <div className="text-xl font-extrabold text-orange-700">{s.n}</div>
                <div className="text-xs text-orange-800">{s.t}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TERMÍNY & PŘIHLÁŠKA */}
        <section className="mt-10 relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-500 overflow-hidden">
          <h2 className="text-2xl font-extrabold text-red-600">Termíny a přihláška – 2025</h2>

          <div className="mt-4 grid lg:grid-cols-2 gap-6">
            {/* Malá Skála */}
            <div className="rounded-xl border border-amber-100 p-4 bg-amber-50/40">
              <h3 className="text-xl font-bold text-red-600">Malá Skála</h3>
              <p className="mt-1 text-gray-700">
                <strong>Soustředění</strong> — 13.–18.&nbsp;7.
              </p>
              <p className="text-gray-800 mt-1">
                <strong>Cena:</strong> 6&nbsp;600&nbsp;Kč
              </p>
            </div>

            {/* Čimice */}
            <div className="rounded-xl border border-amber-100 p-4 bg-amber-50/40">
              <h3 className="text-xl font-bold text-red-600">Čimice</h3>
              <ul className="mt-1 text-gray-700 space-y-1">
                <li>
                  <strong>1. Kemp</strong> — 21.–25.&nbsp;7.
                </li>
                <li>
                  <strong>2. Kemp</strong> — 28.&nbsp;7.–1.&nbsp;8.
                </li>
                <li>
                  <strong>3. Kemp</strong> — 18.–22.&nbsp;8.
                </li>
                <li>
                  <strong>4. Kemp</strong> — 25.–29.&nbsp;8.
                </li>
              </ul>
              <p className="text-gray-800 mt-1">
                <strong>Cena za jeden:</strong> 3&nbsp;490&nbsp;Kč
              </p>
            </div>
          </div>

          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-orange-100 p-4">
              <h4 className="text-lg font-semibold text-red-600">Přihláška & platba</h4>
              <p className="text-gray-700 mt-2">
                <strong>Závaznou přihlášku odevzdejte se zálohou:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>2&nbsp;000&nbsp;Kč — soustředění Malá Skála (doplatek do 1.&nbsp;7.)</li>
                <li>1&nbsp;000&nbsp;Kč — příměstské kempy v Čimicích (doplatek 1. den v hotovosti)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Platba převodem na účet <strong>2102303853/2700</strong> nebo v hotovosti při zahájení.
              </p>
              <p className="text-gray-800 mt-2 font-medium">
                Při účasti na dvou a více turnusech příměstských kempů poskytujeme <strong>10&nbsp;% slevu</strong>.
              </p>
            </div>

            <div className="rounded-xl border border-orange-100 p-4">
              <h4 className="text-lg font-semibold text-red-600">Odeslání přihlášky</h4>
              <p className="text-gray-700 mt-2">
                Vyplněnou přihlášku pošlete na <strong>kptenis@volny.cz</strong> nebo přes WhatsApp/SMS na{' '}
                <strong>+420&nbsp;724&nbsp;265&nbsp;022</strong>.
              </p>
              <div className="mt-4">
                <a
                  href={`${process.env.PUBLIC_URL}/prihlaska-kemp-2025.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
                >
                  Otevřít přihlášku (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DVA HLAVNÍ BLOKY – karty s karuselem */}
        <section className="mt-10 grid md:grid-cols-2 gap-8">
          <KempSection
            title="Malá Skála"
            date="13.–18. 7. 2025"
            description={malaSkalaPopis}
            images={images}
            badgeColor="rose"
          />
          <KempSection
            title="Příměstské kempy v Čimicích"
            date="21. 7. – 29. 8. 2025"
            description={primestskePopis}
            images={cimiceImages}
            badgeColor="amber"
          />
        </section>

        {/* INFO o příměstském kempu */}
        <section className="mt-10 relative bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-600 overflow-hidden">
          <div className="absolute -bottom-12 -right-10 h-40 w-40 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <h2 className="text-2xl font-extrabold text-orange-600">Informace o příměstském kempu</h2>
          <p className="text-lg mt-3 text-gray-700 leading-relaxed">
            Naše letní příměstské tenisové kempy pořádáme již od roku 2006. Mohou se účastnit i děti, které netrénují
            v naší TŠ, bez ohledu na úroveň tenisu.
          </p>

          <div className="mt-6 grid lg:grid-cols-3 gap-4">
            <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
              <div className="text-sm font-semibold text-amber-700">Program</div>
              <div className="text-sm text-gray-700 mt-1">
                Skupiny dle úrovně a věku: tenis, kondice, soutěže. Poslední den turnaj s cenami.
              </div>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
              <div className="text-sm font-semibold text-amber-700">Co s sebou</div>
              <ul className="text-sm text-gray-700 mt-1 space-y-1">
                <li>Raketa, švihadlo, láhev</li>
                <li>Kšiltovka, krém</li>
                <li>Tenisová obuv, přezůvky</li>
                <li>Oblečení dle počasí, ručník</li>
              </ul>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50/40 p-4">
              <div className="text-sm font-semibold text-amber-700">Denní režim</div>
              <div className="text-sm text-gray-700 mt-1">
                Sraz 8:30–9:00 · Program 9:00–16:00 · Vyzvednutí do 16:30.
              </div>
            </div>
          </div>
        </section>

        {/* CTA pruh */}
        <section className="mt-10">
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-6 shadow-lg">
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-white/20 rounded-full blur-3xl opacity-60" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h4 className="text-2xl font-extrabold">Máte otázky ke kempům?</h4>
                <p className="text-white/90">Napište nám nebo rovnou vyplňte přihlášku.</p>
              </div>
              <div className="flex gap-2">
                <a
                  href={`${process.env.PUBLIC_URL}/prihlaska-kemp-2025.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 font-semibold px-5 py-2 rounded-full shadow hover:shadow-md hover:scale-[1.02] transition"
                >
                  Přihláška (PDF)
                </a>
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

export default Kempytenis;
