import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  MapPin,
  User2,
  Building2,
  Send,
  PhoneCall,
  AtSign,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Kontaktfile = () => {
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

          {/* Mobile menu */}
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
          {/* soft glow jako na Školičce */}
          <div
            className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[360px] w-[900px] rounded-full blur-3xl opacity-70"
            style={{ background: 'radial-gradient(closest-side, rgba(255,204,128,.22), rgba(255,255,255,0) 70%)' }}
          />
          <header className="text-center relative z-[1] mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
              <Send className="h-4 w-4" /> Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 text-orange-600">Kontakt</h1>
            <p className="text-gray-700 max-w-2xl mx-auto mt-2">
              Ozvěte se nám. Rádi poradíme s tréninky, pronájmem kurtu i přihláškami na kempy.
            </p>

            {/* stat pilulky */}
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-lg mx-auto">
              {[
                { n: '2×', t: 'telefon' },
                { n: '1',  t: 'e-mail' },
                { n: 'Praha 8', t: 'Čimice' },
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
          </header>

          {/* INFO CARDS */}
          <div className="relative z-[1] grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: <MapPin className="h-5 w-5 text-orange-600" />,
                title: 'Adresa',
                body: <>Na Průhonu 812/3<br/>181 00 Praha 8 – Čimice</>,
              },
              {
                icon: <PhoneCall className="h-5 w-5 text-orange-600" />,
                title: 'Telefon',
                body: (
                  <>
                    Rezervace hal a kurtů:{' '}
                    <a href="tel:+420602354978" className="font-semibold hover:underline">602 354 978</a><br/>
                    TŠ &amp; kempy:{' '}
                    <a href="tel:+420724265022" className="font-semibold hover:underline">724 265 022</a>
                  </>
                ),
              },
              {
                icon: <AtSign className="h-5 w-5 text-orange-600" />,
                title: 'E-mail',
                body: <a href="mailto:kptenis@volny.cz" className="font-semibold hover:underline">kptenis@volny.cz</a>,
              },
            ].map((c, i) => (
              <div key={i} className="relative bg-white rounded-2xl shadow p-6 border border-amber-100 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-t-2xl" />
                <div className="flex items-center gap-3 mb-3">
                  {c.icon}
                  <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                </div>
                <div className="text-gray-800 leading-relaxed">{c.body}</div>
              </div>
            ))}
          </div>

          {/* MAPA + TÝM */}
          <div className="relative z-[1] grid lg:grid-cols-2 gap-8">
            {/* MAP */}
            <article className="bg-white rounded-2xl shadow border border-amber-100 overflow-hidden">
              <div className="p-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-extrabold text-gray-900">Kde nás najdete</h3>
              </div>
              <div className="px-4 pb-4">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    title="Mapa Tenis Čimice"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d639.2881258161946!2d14.430786928521691!3d50.13957885775381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDA4JzIyLjUiTiAxNMKwMjUnNTMuMiJF!5e0!3m2!1scs!2scz!4v1726238091411!5m2!1scs!2scz"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </article>

            {/* TÝM + FIRMA */}
            <article className="bg-white rounded-2xl shadow border border-amber-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <User2 className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-extrabold text-gray-900">Trenérský tým</h3>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <strong>KATEŘINA PETERKOVÁ</strong>, trenér I. třída – licence ČTS, rozhodčí B<br />
                  <a href="tel:+420724265022" className="hover:underline">724 265 022</a> ·{' '}
                  <a href="mailto:kptenis@volny.cz" className="text-blue-600 hover:underline">kptenis@volny.cz</a>
                </li>
                <li><strong>OTA FUKÁREK</strong>, trenér II. třída</li>
                <li><strong>MARTIN STAVĚL</strong>, trenér II. třída</li>
                <li><strong>EDUARD PAVLIKOVSKÝ</strong>, trenér II. třída</li>
                <li><strong>ADAM PETERKA</strong>, trenér III. třída</li>
                <li><strong>LENKA HRBKOVÁ</strong>, trenér III. třída</li>
              </ul>

              <div className="h-px bg-amber-100 my-6" />

              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-orange-600" />
                <h4 className="text-md font-extrabold text-gray-900">Fakturační údaje</h4>
              </div>
              <p className="text-gray-800">
                Bankovní spojení: <strong>2102303853/2700</strong><br />
                IČ: <strong>289 165 57</strong><br />
                DIČ: <strong>CZ 289 165 57</strong>
              </p>
            </article>
          </div>

          {/* FORMULÁŘ */}
<article className="relative z-[1] mt-8 bg-white rounded-2xl shadow-lg border border-amber-100 p-6 sm:p-7 overflow-hidden">
  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 rounded-t-2xl" />
  <h2 className="text-2xl font-extrabold text-orange-600 mb-6">Kontaktní formulář</h2>

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
        <label className="block text-gray-700 font-medium">Téma zprávy</label>
        <select
          name="topic"
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-orange-500 focus:border-orange-500 transition"
          defaultValue=""
        >
          <option value="" disabled>Vyberte…</option>
          <option>Obecný dotaz</option>
          <option>Školička / kurzy</option>
          <option>Rezervace kurtu</option>
          <option>Servis a vybavení</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-700 font-medium">Zpráva *</label>
        <textarea
          name="message"
          rows="6"
          required
          className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition"
          placeholder="Napište nám prosím co nejvíce detailů…"
        />
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <input
          id="gdpr-contact"
          type="checkbox"
          required
          className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
        />
        <label htmlFor="gdpr-contact" className="text-sm text-gray-700">
          Souhlasím se zpracováním osobních údajů pro účely vyřízení dotazu.
        </label>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 transition"
        >
          Odeslat zprávu
        </button>
      </div>
    </div>
  </form>
</article>

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

export default Kontaktfile;
