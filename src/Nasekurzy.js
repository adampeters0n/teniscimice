import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  ChevronRight,
  Trophy,
  Users2,
  Baby,
  Dumbbell,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50/80 px-3 py-1 text-xs font-semibold text-orange-700">
    {children}
  </span>
);

const Card = ({ title, price, children, topGradient = 'bg-gradient-to-r from-orange-500 to-amber-400' }) => (
  <div className="relative bg-white rounded-2xl border border-amber-100 shadow hover:shadow-lg transition overflow-hidden">
    <div className={`absolute inset-x-0 top-0 h-1.5 ${topGradient} rounded-t-2xl`} />
    <div className="p-6 text-center">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      {price && <p className="text-3xl font-extrabold text-orange-600 mb-3">{price}</p>}
      <div className="text-gray-700">{children}</div>
    </div>
  </div>
);

const CourseCard = ({ icon, title, subtitle, bullets, extra, ctaText = 'Mám zájem' }) => (
  <div className="relative bg-white rounded-2xl border border-amber-100 shadow hover:shadow-lg transition overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-t-2xl" />
    <div className="p-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-xl bg-orange-50 text-orange-600">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
      <ul className="space-y-2 text-gray-800 mb-5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-orange-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      
    </div>
  </div>
);

const Nasekurzy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  // ✅ OPRAVA: žádná TS anotace v .js souboru
  const [tab, setTab] = useState('treninkyLeto'); // 'treninkyLeto' | 'treninkyZima'

  return (
    <div className="min-h-screen bg-amber-50">
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

      <main className="pt-24 max-w-screen-xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <section className="relative bg-white rounded-3xl shadow-lg p-8 md:p-10 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[360px] w-[900px] rounded-full blur-3xl opacity-70"
            style={{ background: 'radial-gradient(closest-side, rgba(255,204,128,.22), rgba(255,255,255,0) 70%)' }}
          />

          <header className="text-center relative z-[1] mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
              <Sparkles className="h-4 w-4" /> Naše kurzy
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-orange-600">
              Kurzy pro děti i dospělé
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto mt-2">
              Trénujeme celoročně. Vyberte si kurz podle věku, úrovně a cílů. Od hravého začátku až po závodní přípravu.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
              <Badge>1–4 hráči ve skupině</Badge>
              <Badge>60 min lekce</Badge>
              <Badge>Praha 8 – Čimice</Badge>
            </div>
          </header>

          <div className="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              icon={<Baby className="h-6 w-6" />}
              title="Školička Minitenis"
              subtitle="Pro děti od 4 let, hravý vstup do tenisu."
              bullets={[
                'Hra a koordinace, první údery a pravidla',
                'Speciální pomůcky, malé kurty a míče',
                'Důraz na zábavu a socializaci',
              ]}
            />

            <CourseCard
              icon={<Users2 className="h-6 w-6" />}
              title="Skupinové kurzy dětí"
              subtitle="Začátečníci i pokročilí, celoroční trénování."
              bullets={[
                'Rozdělení do skupin podle věku a úrovně',
                'Technika, taktika, kondice, soutěže',
                'Možnost individuálních lekcí navíc',
              ]}
              />

            <CourseCard
              icon={<Trophy className="h-6 w-6" />}
              title="Závodní příprava"
              subtitle="Pro motivované hráče se sportovními ambicemi."
              bullets={[
                'Plánování sezony a turnajů ČTS',
                'Individuální cíle, sparing, analýza hry',
                'Kondiční příprava a další',
              ]}
              />

            <CourseCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Individuální lekce"
              subtitle="Osobní přístup 1 na 1."
              bullets={[
                'Detailní korekce techniky a pohybu',
                'Flexibilní termíny během týdne',
                'Vhodné pro děti i dospělé',
              ]}
              />

            <CourseCard
              icon={<Users2 className="h-6 w-6" />}
              title="Dospělí"
              subtitle="Rekreačně i výkonnostně, večerní i ranní termíny."
              bullets={[
                'Trenérem vedené tréninky s míči a pomůckami',
                'Rozvoj úderů, herní situace, taktika',
                'Možnost sparingu a klubových her',
              ]}
              />

            <CourseCard
              icon={<Dumbbell className="h-6 w-6" />}
              title="Kondice & sparing"
              subtitle="Pohyb, síla, koordinace a herní praxe."
              bullets={[
                'Kondiční cvičení pro tenis',
                'Sparing s trenérem / v rámci skupiny',
                'Bezpečný progres bez přetížení',
              ]}
              />
          </div>

          {/* Přepínač a ceník tréninků */}
          <div className="relative z-[1] mt-10">
            <div className="mx-auto mb-6 flex w-full max-w-md items-center justify-center rounded-full bg-amber-100 p-1 ">
              <button
                onClick={() => setTab('treninkyLeto')}
                className={`w-1/2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  tab === 'treninkyLeto'
                    ? 'bg-white text-orange-600 shadow'
                    : 'text-orange-700/70 hover:text-orange-700'
                }`}
              >
                Tréninky – léto
              </button>
              <button
                onClick={() => setTab('treninkyZima')}
                className={`w-1/2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  tab === 'treninkyZima'
                    ? 'bg-white text-orange-600 shadow'
                    : 'text-orange-700/70 hover:text-orange-700'
                }`}
              >
                Tréninky – zima
              </button>
            </div>

            {/* Tréninky – zima */}
            {tab === 'treninkyZima' && (
              <>
                <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Zimní sezona 2025/2026 – tréninky</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {[
                    { name: 'Jeden hráč + trenér', price: '820 Kč / 1h', description: 'Individuální lekce s trenérem.' },
                    { name: 'Dva hráči + trenér', price: '450 Kč / 1h', description: 'Semi-privát, vyšší intenzita.' },
                    { name: 'Tři hráči + trenér', price: '350 Kč / 1h', description: 'Vyvážený poměr hry a feedbacku.' },
                    { name: 'Čtyři hráči + trenér', price: '270 Kč / 1h', description: 'Skupinová dynamika a sparing.' },
                    { name: '5+ hráčů + trenér', price: '230 Kč / 1h', description: 'Větší skupina, zábavná cvičení.' },
                  ].map((s) => (
                    <Card
                      key={s.name}
                      topGradient="bg-gradient-to-r from-red-500 to-orange-500"
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
                <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-6 ">Letní sezona 2025 – tréninky</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {[
                    { name: 'Jeden hráč + trenér', price: '620 Kč / 1h', description: 'Individuální lekce s trenérem.' },
                    { name: 'Dva hráči + trenér', price: '350 Kč / 1h', description: 'Sdílená intenzivní hodina.' },
                    { name: 'Tři hráči + trenér', price: '260 Kč / 1h', description: 'Výborné tempo a pestrost.' },
                    { name: 'Čtyři hráči + trenér', price: '200 Kč / 1h', description: 'Skupinová lekce, hodně hry.' },
                    { name: 'Skupina více hráčů', price: '190 Kč / 1h', description: 'Zábavná varianta s větší skupinou.' },
                  ].map((s) => (
                    <Card
                      key={s.name}
                      topGradient="bg-gradient-to-r from-orange-500 to-amber-400 "
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

          <div className="relative z-[1] mt-8 text-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 text-white font-bold hover:bg-orange-700 hover:shadow-lg hover:scale-[1.02] transition"
            >
              Chci trénovat <ChevronRight className="h-5 w-5" />
            </Link>
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

export default Nasekurzy;
