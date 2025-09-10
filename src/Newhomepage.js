import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Mail,
  Phone,
  DollarSign,
  Users,
  Briefcase,
  Menu as MenuIcon,
  X as CloseIcon,
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Picture from './components/Picture';


/* ---------- Hooks / utility ---------- */
const useInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

const useScrollY = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return y;
};

// --- NOVÝ ImageCarousel se smooth cross-fade ---
// používá tvůj <Picture />, takže se dál servíruje AVIF/WebP a lazy-loading

// --- ImageCarousel: autoplay běží pořád (requestAnimationFrame), smooth cross-fade ---
const ImageCarousel = ({
  images = [],
  className = "",
  height = 420,
  intervalMs = 3500,
  showArrows = true,
  showDots = true,
}) => {
  const [index, setIndex] = useState(0);
  const [front, setFront] = useState(0); // 0/1 která vrstva je vidět
  const [srcA, setSrcA] = useState(images[0] || "");
  const [srcB, setSrcB] = useState(images[1] || images[0] || "");
  const prevImagesRef = useRef([]);

  // --- preload dalšího obrázku (AVIF 800 px)
  const preloadBase = (base) => {
    if (!base) return;
    const rel = base.replace(`${process.env.PUBLIC_URL}/`, "");
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/optimized/${rel}-800.avif`;
  };

  // --- zobraz konkrétní index s cross-fade
  const show = useCallback((nextIndex) => {
    if (!images.length) return;
    const nextBase = images[nextIndex];
    if (front === 0) setSrcB(nextBase);
    else setSrcA(nextBase);

    const after = (nextIndex + 1) % images.length;
    preloadBase(images[after]);

    requestAnimationFrame(() => setFront((f) => 1 - f));
    setIndex(nextIndex);
  }, [front, images]);

  // --- next/prev (nepoužíváme je v autoplayu přímo kvůli stabilitě refu)
  const prevSlide = useCallback(() => {
    if (images.length < 2) return;
    show((index - 1 + images.length) % images.length);
  }, [images.length, index, show]);

  const nextSlide = useCallback(() => {
    if (images.length < 2) return;
    show((index + 1) % images.length);
  }, [images.length, index, show]);

  // --- ref na nextSlide, aby rAF neměl závislosti a nerozpínal/nezastavoval během scrollu
  const nextSlideRef = useRef(() => {});
  useEffect(() => {
    nextSlideRef.current = () => {
      if (images.length < 2) return;
      show((index + 1) % images.length);
    };
  }, [images.length, index, show]);

  // --- AUTOPLAY přes requestAnimationFrame (místo setInterval)
  useEffect(() => {
    if (images.length < 2) return;

    let rafId;
    let last = performance.now();
    let acc = 0;

    const tick = (t) => {
      const dt = t - last;
      last = t;

      // pokud je tab skrytý, některé prohlížeče stejně framey pauznou – neřešíme
      acc += dt;
      if (acc >= intervalMs) {
        nextSlideRef.current();
        acc = acc % intervalMs;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [intervalMs, images.length]); // žádná závislost na funkcích → rAF běží stabilně

  // --- inicializace / reset jen při reálné změně obsahu pole images
  useEffect(() => {
    if (!images.length) return;
    const prev = prevImagesRef.current;
    const same = images.length === prev.length && images.every((v, i) => v === prev[i]);
    if (!same) {
      setSrcA(images[0]);
      setSrcB(images[1] || images[0]);
      setFront(0);
      setIndex(0);
      preloadBase(images[1]);
      prevImagesRef.current = images.slice();
    }
  }, [images]);

  if (!images.length) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galerie obrázků"
    >
      {/* pevná výška kvůli layout shiftu */}
      <div className="relative" style={{ height }}>
        {/* VRSTVA A */}
        <div className={`absolute inset-0 transition-opacity duration-500 will-change-[opacity] ${front === 0 ? "opacity-100" : "opacity-0"}`}>
          <Picture
            base={srcA}
            width={1200}
            alt={`Slide ${index + 1}`}
            className="h-full"
            imgClass="rounded-xl w-full h-full object-cover shadow-md"
            loading="eager"
          />
        </div>

        {/* VRSTVA B */}
        <div className={`absolute inset-0 transition-opacity duration-500 will-change-[opacity] ${front === 1 ? "opacity-100" : "opacity-0"}`}>
          <Picture
            base={srcB}
            width={1200}
            alt={`Slide ${index + 1}`}
            className="h-full"
            imgClass="rounded-xl w-full h-full object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* Ovládání */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            aria-label="Předchozí snímek"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-600/60 hover:bg-orange-600/80 transition text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Další snímek"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600/60 hover:bg-orange-600/80 transition text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* tečky */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => show(i)}
              aria-label={`Přejít na snímek ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-red-600" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};






/* ---------- FAQ ---------- */
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-3 flex items-center justify-between"
        onClick={() => setOpen((s) => !s)}
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <HelpCircle className={`h-5 w-5 text-orange-600 transition-transform ${open ? 'rotate-45' : ''}`} />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="pb-4 text-gray-700">{a}</p>
        </div>
      </div>
    </div>
  );
};

/* ---------- Photo Gallery (fixed height rows, variable widths only) ---------- */
const PhotoGallery = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  // ✅ všechny tři funkce stabilní
  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback((e) => {
    e?.stopPropagation?.();
    setIdx((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);
  
  const next = useCallback((e) => {
    e?.stopPropagation?.();
    setIdx((p) => (p + 1) % images.length);
  }, [images.length]);
  
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev(e);
      if (e.key === 'ArrowRight') next(e);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, prev, next, close]);  // ✅ teď všechny funkce stabilní

  if (!images.length) return null;

  const widthPattern = [
    'col-span-2',
    'col-span-2',
    'col-span-2',
    'col-span-3',
    'col-span-3',
  ];

  return (
    <>
      <div
        className="
          grid gap-2 sm:gap-3
          grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12
          [grid-auto-rows:130px] sm:[grid-auto-rows:150px] md:[grid-auto-rows:160px] lg:[grid-auto-rows:180px]
        "
      >
        {images.map((src, i) => {
          const col = widthPattern[i % widthPattern.length];
          return (
            <button
              key={i}
              onClick={() => openAt(i)}
              className={`group ${col} h-full overflow-hidden rounded-lg shadow-sm hover:shadow-md transition`}
              aria-label={`Fotka ${i + 1}`}
            >
              <Picture
  base={src}
  width={800}
  alt={`Galerie ${i + 1}`}
  className="block h-full"
  imgClass="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
  loading="lazy"
/>

            </button>
          );
        })}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-6xl w-full">
          <Picture
  base={images[idx]}
  width={1600}
  alt={`Fotografie ${idx + 1}`}
  imgClass="w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
  loading="eager"
  fetchPriority="high"
/>

            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white p-2 rounded-full"
              aria-label="Předchozí fotka"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white p-2 rounded-full"
              aria-label="Další fotka"
            >
              <ChevronRight />
            </button>
            <button
              onClick={close}
              className="absolute top-3 right-3 bg-white/15 hover:bg-white/25 text-white px-3 py-1 rounded-full text-sm font-semibold"
              aria-label="Zavřít galerii"
            >
              Zavřít
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


/* ---------- Reveal wrapper for sections ---------- */
const RevealSection = ({ className = '', children }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      } ${className}`}
    >
      {children}
    </section>
  );
};

/* ---------- Page ---------- */
const Newhomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const y = useScrollY();
  const showStickyCTA = y > 380;
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  // --- HERO carousel (max 4 fotky) ---
const heroImages = [
  `${process.env.PUBLIC_URL}/kurty1zima`,
  `${process.env.PUBLIC_URL}/kurty2zima`,
  `${process.env.PUBLIC_URL}/kurt4antuka`,
  `${process.env.PUBLIC_URL}/Obrázek18`,
];



  

const summerImages = [
  `${process.env.PUBLIC_URL}/prvnikurt`,
  `${process.env.PUBLIC_URL}/druhykurt`,
  `${process.env.PUBLIC_URL}/letnisezonaimage`,
  `${process.env.PUBLIC_URL}/kurt4antuka`,
];

const winterImages = [
  `${process.env.PUBLIC_URL}/kurty1zima`,
  `${process.env.PUBLIC_URL}/kurty2zima`,
  `${process.env.PUBLIC_URL}/kurty3zima`,
  `${process.env.PUBLIC_URL}/kurty4zima`,
];


const galleryImages = [
  `${process.env.PUBLIC_URL}/Obrázek2`,
  `${process.env.PUBLIC_URL}/Obrázek3`,
  `${process.env.PUBLIC_URL}/Obrázek4`,
  `${process.env.PUBLIC_URL}/Obrázek5`,
  `${process.env.PUBLIC_URL}/Obrázek6`,
  `${process.env.PUBLIC_URL}/Obrázek7`,
  `${process.env.PUBLIC_URL}/Obrázek8`,
  `${process.env.PUBLIC_URL}/Obrázek9`,
  `${process.env.PUBLIC_URL}/Obrázek10`,
  `${process.env.PUBLIC_URL}/Obrázek11`,
  `${process.env.PUBLIC_URL}/Obrázek12`,
  `${process.env.PUBLIC_URL}/Obrázek13`,
  `${process.env.PUBLIC_URL}/Obrázek14`,
  `${process.env.PUBLIC_URL}/Obrázek15`,
  `${process.env.PUBLIC_URL}/Obrázek16`,
  `${process.env.PUBLIC_URL}/Obrázek17`,
  `${process.env.PUBLIC_URL}/Obrázek18`,
  `${process.env.PUBLIC_URL}/Obrázek19`,
  `${process.env.PUBLIC_URL}/Obrázek20`,
  `${process.env.PUBLIC_URL}/Obrázek21`,
  `${process.env.PUBLIC_URL}/Obrázek22`,
  `${process.env.PUBLIC_URL}/Obrázek23`,
  `${process.env.PUBLIC_URL}/Obrázek24`,
  `${process.env.PUBLIC_URL}/Obrázek25`,
  `${process.env.PUBLIC_URL}/Obrázek26`,
  `${process.env.PUBLIC_URL}/Obrázek27`,
  `${process.env.PUBLIC_URL}/Obrázek28`,
  `${process.env.PUBLIC_URL}/Obrázek29`,
  `${process.env.PUBLIC_URL}/Obrázek30`,
  `${process.env.PUBLIC_URL}/Obrázek31`,
];


  const [refCards, cardsIn] = useInView();
  const [refFacilities, facIn] = useInView();
  const [refCoaches, coachIn] = useInView();
  const [refFAQ, faqIn] = useInView();
  const [refForm, formIn] = useInView();

  return (
    <div className="min-h-screen bg-amber-50">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white fixed top-5 left-4 right-4 z-50 px-6 py-2 rounded-2xl shadow-lg">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" aria-label="Domů">
            <Picture
  base={`${process.env.PUBLIC_URL}/logocimice`} // bez přípony!
  width={128}
  alt="Tenis Čimice Logo"
  imgClass="h-12 w-12 mr-2 object-contain"
  loading="eager"
  fetchPriority="high"
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

      {/* ====== HERO – left = typografie + areál prvky (kompaktní), right = větší fotobox (bez šipek) ====== */}
      <main className="pt-20">
        <RevealSection className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid lg:grid-cols-2 lg:auto-rows-min gap-6 items-start">
            {/* 1) PRVNÍ: Zahrajte si u nás … */}
            <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 relative">
              <RevealSection className="max-w-2xl mt-3">
                <div className="flex items-center gap-3">
                  <h1 className="text-[30px] sm:text-[34px] font-extrabold tracking-tight text-orange-700">
                    Zahrajte si u nás v&nbsp;Čimicích
                  </h1>
                  <Picture
  base={`${process.env.PUBLIC_URL}/logocimice`} // bez .png
  width={96}
  alt="Tenisová škola Čimice – logo"
  imgClass="h-12 w-12 object-contain"
  loading="lazy"
/>

                </div>
                <div className="mt-1.5 h-[3px] w-32 rounded-full bg-[linear-gradient(90deg,#16a34a,#fbbf24,#f97316)]" />

                {/* Box */}
                <div className="relative mt-3 rounded-2xl border border-gray-200 shadow bg-white overflow-hidden">
                  <div className="h-1.5 w-full bg-[linear-gradient(90deg,#16a34a,#fbbf24,#f97316)] rounded-t-2xl" />
                  <div className="p-5">
                    <p className="text-[14.5px] text-gray-800 leading-relaxed">
                      Termín domluvíme rychle po telefonu nebo přes jednoduchý formulář. Nabízíme individuální tréninky, skupinové lekce i dlouhodobé kurzy pro děti i dospělé.
                    </p>

                    <ul className="mt-3 space-y-1.5 text-[14.5px]">
                      {[
                        'Individuální tréninky i skupinové lekce pro všechny úrovně',
                        'Rychlá domluva po telefonu nebo on-line formulářem',
                        'Možnost dlouhodobých kurzů i jednorázových lekcí',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-2 h-2 w-2 rounded-full bg-green-600" />
                          <span className="text-gray-800">{t}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[13px] text-gray-700">
                      <span className="inline-flex items-center gap-2">
                        <Phone className="h-4 w-4 text-green-600" /> Rychlá domluva
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-600" /> Odpověď do 24&nbsp;h
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <Link
                        to="/rezervace-kurtu"
                        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#f97316,#fbbf24)] text-white font-semibold px-5 py-2.5 shadow hover:brightness-[1.04]"
                      >
                        Rezervace kurtu →
                      </Link>
                      <Link
                        to="/kontakt"
                        className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-white text-green-700 font-semibold px-5 py-2.5 hover:bg-green-50"
                      >
                        Kontakt
                      </Link>
                      <Link
                        to="/nase-kurzy"
                        className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-white text-green-700 font-semibold px-5 py-2.5 hover:bg-green-50"
                      >
                        Naše kurzy
                      </Link>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-4 max-w-md">
                      {[
                        { n: '6', t: 'kurtů celkem', ring: 'ring-green-200 text-green-700 bg-green-50' },
                        { n: '4', t: 'haly v zimě', ring: 'ring-yellow-200 text-yellow-700 bg-yellow-50' },
                        { n: '15+', t: 'let zkušeností', ring: 'ring-orange-200 text-orange-700 bg-orange-50' },
                      ].map((s, i) => (
                        <div key={i} className="text-center">
                          <div className={`mx-auto grid place-items-center h-10 w-10 rounded-full ring-1 ${s.ring}`}>
                            <span className="text-base font-extrabold">{s.n}</span>
                          </div>
                          <div className="mt-1 text-[11px] text-gray-600">{s.t}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* 2) DRUHÝ: Fotobox */}
<div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col">
  <RevealSection className="text-center mb-4">
    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-300">
      Tenis Čimice
    </span>
    <h2 className="mt-2 text-2xl font-extrabold tracking-wide text-orange-700">
      Hrajeme v&nbsp;Čimicích po celý rok
    </h2>
    <p className="mt-1 text-gray-700">
    Přijďte si zahrát nebo potrénovat kdykoli v roce
    </p>
  </RevealSection>

  <RevealSection className="relative bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden flex-1">
    <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#16a34a,#fbbf24,#f97316)] rounded-t-3xl" />
    <div className="relative">
  <ImageCarousel
    images={heroImages}
    height={560}
    intervalMs={6000}
    showArrows={false}  // v hero nechceme šipky
    showDots={true}     // tečky necháme
  />
  <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-orange-700 shadow">
    Tenis u nás
  </span>
</div>

  </RevealSection>
</div>



            {/* 3) TŘETÍ: Nabídka našich tenisových kurzů */}
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <RevealSection className="max-w-2xl mt-1">
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-300">
                    Tenisová škola
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-wide text-green-700">
                    Nabídka našich tenisových kurzů
                  </h3>
                </div>

                <div className="relative mt-2.5 rounded-2xl border border-gray-200 shadow bg-white overflow-hidden">
                  <div className="h-1.5 w-full bg-[linear-gradient(90deg,#16a34a,#fbbf24,#f97316)] rounded-t-2xl" />
                  <div className="p-5 text-left">
                    <p className="text-[14.5px] text-gray-800 leading-relaxed">
                      Dětská školička, skupinové kurzy dětí, kurzy pro dospělé i individuální tréninky.
                      Vyberte si úroveň a čas, který vám sedí.
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {['Začátečníci','Pokročilí','Děti','Dospělí'].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-green-50 text-green-700 ring-1 ring-green-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        to="/nase-kurzy"
                        className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#f97316,#fbbf24)] text-white font-semibold px-4 py-2.5 shadow hover:brightness-[1.04]"
                      >
                        Naše kurzy →
                      </Link>
                      <Link
                        to="/cenik"
                        className="text-sm font-semibold text-green-700 hover:underline underline-offset-4"
                      >
                        Zobrazit ceník
                      </Link>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </RevealSection>


























     










        {/* FEATURE KARTY */}
        <section
          ref={refCards}
          className={`relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-12 transition-all duration-700 ${
            cardsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ceník */}
            <article className="group relative bg-white rounded-2xl shadow-lg p-6 border border-amber-100 hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500" />
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-orange-100 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-orange-50 text-orange-600 grid place-items-center shadow-inner">
                  <DollarSign className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-orange-600">Ceník</h2>
              </div>
              <p className="text-gray-700 mb-5">
                Prohlédněte si naše aktuální ceny pro individuální i skupinové lekce.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  to="/cenik"
                  className="text-orange-600 font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-2"
                >
                  Zobrazit ceník <span aria-hidden>→</span>
                </Link>
                <div className="h-6 w-6 rounded-full bg-yellow-300 shadow ring-2 ring-yellow-200" />
              </div>
            </article>

            {/* Aktuality */}
            <article className="group relative bg-white rounded-2xl shadow-lg p-6 border border-rose-100 hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-red-500 to-pink-500" />
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-rose-100 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-rose-50 text-red-600 grid place-items-center shadow-inner">
                  <Users className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-red-600">Aktuality</h2>
              </div>
              <p className="text-gray-700 mb-5">
                Nejnovější zprávy a události z naší tenisové školy. Sledujte novinky.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  to="/aktuality"
                  className="text-red-600 font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-2"
                >
                  Více informací <span aria-hidden>→</span>
                </Link>
                <div className="h-6 w-6 rounded-full bg-yellow-300 shadow ring-2 ring-yellow-200" />
              </div>
            </article>

            {/* Doplňkové služby */}
            <article className="group relative bg-white rounded-2xl shadow-lg p-6 border border-yellow-100 hover:shadow-xl hover:-translate-y-0.5 transition overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-400" />
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-yellow-100 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-10 w-10 rounded-full bg-yellow-50 text-yellow-600 grid place-items-center shadow-inner">
                  <Briefcase className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-yellow-600">Doplňkové služby</h2>
              </div>
              <p className="text-gray-700 mb-5">
                Vybavení a vyplétání raket pro hráče všech úrovní.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  to="/doplnkove-sluzby"
                  className="text-yellow-600 font-semibold inline-flex items-center gap-1 transition-all group-hover:gap-2"
                >
                  Prozkoumat služby <span aria-hidden>→</span>
                </Link>
                <div className="h-6 w-6 rounded-full bg-yellow-300 shadow ring-2 ring-yellow-200" />
              </div>
            </article>
          </div>
        </section>

        {/* AREÁL + SEZÓNY — vylepšené karty */}
        <section
          ref={refFacilities}
          className={`transition-all duration-700 ${
            facIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hlavička sekce */}
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
                Náš areál
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-wide text-green-700">
                Tenisový areál Čimice
              </h2>
              <p className="mt-1 text-gray-700">
                Pohodlné hraní po celý rok, venku i v halách.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Info karta */}
              <article className="relative bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-700">
                <div className="absolute -top-10 -right-10 h-32 w-32 bg-green-100 rounded-full blur-2xl opacity-60" />
                <h3 className="text-2xl font-extrabold text-green-700 mb-3">
                  Zázemí a povrchy
                </h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  V areálu najdete kvalitní zázemí pro rozmanitou a nerušenou hru. K
                  dispozici jsou <strong>4 samostatné haly</strong> pro pohodlné hraní i
                  v zimní sezóně.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-700 border border-green-200">
                    2× umělá tráva (2023)
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-700 border border-green-200">
                    2× antuka
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-green-700 border border-green-200">
                    1× pevný povrch
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: '6', t: 'kurtů celkem' },
                    { n: '4', t: 'haly (zima)' },
                    
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-3 text-center">
                      <div className="text-xl font-extrabold text-green-700">{s.n}</div>
                      <div className="text-xs text-green-800">{s.t}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    to="/rezervace-kurtu"
                    className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
                  >
                    Rezervovat kurt
                  </Link>
                </div>
              </article>

              {/* Letní sezóna */}
              <article className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-700">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-2xl font-bold text-green-700">Letní sezóna</h3>
                  <span className="text-green-700 font-semibold">(duben – září)</span>
                </div>

                <ul className="text-gray-800 mb-4 leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600 inline-block" />
                    <strong>3 kurty</strong> s umělou trávou
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600 inline-block" />
                    <strong>2 antukové</strong> kurty
                  </li>
                </ul>

                <ImageCarousel images={summerImages} height={300} intervalMs={3500} />


                <div className="mt-5 flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200">
                      Venkovní hra
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200">
                      Turnaje & sparing
                    </span>
                  </div>
                  <Link
                    to="/rezervace-kurtu"
                    className="text-orange-600 font-semibold inline-flex items-center gap-1 transition-all hover:gap-2"
                  >
                    Hrát v létě →
                  </Link>
                </div>
              </article>

              {/* Zimní sezóna */}
              <article className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-green-700">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-2xl font-bold text-green-700">Zimní sezóna</h3>
                  <span className="text-green-700 font-semibold">(říjen – březen)</span>
                </div>

                <ul className="text-gray-800 mb-4 leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600 inline-block" />
                    <strong>2 kurty</strong> s umělou trávou
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600 inline-block" />
                    <strong>1 kurt</strong> s pevným povrchem
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-600 inline-block" />
                    <strong>1 antukový</strong> kurt
                  </li>
                </ul>

                <ImageCarousel images={winterImages} height={300} intervalMs={3500} />

                <div className="mt-5 flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200">
                      Kryté haly
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200">
                      Komfort v zimě
                    </span>
                  </div>
                  <Link
                    to="/rezervace-kurtu"
                    className="text-orange-600 font-semibold inline-flex items-center gap-1 transition-all hover:gap-2"
                  >
                    Hrát v zimě →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* TRENÉŘI – zjednodušená sekce bez karet */}
        <section
          ref={refCoaches}
          className={`transition-all duration-700 mt-10 ${
            coachIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="relative overflow-hidden bg-white rounded-2xl shadow-lg border-t-4 border-blue-600">
              <div className="absolute -top-10 -right-10 h-36 w-36 bg-blue-100 rounded-full blur-2xl opacity-60 pointer-events-none" />
              
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-1 flex flex-col justify-center">
                  <span className="inline-block w-max px-3 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    Náš tým trenérů
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-wide text-blue-700">
                    Trénujeme srdcem i hlavou
                  </h2>
                  <p className="mt-3 text-gray-800 text-lg leading-relaxed">
                    Přátelský přístup, jasný plán a dlouhodobá práce na technice, pohybu i mindsetu.
                    Od školičky po turnajovou přípravu.
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { n: '15+', t: 'let zkušeností' },
                      { n: '1000+', t: 'odtrén. lekcí/rok' },
                    ].map((s, i) => (
                      <div key={i} className="rounded-xl bg-blue-50/60 border border-blue-100 p-3 text-center">
                        <div className="text-xl font-extrabold text-blue-700">{s.n}</div>
                        <div className="text-xs text-blue-800">{s.t}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/nase-kurzy"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
                    >
                      Naše kurzy
                    </Link>
                    <Link
                      to="/kontakt"
                      className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
                    >
                      Kontakt
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-2 relative">
                <Picture
  base={`${process.env.PUBLIC_URL}/fotkatreneri`}
  width={1200}
  alt="Trenérský tým"
  imgClass="rounded-xl w-full shadow-md object-cover transition-transform duration-700 hover:scale-[1.015]"
  loading="lazy"
/>

                  <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/85 text-blue-700 shadow">
                    Trenéři s praxí
                  </span>
                </div>
              </div>

              <div className="px-8 pb-6">
                <div className="mt-2 grid sm:grid-cols-3 gap-4">
                  <div className="rounded-lg border border-blue-100 bg-white p-3">
                    <div className="text-sm font-semibold text-blue-700">Technika & pohyb</div>
                    <div className="text-sm text-gray-700">Úderová jistota, footwork a timing.</div>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-white p-3">
                    <div className="text-sm font-semibold text-blue-700">Mindset & plán</div>
                    <div className="text-sm text-gray-700">Srozumitelné cíle a měřitelný posun.</div>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-white p-3">
                    <div className="text-sm font-semibold text-blue-700">Zábava & bezpečí</div>
                    <div className="text-sm text-gray-700">Přátelské prostředí pro děti i dospělé.</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FOTOGALERIE – místo RECENZE */}
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <article className="relative bg-white rounded-2xl shadow-lg border-t-4 border-yellow-500 p-6 overflow-hidden">
            <div className="absolute -top-12 -right-10 h-40 w-40 bg-yellow-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
            <header className="mb-4 relative z-[1]">
              <div className="flex items-center gap-2">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-yellow-50 text-yellow-700 border border-yellow-200">
                  Fotogalerie
                </span>
                <span className="h-2 w-2 rounded-full bg-yellow-300 shadow" />
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-gray-900">Momentky z kurtů</h2>
              <p className="text-gray-700">
                Tréninky, kempy i turnaje. Energie, která k nám patří.
              </p>
            </header>

            <div className="relative z-[1]">
              <PhotoGallery images={galleryImages} />
            </div>
          </article>
        </section>

        {/* FAQ – ve stylu Areál/Trenéři */}
<section
  ref={refFAQ}
  className={`transition-all duration-700 ${
    faqIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
  }`}
>
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
    <article className="relative overflow-hidden bg-white rounded-2xl shadow-lg border-t-4 border-orange-600">
      {/* jemné světlo v pozadí */}
      <div className="absolute -top-10 -right-10 h-36 w-36 bg-orange-100 rounded-full blur-2xl opacity-60 pointer-events-none" />

      <div className="p-8">
        {/* Hlavička */}
        <div className="text-center">
          <span className="inline-block w-max px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
            Časté dotazy
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-wide text-orange-700">
            Na co se nás ptáte nejčastěji
          </h2>
          <p className="mt-1 text-gray-700">
            Rychlé odpovědi na praktické věci kolem rezervací, školičky i vybavení.
          </p>
        </div>

        {/* Obsah – 2 sloupce: vlevo „rychlé karty“, vpravo akordeon */}
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          {/* Rychlé info karty */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-4">
              <div className="flex items-center gap-2 text-orange-700 font-semibold">
                <HelpCircle className="h-5 w-5" />
                Rezervace kurtu
              </div>
              <p className="mt-1 text-sm text-gray-700">
              Zarezervujte během chvilky telefonem, SMS nebo přes formulář. Vyberte povrch a čas, potvrďte a hrajete.
              </p>
              <Link
                to="/rezervace-kurtu"
                className="mt-3 inline-block text-orange-600 font-semibold hover:underline"
              >
                Rezervace kurtu →
              </Link>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-4">
              <div className="flex items-center gap-2 text-orange-700 font-semibold">
                <Users className="h-5 w-5" />
                Školička & kurzy
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Dětská školička i kurzy pro dospělé. Začátečníci i pokročilí.
              </p>
              <div className="mt-3 flex gap-3">
                <Link to="/skolicka" className="text-orange-600 font-semibold hover:underline">
                  Školička →
                </Link>
                <Link to="/nase-kurzy" className="text-orange-600 font-semibold hover:underline">
                  Naše kurzy →
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-4">
              <div className="flex items-center gap-2 text-orange-700 font-semibold">
                <DollarSign className="h-5 w-5" />
                Ceník & permanentky
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Přehledné ceny pro jednorázové hry i výhodné permanentky.
              </p>
              <Link to="/cenik" className="mt-3 inline-block text-orange-600 font-semibold hover:underline">
                Zobrazit ceník →
              </Link>
            </div>

            <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-4">
              <div className="flex items-center gap-2 text-orange-700 font-semibold">
                <Briefcase className="h-5 w-5" />
                Servis & vybavení
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Vyplétání raket, poradenství a doplňky přímo v areálu.
              </p>
              <Link
                to="/doplnkove-sluzby"
                className="mt-3 inline-block text-orange-600 font-semibold hover:underline"
              >
                Doplňkové služby →
              </Link>
            </div>
          </div>

          {/* Akordeon FAQ – používá tvůj <FAQItem /> */}
          <div className="rounded-xl border border-orange-100 p-5">
    
            <FAQItem
              q="Je školička vhodná pro úplné začátečníky?"
              a="Ano. Začínáme od základů (držení rakety, pohyb, koordinace) a postupně přidáváme techniku a herní situace."
            />
            <FAQItem
              q="Můžu si půjčit vybavení?"
              a="Ano. Základní vybavení je k zapůjčení a nabízíme i vyplétání vlastních raket. Poradíme s výběrem podle úrovně."
            />
            <FAQItem
              q="Jak funguje systém plateb tenisové školy?"
              a="Systém plateb tenisové školy je podrobně popsán níže na stránce, v sekci Ceník."
            />
            <FAQItem
              q="Kde vás najdu a jak vás kontaktovat?"
              a="Areál Tenis Čimice – Na Průhonu 812/3, Praha 8. Napište na kptenis@volny.cz nebo volejte +420 602 354 978."
            />
          </div>
        </div>

        {/* CTA pod FAQ */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/rezervace-kurtu"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
          >
            Rezervovat kurt
          </Link>
          <Link
            to="/kontakt"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </article>
  </div>
</section>


        {/* FORMULÁŘ – ve stylu Areál/Trenéři */}
<section
  ref={refForm}
  className={`transition-all duration-700 mt-10 ${
    formIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
  }`}
>
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <article className="relative overflow-hidden bg-white rounded-2xl shadow-lg border-t-4 border-orange-600">
      {/* jemný „glow“ v pozadí */}
      <div className="absolute -top-12 -right-12 h-44 w-44 bg-orange-100 rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="p-8">
        {/* Hlavička */}
        <div className="text-center">
          <span className="inline-block w-max px-3 py-1 rounded-full text-sm font-semibold bg-orange-50 text-orange-700 border border-orange-200">
            Kontakt & objednávky
          </span>
        </div>
        <h2 className="mt-2 text-3xl font-extrabold tracking-wide text-orange-700 text-center">
          Napište nám
        </h2>
        <p className="mt-1 text-gray-700 text-center">
          Dejte nám vědět, s čím můžeme pomoci. Odpovíme zpravidla do 24&nbsp;hodin.
        </p>

        {/* Dvě kolony: vlevo info/rychlé kontakty, vpravo formulář */}
        <div className="mt-8 grid lg:grid-cols-5 gap-8">
          {/* INFO panel */}
          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
              <div className="flex items-center gap-3 text-orange-700 font-semibold">
                <Mail className="h-5 w-5" />
                E-mail
              </div>
              <a
                href="mailto:kptenis@volny.cz"
                className="mt-1 block text-gray-800 hover:text-orange-700 underline underline-offset-2"
              >
                kptenis@volny.cz
              </a>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-5">
              <div className="flex items-center gap-3 text-orange-700 font-semibold">
                <Phone className="h-5 w-5" />
                Telefon
              </div>
              <ul className="mt-1 space-y-1 text-gray-800">
                <li>
                  <a href="tel:+420602354978" className="hover:text-orange-700 underline underline-offset-2">
                    +420 602 354 978
                  </a>
                </li>
                <li>
                  <a href="tel:+420724265022" className="hover:text-orange-700 underline underline-offset-2">
                    +420 724 265 022
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-orange-100 bg-white p-5">
              <div className="text-sm font-semibold text-orange-700">Rychlé tipy</div>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li>• Chcete jen hrát? Použijte <span className="font-medium">Rezervovat kurt</span>.</li>
                <li>• Dotaz ke školičce/kurzům? Napište věk a úroveň.</li>
                <li>• Servis rakety? Uveďte typ výpletu a napětí.</li>
              </ul>
            </div>
          </aside>

          {/* FORMULÁŘ */}
          <div className="lg:col-span-3">
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
                    <option>Rezervace kurtu</option>
                    <option>Školička / kurzy</option>
                    <option>Servis a vybavení</option>
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
                    placeholder="Napište nám prosím co nejvíce detailů…"
                  />
                </div>

                <div className="md:col-span-2 flex items-center gap-3">
                  <input id="gdpr" type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                  <label htmlFor="gdpr" className="text-sm text-gray-700">
                    Souhlasím se zpracováním osobních údajů pro účely vyřízení dotazu.
                  </label>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 px-8 rounded-full shadow-md hover:bg-orange-700 transition hover:shadow-lg hover:scale-[1.02] active:scale-100"
                  >
                    Odeslat zprávu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>
</main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
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
                <a href="mailto:kptenis@volny.cz" className="text-gray-400 hover:text-white">kptenis@volny.cz</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" />
                <a href="tel:+420602354978" className="text-gray-400 hover:text-white">+420 602 354 978</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" />
                <a href="tel:+420724265022" className="text-gray-400 hover:text-white">+420 724 265 022</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* STICKY CTA (po scrollu) */}
      <div
        className={`fixed left-0 right-0 bottom-4 z-[60] flex justify-center transition-all ${
          showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-hidden={!showStickyCTA}
      >
        <div className="bg-white shadow-2xl rounded-full px-3 py-2 flex gap-2 items-center border border-amber-200">
          <Link
            to="/rezervace-kurtu"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
          >
            Rezervovat kurt
          </Link>
          <Link
            to="/nase-kurzy"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-[1.02] transition"
          >
            Naše kurzy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newhomepage;
