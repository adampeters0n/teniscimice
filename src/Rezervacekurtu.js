import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  Calendar,
  PhoneCall,
  MessageSquareText,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Rezervacekurtu = () => {
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
        <section className="relative bg-white rounded-2xl shadow-lg border-t-4 border-orange-600 p-8 overflow-hidden">
          {/* soft blob */}
          <div className="absolute -top-12 -right-10 h-40 w-40 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />

          {/* Header */}
          <header className="text-center mb-8 relative z-[1]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
              <Calendar className="h-4 w-4" /> Rezervace kurtu
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-3 mb-2 text-orange-600">Rezervace kurtů</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Pohodlně po telefonu / SMS nebo přes formulář. Najdete nás v areálu Sokola Čimice.
            </p>
          </header>

          {/* OKÉNKA */}
          <div className="grid lg:grid-cols-2 gap-8 items-start relative z-[1]">
            {/* Jak rezervovat */}
            <article className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-600">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-2xl font-bold text-orange-600">Jak rezervovat kurt</h3>
                <span className="text-orange-600 font-semibold">rychle & jednoduše</span>
              </div>

              <ul className="text-gray-800 mb-4 leading-relaxed space-y-2">
                <li className="flex items-start gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-600 mt-2 inline-block" />
                  <div>
                    <strong>Rezervace hal a kurtů:</strong>{' '}
                    <a href="tel:+420602354978" className="font-semibold hover:underline">
                      602 354 978
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-600 mt-2 inline-block" />
                  <div>
                    <strong>TŠ & kempy:</strong>{' '}
                    <a href="tel:+420724265022" className="font-semibold hover:underline">
                      724 265 022
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-600 mt-2 inline-block" />
                  <div>nebo nám pošlete požadavek přes formulář níže</div>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="tel:+420602354978"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white font-semibold hover:shadow-md hover:scale-[1.02] transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  Zavolat
                </a>
                <a
                  href="sms:+420602354978"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-700 border border-orange-200 font-semibold hover:shadow-sm"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Poslat SMS
                </a>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-semibold hover:shadow-md hover:scale-[1.02] transition ml-auto"
                >
                  Chci trénovat →
                </Link>
              </div>
            </article>

            {/* Kde nás najdete */}
            <article className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-orange-600">
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-2xl font-bold text-orange-600">Kde nás najdete</h3>
                <span className="text-orange-600 font-semibold">Na Průhonu 812/3</span>
              </div>

              <div className="rounded-xl overflow-hidden border border-orange-100 shadow-sm">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    title="Mapa Tenis Čimice"
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d639.2881258161946!2d14.430786928521691!3d50.13957885775381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDA4JzIyLjUiTiAxNMKwMjUnNTMuMiJF!5e0!3m2!1scs!2scz!4v1726238091411!5m2!1scs!2scz"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs bg-orange-50 text-orange-700 border border-orange-200">
                  Parkování u areálu
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs bg-orange-50 text-orange-700 border border-orange-200">
                  Sokol Čimice
                </span>
              </div>
            </article>
          </div>

          {/* FORMULÁŘ */}
<div className="relative z-[1] mt-8 bg-white rounded-2xl shadow-lg border border-orange-100 p-6 sm:p-7">
  <h2 className="text-2xl font-extrabold text-orange-600 mb-6">Rezervace kurtu</h2>

  <form
    action="https://formspree.io/f/xzzpqgqy"
    method="POST"
    className="rounded-2xl border border-orange-100 bg-white p-6 sm:p-7"
  >
    <div className="grid md:grid-cols-2 gap-5">
      <div>
        <label className="block text-gray-700 font-medium">Jméno a příjmení *</label>
        <input
          type="text"
          name="name"
          required
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">E-mail *</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Telefon</label>
        <input
          type="tel"
          name="phone"
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Typ kurtu</label>
        <select
          name="court_type"
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-orange-500 focus:border-orange-500 transition"
          defaultValue=""
        >
          <option value="" disabled>Vyberte…</option>
          <option>Antuka</option>
          <option>Umělá tráva</option>
          <option>Pevný povrch (zimní sezóna)</option>
          <option>Nemám preferenci</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Preferovaný termín</label>
        <input
          type="text"
          name="preferred_slot"
          placeholder="např. Út/Čt 17–18 h, co nejdříve apod."
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Téma zprávy</label>
        <select
          name="topic"
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-orange-500 focus:border-orange-500 transition"
          defaultValue="Rezervace kurtu"
        >
          <option>Rezervace kurtu</option>
          <option>Školička / kurzy</option>
          <option>Ostatní dotaz</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-700 font-medium">Zpráva *</label>
        <textarea
          name="message"
          rows="6"
          required
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
          placeholder="Počet hráčů, úroveň, požadovaná délka hry, případné poznámky…"
        />
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <input
          id="gdpr-res"
          type="checkbox"
          required
          className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
        />
        <label htmlFor="gdpr-res" className="text-sm text-gray-700">
          Souhlasím se zpracováním osobních údajů pro účely vyřízení rezervace.
        </label>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition"
        >
          Odeslat rezervaci
        </button>
      </div>
    </div>
  </form>
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

export default Rezervacekurtu;
