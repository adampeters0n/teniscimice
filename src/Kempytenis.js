import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu as MenuIcon, X as CloseIcon, Facebook, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ images, currentIndex, setCurrentIndex, alt }) => (
  <div className="mt-4">
    <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ width: '100%', paddingTop: '56.25%' }}>
      <img 
        src={images[currentIndex]} 
        alt={`${alt} Slide ${currentIndex + 1}`} 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)} 
          className="bg-orange-600 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)} 
          className="bg-orange-600 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-red-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const KempSection = ({ title, date, description, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-orange-500 flex flex-col h-full">
      <div className="flex-grow">
        <h2 className="text-2xl font-semibold text-red-600">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{date}</p>
        <p className="text-gray-700 mt-4 leading-relaxed">{description}</p>
      </div>
      <ImageCarousel 
        images={images} 
        currentIndex={currentImageIndex} 
        setCurrentIndex={setCurrentImageIndex}
        alt={title}
      />
    </div>
  );
};

const Kempytenis = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const malaSkalaPopis = "Naše tenisové soustředění v Malé Skále nabízí intenzivní trénink a zábavu pro všechny úrovně hráčů. Užijte si týden plný tenisu v krásném prostředí Českého ráje.";
  const primestskePopis = "Příměstské kempy v Čimicích poskytují skvělou příležitost pro místní děti zlepšit své tenisové dovednosti a užít si aktivní léto. Každý den je plný tréninku, her a zábavy.";

  const images = [
    "/Fotkamalaskalakurt.jpg",
    "/Fotkamalaskalaskala.jpg",
    "/Fotkamalaskalasrdce.jpg",
    "/Fotkamalaskalauvody.jpg",
    "/Fotkamalaskalavenku.jpg"
  ];

  const cimiceImages = [
    "/kemp2cela.jpg",
    "/kemp2deti.jpg",
    "/kemp2fotbal.jpg",
    "/kemp2cel2.jpg",
    "/kemp2basket.jpg"
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-amber-50">
     <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-5 left-4 right-4 z-50 px-6 py-2 rounded-b-2xl rounded-t-2xl shadow-lg">
  <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <Link to="/">
        <img
          // Logo z public složky
          src={`${process.env.PUBLIC_URL}/logocimice.png`}
          alt="Tenis Čimice Logo"
          className="h-12 w-12 mr-2"
        />
      </Link>
      {/* Odebrán text "Tenis Čimice", zachovány sociální ikony */}
      <div className="ml-4 flex flex-col items-center">
        <a
          href="https://www.facebook.com/people/Kate%C5%99ina-Peterkov%C3%A1/pfbid0TncMRnyejaJkEkYUzi36H7si3prwYeLDfqJiudBjHMHcPPrWKEeyokFt3Nctphj2l/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/tenis_cimice/?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 mt-2"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </div>

    {/* Hamburger menu pro mobilní zobrazení */}
    <div className="flex items-center md:hidden">
      <button onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? (
          <CloseIcon className="h-8 w-8" />
        ) : (
          <MenuIcon className="h-8 w-8" />
        )}
      </button>
    </div>

    {/* Menu pro větší obrazovky */}
    <ul className="hidden md:flex md:space-x-4">
      {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
        <li key={item} className="flex-shrink-0">
          <Link
            to={
              item === 'O nás' ? '/o-nas' :
              item === 'Aktuality' ? '/aktuality' :
              item === 'Kempy' ? '/kempy' :
              item === 'Ceník' ? '/cenik' :
              item === 'Školička' ? '/skolicka' :
              item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
              item === 'Kontakt' ? '/kontakt' :
              '/'
            }
            className="hover:text-yellow-300 transition duration-300 font-semibold"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

    {/* Menu pro mobily */}
    <div
  className={`md:hidden fixed top-[4.5rem] right-0 w-64 bg-amber-50 text-orange-700 shadow-md transform transition-transform duration-500 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } rounded-xl overflow-hidden`}
>
  <ul className="flex flex-col">
    {['O nás', 'Aktuality', 'Kempy', 'Ceník', 'Školička', 'Doplňkové služby', 'Kontakt'].map((item) => (
      <li key={item} className="border-b border-orange-200">
        <Link
          to={
            item === 'O nás' ? '/o-nas' :
            item === 'Aktuality' ? '/aktuality' :
            item === 'Kempy' ? '/kempy' :
            item === 'Ceník' ? '/cenik' :
            item === 'Školička' ? '/skolicka' :
            item === 'Doplňkové služby' ? '/doplnkove-sluzby' :
            item === 'Kontakt' ? '/kontakt' :
            '/'
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

      <main className="pt-20 max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h1 className="text-5xl font-extrabold mb-6 text-orange-600 text-center">
            Tenisové kempy
          </h1>

          <p className="text-lg mb-8 text-gray-700 text-center max-w-xl mx-auto leading-relaxed">
            Připojte se k našim letním akcím a užijte si nezapomenutelné chvíle plné sportu a zábavy!
          </p>


 {/* Kemp Info Price and Dates */}
 <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-orange-500">
  <h2 className="text-2xl font-semibold text-red-600">Termíny a přihláška na kempy pro rok 2025</h2>

  <ul className="list-inside text-lg mt-4 text-gray-700 space-y-4">
  <li>
    <h3 className="text-xl font-bold text-red-600">Malá Skála</h3>
    <p><strong>Soustředění</strong> – 13. – 18. 7.</p>
    <p><strong>Cena: 6.600 Kč</strong></p>
  </li>
  <li>
    <h3 className="text-xl font-bold text-red-600">Čimice</h3>
    <p><strong>1. Kemp</strong> – 21. 7. – 25. 7.</p>
    <p><strong>2. Kemp</strong> – 28. 7. – 1. 8.</p>
    <p><strong>3. Kemp</strong> – 18. – 22. 8.</p>
    <p><strong>4. Kemp</strong> – 25. – 29. 8.</p>
    <p><strong>Cena za jeden: 3.490 Kč</strong></p>
  </li>
</ul>

<h3 className="text-xl font-semibold mt-6 text-red-600">Přihláška a platba:</h3>
<p className="text-lg mt-2 text-gray-700">
  <strong>Závaznou přihlášku odevzdejte se zálohou:</strong>
</p>
<ul className="list-disc list-inside text-lg mt-2 text-gray-700">
  <li>2.000 Kč pro soustředění v Malé Skále (doplatek do 1. 7.)</li>
  <li>1.000 Kč pro příměstské kempy v Čimicích (doplatek v hotovosti první den)</li>
</ul>

<p className="text-lg mt-2 text-gray-700">
  Platbu proveďte převodem na účet <strong>2102303853/2700</strong> nebo v hotovosti v pondělí při zahájení kempu.
</p>

<p className="text-lg mt-2 text-gray-700 font-medium">
  Při účasti na dvou a více turnusech příměstských kempů poskytujeme <strong>slevu 10 %</strong>.
</p>

<p className="text-lg mt-4 text-gray-700">
  Vyplněnou přihlášku pošlete e-mailem na <strong>kptenis@volny.cz</strong> nebo vyfocenou přes WhatsApp/SMS na číslo <strong>+420 724 265 022</strong>.
</p>

<div className="mt-6">
  <a
    href="/prihlaska-kemp-2025.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
  >
    Zobrazit a vytisknout přihlášku (PDF)
  </a>
</div>

          {/* Přidání mezery pod sekcemi */}
          <div className="mt-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <KempSection
              title="Malá Skála"
              date="13. 7. - 18. 7. 2025"
              description={malaSkalaPopis}
              images={images}
            />
            <KempSection
              title="Příměstské kempy v Čimicích"
              date="21. 7. - 29. 8. 2025"
              description={primestskePopis}
              images={cimiceImages}
            />
          </div>

          

</div>
            
          {/* Kemp Info Section */}
          <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-orange-500">
            <h2 className="text-2xl font-semibold text-red-600">Informace o příměstském kempu</h2>
            <p className="text-lg mt-4 text-gray-700 leading-relaxed">
              Naše letní příměstské tenisové kempy pořádáme již od roku 2006. Mohou se
              účastnit i děti, které netrénují v naší TŠ, bez ohledu na úroveň tenisu.
            </p>

            <h3 className="text-xl font-semibold mt-6 text-red-600">Program:</h3>
            <p className="text-lg mt-4 text-gray-700 leading-relaxed">
              Děti jsou rozdělené do skupin podle úrovně a věku. Aktivity zahrnují
              tenisový trénink, kondiční cvičení a soutěže. Poslední den je věnován
              turnaji s cenami.
            </p>

            <h3 className="text-xl font-semibold mt-6 text-red-600">Co s sebou:</h3>
            <ul className="list-disc list-inside text-lg mt-4 text-gray-600">
              <li>Raketu, švihadlo, láhev na pití</li>
              <li>Kšiltovku, opalovací krém</li>
              <li>Tenisovou obuv a přezůvky</li>
              <li>Oblečení dle počasí, ručník</li>
            </ul>

            <p className="text-lg mt-6 text-gray-700">
              Program začíná v 9:00, sraz je mezi 8:30 - 9:00. Konec v 16:00, s
              vyzvednutím do 16:30.
            </p>

            <p className="text-lg mt-4 text-gray-700">Těšíme se na všechny děti!</p>
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
                  kptenis@volny.cz
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

export default Kempytenis;