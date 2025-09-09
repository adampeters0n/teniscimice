import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  DollarSign,
  Calendar,
  Zap,
  Snowflake,
  Sun,
  Building2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition
      ${active
        ? 'bg-orange-600 text-white border-orange-600 shadow'
        : 'bg-white text-orange-700 border-orange-200 hover:bg-orange-50'
      }`}
  >
    <Icon className="h-4 w-4" />
    <span className="font-semibold">{label}</span>
  </button>
);

const Card = ({ topGradient, title, subtitle, price, children }) => (
  <article className="group relative bg-white rounded-2xl shadow-md p-6 border border-amber-100 hover:shadow-xl transition overflow-hidden">
    <div className={`absolute inset-x-0 top-0 h-1.5 ${topGradient}`} />
    {title && <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>}
    {subtitle && <p className="text-gray-700 mb-2">{subtitle}</p>}
    {price && <div className="text-3xl font-extrabold text-orange-600 mb-2">{price}</div>}
    {children}
  </article>
);

const Prising = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  // --- TABS (bez INFO) ---
  const TABS = [
    { key: 'pronajemZima', label: 'Pronájem haly (zima)', icon: Building2 },
    { key: 'treninkyZima', label: 'Tréninky – zima', icon: Snowflake },
    { key: 'pronajemLeto', label: 'Pronájem kurtů – léto', icon: Sun },
    { key: 'treninkyLeto', label: 'Tréninky – léto', icon: Sun },
  ];
  const [tab, setTab] = useState('pronajemZima');

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

          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <CloseIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>

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
        <section className="relative bg-white rounded-2xl shadow-lg border-t-4 border-orange-500 p-8 overflow-hidden">
          <div className="absolute -top-12 -right-10 h-40 w-40 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
          <header className="text-center relative z-[1] mb-8">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
                <DollarSign className="h-4 w-4" /> Ceník
              </span>
            </div>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-orange-700">Ceník</h1>
            <p className="mt-3 text-lg text-gray-700 max-w-2xl mx-auto">
              Přepínejte mezi sekcemi a rychle najděte, co potřebujete.
            </p>
          </header>

          {/* TABS */}
          <div className="relative z-[1] mb-8 flex flex-wrap items-center justify-center gap-3">
            {TABS.map(({ key, label, icon }) => (
              <TabButton
                key={key}
                icon={icon}
                label={label}
                active={tab === key}
                onClick={() => setTab(key)}
              />
            ))}
          </div>

          {/* CONTENT */}
          <div className="relative z-[1]">
            {/* Pronájem haly (zima) */}
            {tab === 'pronajemZima' && (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Pronájem haly (zimní sezona)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { time: '07:00 – 14:00', weekday: '400 Kč / 1h', weekend: '400 Kč / 1h' },
                    { time: '14:00 – 21:00', weekday: '530 Kč / 1h', weekend: '400 Kč / 1h' },
                    { time: '21:00 – 23:00', weekday: '400 Kč / 1h', weekend: '400 Kč / 1h' },
                  ].map((s) => (
                    <Card
                      key={s.time}
                      topGradient="bg-gradient-to-r from-orange-500 to-yellow-500"
                      title={s.time}
                      subtitle={<span className="inline-flex items-center gap-2 text-gray-900"><Calendar className="h-5 w-5 text-orange-600" /> Rozpis</span>}
                    >
                      <p className="text-lg font-bold text-orange-600">Po–Pá: {s.weekday}</p>
                      <p className="text-lg font-bold text-orange-600">So–Ne: {s.weekend}</p>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-orange-50 rounded-2xl border border-orange-200 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-white text-orange-700 border border-orange-200">
                    <Zap className="h-4 w-4" /> Zvýhodněné předplatné
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mt-3">Předplatné na celou zimní sezónu</h3>
                  <p className="text-gray-800 mt-2">
                    Předplatitelé mají zlevněné tarify <strong>390 Kč / 490 Kč</strong> namísto běžných <strong>400 Kč / 530 Kč</strong>.
                  </p>
                  <p className="text-gray-600 mt-1">Platí od 7. 10. 2024 do 4. 4. 2025.</p>
                </div>
              </>
            )}

            {/* Tréninky – zima */}
            {tab === 'treninkyZima' && (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Zimní sezona 2025/2026 – tréninky</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Jeden hráč + trenér', price: '820 Kč / 1h', description: 'Individuální lekce s trenérem.' },
                    { name: 'Dva hráči + trenér', price: '450 Kč / 1h', description: 'Semi-privát, vyšší intenzita.' },
                    { name: 'Tři hráči + trenér', price: '350 Kč / 1h', description: 'Vyvážený poměr hry a feedbacku.' },
                    { name: 'Čtyři hráči + trenér', price: '270 Kč / 1h', description: 'Skupinová dynamika a sparing.' },
                    { name: '5+ hráčů + trenér (školička)', price: '230 Kč / 1h', description: 'Větší skupina, zábavná cvičení.' },
                  ].map((s) => (
                    <Card
                      key={s.name}
                      topGradient="bg-gradient-to-r from-red-500 to-pink-500"
                      title={s.name}
                      price={s.price}
                    >
                      <p className="text-gray-700">{s.description}</p>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {/* Pronájem kurtů – léto */}
            {tab === 'pronajemLeto' && (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Pronájem kurtů (letní sezona)</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Antukové kurty', price: '200 Kč / 1h', description: '180 Kč / 1h s předplatným na sezonu.' },
                    { name: 'Kurty s umělou trávou', price: '200 Kč / 1h', description: '180 Kč / 1h s předplatným.' },
                    { name: 'S osvětlením', price: '220 Kč / 1h', description: 'Příplatek za večerní osvětlení.' },
                  ].map((s) => (
                    <Card
                      key={s.name}
                      topGradient="bg-gradient-to-r from-yellow-500 to-orange-400"
                      title={s.name}
                      price={s.price}
                    >
                      <p className="text-gray-700">{s.description}</p>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {/* Tréninky – léto */}
            {tab === 'treninkyLeto' && (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Letní sezona 2025 – tréninky</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Jeden hráč + trenér', price: '620 Kč / 1h', description: 'Individuální lekce s trenérem.' },
                    { name: 'Dva hráči + trenér', price: '350 Kč / 1h', description: 'Sdílená intenzivní hodina.' },
                    { name: 'Tři hráči + trenér', price: '260 Kč / 1h', description: 'Výborné tempo a pestrost.' },
                    { name: 'Čtyři hráči + trenér', price: '200 Kč / 1h', description: 'Skupinová lekce, hodně hry.' },
                    { name: '5+ hráčů + trenér (školička)', price: '190 Kč / 1h', description: 'Ekonomická varianta pro větší skupinu.' },
                  ].map((s) => (
                    <Card
                      key={s.name}
                      topGradient="bg-gradient-to-r from-green-600 to-emerald-500"
                      title={s.name}
                      price={s.price}
                    >
                      <p className="text-gray-700">{s.description}</p>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* INFO BLOK (přesunuto pod obsah tabů) */}
          <div className="mt-10 p-6 bg-white rounded-2xl shadow-md border border-orange-200">
            <h3 className="text-2xl font-extrabold text-orange-600 mb-4">Důležité informace</h3>
            <p className="text-gray-800 mb-3">
              Cena je za jednu tréninkovou lekci a zahrnuje trenéra, pronájem kurtu, míče, pomůcky, DPH i pojištění.
            </p>
            <p className="text-gray-800 mb-3">
              Platba probíhá formou předplaceného kreditu – odečítají se pouze <strong>odehrané</strong> tréninky a
              systém umožňuje kombinovat různé počty hráčů i hodin.
            </p>
            <p className="text-gray-800 mb-3 font-semibold">Výhody našeho platebního systému při dodržení pravidel omluv:</p>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Neplatíte celou sezonu předem.</li>
              <li>Neúčtujeme prázdniny a svátky.</li>
              <li>Kredit doplňujete až po vyčerpání, posíláme elektronický přehled.</li>
              <li>Hradíte pouze reálně odehrané hodiny dle tarifu.</li>
              <li>Variabilita počtu tréninků i spoluhráčů.</li>
              <li>Trénink nepropadá při zrušení kvůli počasí.</li>
            </ul>
            <p className="text-gray-800 mt-3">
              Uvedené ceny TŠ platí pro děti trénující pravidelně a členy sokolské organizace.
              Nečlenové mají cenu o <strong>10 % vyšší</strong>.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              to="/kontakt"
              className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
            >
              Chci trénovat / pronajmout kurt
            </Link>
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Prising;
