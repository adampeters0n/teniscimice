import React, { useState } from 'react';
import { Mail, Phone, Menu as MenuIcon, X as CloseIcon, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Kontaktfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-0 left-0 right-0 z-50 py-4 px-6">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/logocimice.png"
                alt="Tenis Čimice Logo"
                className="h-12 w-12 mr-2"
              />
            </Link>
            {/* Social Media Icons */}
            <div className="ml-4 flex flex-col items-center">
              <a href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 mt-2">
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
          <ul className={`hidden md:flex md:space-x-4`}>
            {['Domů','O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
              <li key={item} className="flex-shrink-0">
                <Link
                  to={
                    item === 'Domů' ? '/' :
                    item === 'O nás' ? '/o-nas' :
                    item === 'Aktuality' ? '/aktuality' :
                    item === 'Kempy' ? '/kempy' :
                    item === 'Ceník' ? '/cenik' :
                    item === 'Školička' ? '/skolicka' :
                    item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                    item === 'Kontakt' ? '/kontakt' :
                    '#'
                  }
                  className="hover:text-yellow-300 transition duration-300 font-semibold"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-16 right-0 w-64 bg-white text-black shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} rounded-lg overflow-hidden`}>
            <ul className="flex flex-col">
              {['Domů','O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
                <li key={item} className="border-b border-gray-300">
                  <Link
                    to={
                      item === 'Domů' ? '/' : 
                      item === 'O nás' ? '/o-nas' :
                      item === 'Aktuality' ? '/aktuality' :
                      item === 'Kempy' ? '/kempy' :
                      item === 'Ceník' ? '/cenik' :
                      item === 'Školička' ? '/skolicka' :
                      item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
                      item === 'Kontakt' ? '/kontakt' :
                      '#'
                    }
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Section */}
      <main className="pt-20 max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-orange-600 text-center">
            Kontakt
          </h1>
          
          {/* Address and Team Section */}
          <div className="space-y-8 mb-12">
            {/* Address Section */}
            <div className="text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-semibold text-red-600">Adresa</h2>
              <p>
                ul. Na Průhonu, Praha 8 Čimice<br />
                <br />
                Rezervace přetlakových hal a kurtů:<br /> 
                tel.: <strong><a href="tel:+420602354978">602 354 978</a></strong><br /> 
                <br />
                Tenisová škola a kempy:<br />
                tel.: <strong><a href="tel:+420724265022">724 265 022</a></strong>
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d639.2881258161946!2d14.430786928521691!3d50.13957885775381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDA4JzIyLjUiTiAxNMKwMjUnNTMuMiJF!5e0!3m2!1scs!2scz!4v1726238091411!5m2!1scs!2scz" 
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>

            {/* Team Section */}
            <div className="text-lg text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-semibold text-red-600">Trenérský tým</h2>
              <ul className="list-none">
                <li><strong>KATEŘINA PETERKOVÁ</strong>, trenér I. třída - licence ČTS, rozhodčí licence B<br />
                  <a href="tel:+420724265022" className="text-gray-700">724 265 022</a> &nbsp; | &nbsp; <a href="mailto:kptenis@volny.cz" className="text-blue-600">kptenis@volny.cz</a>
                </li>
                <li><strong>OTA FUKÁREK</strong>, trenér II. třída</li>
                <li><strong>MARTIN STAVĚL</strong>, trenér II. třída</li>
                <li><strong>EDUARD PAVLIKOVSKÝ</strong>, trenér II. třída</li>
                <li><strong>ADAM PETERKA</strong>, trenér III. třída</li>
                <li><strong>LENKA HRBKOVÁ</strong>, trenér III. třída</li>
              </ul>
            </div>

            {/* Bank and Company Info */}
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                Bankovní spojení: 2102303853/2700<br />
                IČ: 289 165 57<br />
                DIČ: CZ 289 165 57
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-orange-600 mb-6">Kontaktní formulář</h2>
            <form 
              action="https://formspree.io/f/xzzpqgqy" 
              method="POST" 
              className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">Jméno a příjmení *</label>
                <input type="text" name="name" className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">e-mail *</label>
                <input type="email" name="email" className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Telefon</label>
                <input type="tel" name="phone" className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Zde zanechte vaši zprávu *</label>
                <textarea name="message" className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500" rows="5" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-orange-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-orange-700 transition">Odeslat</button>
              </div>
            </form>
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

export default Kontaktfile;
