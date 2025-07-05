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

const Novinky = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Definice novinek
const newsItems = [
  {
    title: 'Start venkovní sezóny',
    date: '14.4.2025',
    content: (
      <>
        <p>Antukové kurty otevřeny denně 7:00 – 21:00</p>
        <br />
        <p>Těšíme se na první jarní výměny. 🌞</p>
      </>
    ),
  },
  {
    title: 'Velikonoční turnaj – děti',
    date: '29.3.2025',
    content: (
      <>
        <p>Hravé dopoledne pro mladé hráče, start 9:00 (registrace do 28.3.)..</p>
        <br />
        <p>Startovné 300 Kč; medaile, čokoládové odměny a spousta zábavy. 🐰🥇</p>
      </>
    ),
  },
  {
    title: 'Tréninková sobota',
    date: '13.3.2025',
    content: (
      <>
        <p>Společné drily a hry pro všechny věkové kategorie, 9:00 – 12:00.</p>
        <p>15.3.2025, 22.3.2025 a 5.4.2025</p>
        <br />
        <p>Pitný režim a míče zajištěny; stačí dobrá nálada. 😊</p>
      </>
    ),
  },
  {
    title: 'Gratulace Natálce Mackové a Davidu Haramule',
    date: '8.3.2025',
    content: (
      <>
        <p>NATÁLKA MACKOVÁ ve finále domácího turnaje staršího žactva ČTS ve čtyřhře.</p>
        <p>DAVID HARAMULE v semifinále dvouhry.</p>
        <br />
        <p>Gratulace oběma</p>
      </>
    ),
  },
  {
    title: 'V termínu jarních prázdnin Prahy 8',
    date: '17.2.2025',
    content: (
      <>
        <p>17.2. - 21.2. 25 SE SKUPINOVÉ TRÉNINKY NEKONAJÍ.</p>
        <p>KRÁSNÉ PRÁZDNINY.</p>
        <br />
        <p>Tréninky probíhají po dohodě, dle zájmu.</p>
      </>
    ),
  },
  {
    title: 'Úspěchy na turnaji ČTS dorostenců',
    date: '15.2.2025',
    content: (
      <>
        <p>ANIČKA KOBZOVÁ v semifinále dvouhry turnaje ČTS dorostenek.</p>
        <p>FANDA KOBZA v semifinále čtyřhry dorostenců turnaje dorostenců.</p>
        <br />
        <p>GRATULACE</p>
        <p>Viz. foto Fcb a inst.</p>
      </>
    ),
  },
  {
    title: 'POZVÁNKA na tenisové turnaje ČTS v rámci zimní sezony',
    date: '27.1.2025',
    content: (
      <>
        <p>POZVÁNKA na tenisové turnaje ČTS v rámci zimní sezony na domácích kurtech</p>
        <br />
        <ul className="list-disc list-inside">
          <li>15. - 16. 2. DOROST</li>
          <li>1. - 2. 3. MLADŠÍ ŽACTVO</li>
          <li>8. - 9. 3. STARŠÍ ŽACTVO</li>
        </ul>
        <br />
        <p>KLUBOVÉ TURNAJE</p>
        <br />
        <ul className="list-disc list-inside">
          <li>VELIKONOČNÍ TURNAJ pro děti 29.3.</li>
          <li>VELIKONOČNÍ TURNAJ DOSPĚLÝCH ve čtyřhrách a mixech 5.4.</li>
        </ul>
        <br />
        <p>TĚŠÍME SE NA VAŠI ÚČAST 😊</p>
      </>
    ),
  },
  {
    title: 'Vánoční přání a informace o trénincích',
    date: '24.12.2024',
    content: (
      <>
        <p>PŘEJEME VŠEM NAŠIM SVĚŘENCŮM A PŘÍZNIVCŮM</p>
        <p>KRÁSNÉ VÁNOCE a VŠECHNO NEJLEPŠÍ V NOVÉM ROCE. ❤️</p>
        <p>SPOUSTU NEJEN TENISOVÝCH ÚSPĚCHŮ v nové sezoně 😊</p>
        <br />
        <p>Tréninky během vánočních prázdnin 23.12. - 3.1. je nutné domlouvat individuálně.</p>
        <p>Skupinové lekce dle běžného rozvrhu se v tomto období nekonají.</p>
      </>
    ),
  },
  {
    title: 'SAŠA HOFMANN - nový držitel putovního poháru',
    date: '20.12.2024',
    content: (
      <>
        <p>SAŠA HOFMANN</p>
        <p>novým držitelem putovního poháru pro aktuálně nejlepšího čimického hráče.</p>
        <p>Úžasný herní posun a nepřehlédnutelný zodpovědný přístup k tréninku.</p>
        <p>Saša byl pro celý trenérský tým jasnou volbou.</p>
        <p>GRATULACE 👏</p>
      </>
    ),
  },
  {
    title: 'VÝSLEDKY VÁNOČNÍHO TURNAJE DĚTÍ',
    date: '14.12.2024',
    content: (
      <>
        <p>VÝSLEDKY VÁNOČNÍHO TURNAJE DĚTÍ</p>
        <p>Děti hrály ve skupinách dle věku a herní úrovně, každý s každým a na závěr i čtyřhru.</p>
        <p>Vítězka mezi dívkami SOŇA ZAJÍČKOVÁ</p>
        <p>Vítěz chlapců ONDRA ŘEHOŘ a KUBA KAISER.</p>
        <p>Vítěz ve skupince starších BASŤA BALOUN a NATÁLKA MACKOVÁ</p>
        <br />
        <p>Gratulace vítězům, všichni zaslouží pochvalu, moc prima sledovat zápasy se zápalem pro hru a vyrovnanými výměnami. ❤️</p>
      </>
    ),
  },
  {
    title: 'Výsledky vánočního turnaje čtyřher dospělých',
    date: '7.12.2024',
    content: (
      <>
        <p>Výsledky vánočního turnaje čtyřher dospělých</p>
        <p>Vítězi pánské čtyřhry MARCEL NOVOTNÝ a PETR HARAMULE</p>
        <p>Vítězi mixů LENKA VYDROVÁ a PETR PSUTKA</p>
        <p>Gratulace vítězům a poděkování všem účastníkům, moc vydařená akce 👏</p>
        <p>FOTO viz instagram a facebook.</p>
      </>
    ),
  },
  {
    title: 'POZVÁNKA na VÁNOČNÍ KLUBOVÉ TURNAJE',
    date: '30.11.2024',
    content: (
      <>
        <p>POZVÁNKA na VÁNOČNÍ KLUBOVÉ TURNAJE</p>
        <ul className="list-disc list-inside">
          <li>30.11. pro nejmenší v kategorii minitenis a střední kurt</li>
          <li>7.12. čtyřhry a mixy dospělých</li>
          <li>14.12. babytenis, mladší a starší žactvo</li>
        </ul>
      </>
    ),
  },
  {
    title: 'TRÉNINKY zaměřené na zápasovou přípravu',
    date: '7.12.2024',
    content: (
      <>
        <p>TRÉNINKY zaměřené na zápasovou přípravu dvouher a čtyřher se budou konat v průběhu celé zimní sezony KAŽDOU SOBOTU od 9 do 12h.</p>
        <p>S vyjímkou konání turnaje.</p>
      </>
    ),
  },
  {
    title: 'Podzimní prázdniny',
    date: '28.10.2024',
    content: (
      <>
        <p>V průběhu podzimních prázdnin 28.- 30.10. se skupinové tréninky dle běžného rozvrhu nekonají.</p>
        <p>Zájemci o trénink je nutné domluvit individuálně.</p>
        <p>KRÁSNÉ PRÁZDNINY</p>
      </>
    ),
  },
  {
    title: 'ZAHÁJENÍ ZIMNÍ SEZONY',
    date: '14.10.2024',
    content: (
      <>
        <p>ZAHÁJENÍ ZIMNÍ SEZONY, tréninky budou od pondělka probíhat již v halách.</p>
      </>
    ),
  },
  {
    title: 'TURNAJ ČTYŘHER na zakončení letní sezony',
    date: '6.10.2024',
    content: (
      <>
        <p>TURNAJ ČTYŘHER na zakončení letní sezony</p>
        <p>Letošní vítězi putovního poháru</p>
        <p>Skupina 1 rodiče + děti DAVID a PETR HARAMULOVI</p>
        <p>Skupina 2 sourozenci ANIČKA a FANDA KOBZOVI</p>
        <p>Skupina 3 babytenis JENDA a PETR HARAMULOVI</p>
        <br />
        <p>Gratulace úplně všem, moc pěkná vyrovnaná utkání ve všech skupinách a milá přátelská atmosféra náležící k této naší každoroční akci včetně krásného počasí. 👏</p>
        <p>DĚKUJI všem za účast!</p>
      </>
    ),
  },
  {
    title: 'TURNAJ DVOUHER DĚTÍ',
    date: '29.9.2024',
    content: (
      <>
        <p>TURNAJ DVOUHER DĚTÍ</p>
        <br />
        <p>Vítěz 1.skupiny mladší žáci ADAM MAREK</p>
        <p>Vítěz 2. skupiny mladší žáci MATYÁŠ KÁBR</p>
        <p>Vítěz 3. skupiny babytenis Jenda Haramula</p>
        <p>Všichni hráči si ještě navíc zahráli čtyřhry a VŠEM dnešním účastníkům gratulace a pochvala.</p>
      </>
    ),
  },
  {
    title: 'TRÉNINKY ZAČÍNAJÍ OPĚT od 2.9.',
    date: '2.9.2024',
    content: (
      <>
        <p>TRÉNINKY ZAČÍNAJÍ OPĚT od 2.9.</p>
        <p>V novém rozvrhu.</p>
        <p>Trénink ŠKOLIČKA MINITENIS</p>
        <ul className="list-disc list-inside">
          <li>pondělí 17-18h</li>
          <li>středa 17-18h</li>
          <li>pátek 16-17h</li>
        </ul>
      </>
    ),
  },
    {
      title: 'Přejeme všem krásné prázdniny.',
      date: '1.7.2024',
      content: (
        <>
          <p>Tréninky během prázdnin jsou pouze dle individuální domluvy.</p>
          <p>Těšíme se na účastníky:</p>
          <ul className="list-disc list-inside">
            <br/>
            <strong>Soustředění v Malé Skále </strong>
            <li>14.-19.7.</li>
            <br/>
            <strong>Příměstských kempů</strong>
            <li>22.7. - 26.7.</li>
            <li>29.7. - 2.8.</li>
            <li>19.8. - 23.8.</li>
            <li>26.8. - 30.8.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Celkové výsledky našich 9 týmů v letošní soutěži družstev',
      date: '30.6.2024',
      content: (
        <>
          <ul className="list-disc list-inside">
            <li>Dospělí "A" 2. výkonnostní třída 7. místo</li>
            <li>Dospělí "B" 4. výkonnostní třída 2. místo</li>
            <li>Dorost "A" 2. třída 3. místo</li>
            <li>Dorost "B" 3. třída 2. místo</li>
            <li>Starší žactvo "A" 1. třída 7. místo</li>
            <li>Starší žactvo "B" smíšená soutěž 7. místo</li>
            <li>Mladší žactvo "A" 1. třída 3. místo</li>
            <li>Mladší žactvo "B" smíšená soutěž 2. místo</li>
            <li>Babytenis 2. třída 7. místo</li>
          </ul>
          <br/>
          <p>
            Gratulace, pochvala a poděkování všem, kteří reprezentovali naše týmy Sokol Čimice.
          </p>
        </>
      ),
    },
    {
      title: 'Výsledky 7. kolo Družstva 24',
      date: '23.6.2024',
      content: (
        <>
          <p><strong>Neděle 23.6.</strong></p><br/>
          <ul className="list-disc list-inside">
            <li>Dorost "B" 6:3, soupeř TK Michle</li>
            <li>Dorost "A" 0:9, soupeř TO Bohemians</li>
            <li>Mladší žactvo "A" 9:0, soupeř TK Topolka</li>
            <li>Mladší žactvo "B" 2:4, soupeř TK Ruzyně</li>
            <li>Babytenis 2:4, soupeř Tennis Pála & Vízner</li>
          </ul>
          <br/>
          <p><strong>Sobota 22.6.</strong></p><br/>
          <ul className="list-disc list-inside">
            <li>Dospělí "A" 3:6, soupeř Tenis Kunratice</li>
            <li>Dospělí "B" 5:4, soupeř Sokol Petrovice</li>
            <li>Starší žactvo "A" 3:6, soupeř Tenis Akademie Bálek</li>
            <li>Starší žactvo "B" 0:6, soupeř TŠ Lucie Hradecké</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Výsledky 6. kolo Družstva',
      date: '16.6.2024',
      content: (
        <>
          <p><strong>Neděle 16.6.</strong></p><br/>
          <ul className="list-disc list-inside">
            <li>Dorost "A" 5:4, soupeř Kunratice</li>
            <li>Dorost "B" 3:6, soupeř SK Satalice</li>
            <li>Mladší žactvo "A" 9:0, soupeř Lob Bohnice</li>
            <li>Mladší žactvo "B" 3:3, soupeř TK Břevnov</li>
            <li>Babytenis 3:3, soupeř TK Praga Vysočany</li>
            <br/>
          </ul>
          <p><strong>Sobota 15.6.</strong></p><br/>
          <ul className="list-disc list-inside">
            <li>Starší žactvo "A" 6:3, soupeř Lob Bohnice</li>
            <li>Starší žactvo "B" 4:2, soupeř VŠ Technika Strojní</li>
            <li>Dospělí "A" 3:6, soupeř TJ Slavoj Tesla Hloubětín</li>
            <li>Dospělí "B" 5:4, soupeř TO Bohemians Ph</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Výsledky 5. kolo Družstva',
      date: '2.6.2024',
      content: (
        <>
          <p> <strong>Neděle 2.6.</strong> </p><br/>
          <ul className="list-disc list-inside">
            <li>Dorost "A" 6:3, soupeř SK Meteor Ph</li>
            <li>Mladší žactvo "B" 6:0, soupeř TC Donovalská</li>
            <li>Dorost "B" 6:3, soupeř TK Břevnov</li>
            <li>Babytenis 2:4, soupeř TŠ Lucie Hradecké</li>
            <li>Mladší žactvo "A" 3:6, soupeř TŠ Lucie Hradecké "A"</li>
            <br/>
          </ul>
          <p><strong>Sobota 1.6.</strong></p><br/>
          <ul className="list-disc list-inside">
            <li>Dospělí "A" 5:4, soupeř TK Topolka Ph</li>
            <li>Dospělí "B" 7:2, soupeř Tenis Centrum Head</li>
            <li>Starší žactvo "A" 0:9, soupeř TK Hamr</li>
            <li>Starší žactvo "B" 2:4, soupeř Lob Bohnice</li>
          </ul>
        </>
      ),
    },
    {
        title: 'Výsledky 4. kolo Družstva',
        date: '26.5.2024',
        content: (
          <>
            <p><strong>Neděle 26.5.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Mladší žactvo "A" 8:1, soupeř TO Bohemians Ph</li>
              <li>Dorost "A" 3:6, soupeř TK Ruzyně</li>
              <li>Dorost "B" 4:5, soupeř Sokol Petrovice</li>
              <li>Babytenis 1:5, soupeř SK Satalice</li>
              <li>Mladší žactvo "B" volno</li>
              <br/>
            </ul>
            <p><strong>Sobota 25.5.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dospělí "A" 5:4, soupeř Tenis Xaverov Horní Počernice</li>
              <li>Starší žactvo "A" 4:5, soupeř TO Bohemians</li>
              <li>Starší žactvo "B" 5:1, soupeř Tenis Královice</li>
              <li>Dospělí "B" volno</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Výsledky 3. kolo Družstva',
        date: '12.5.2024',
        content: (
          <>
            <p><strong>Neděle 12.5.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Mladší žactvo "A" 6:3, soupeř LTC Modřany</li>
              <li>Mladší žactvo "B" 3:3, soupeř TJ Solidarita</li>
              <li>Dorost "B" 5:4, soupeř TK Ema Ph</li>
              <li>Babytenis 0:6, soupeř I.ČLTK</li>
              <li>Dorost "A" volno</li>
              <br/>
            </ul>
            <p><strong>Sobota 11.5.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dospělí "B" 5:4, soupeř SK Žižkov</li>
              <li>Dospělí "A" 0:9, soupeř TJ Solidarita</li>
              <li>Starší žactvo "A" 4:5, soupeř Sokol Horní Počernice</li>
              <li>Starší žactvo "B" 0:6, soupeř TK Cibulka</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Výsledky 2. kolo Družstva',
        date: '5.5.2024',
        content: (
          <>
            <p><strong>Neděle 5.5.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dorost "A" 7:2, soupeř TŠ Lucie Hradecké</li>
              <li>Dorost "B" 6:3, soupeř Tenis Akademie Bálek</li>
              <li>Mladší žactvo "A" volno</li>
              <li>Mladší žactvo "B" 5:1, soupeř TJ Slavoj Hloubětín</li>
              <li>Babytenis 6:0, soupeř TK Konstruktiva Ph</li>
              <br/>
            </ul>
            <p><strong>Sobota 4.5.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dospělí "A" 1:8, soupeř TJ Spoje Ph</li>
              <li>Dospělí "B" 5:4, soupeř v Kunraticích</li>
              <li>Starší žactvo "A" 4:5, soupeř TJ Spoje Ph</li>
              <li>Starší žactvo "B" 1:5, soupeř Tenis Xaverov</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Výsledky 1. kolo Družstva',
        date: '28.4.2024',
        content: (
          <>
            <p><strong>Neděle 28.4.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dorost "A" 7:2, soupeř TJ Solidarita "B"</li>
              <li>Dorost "B" 1:8, soupeř TK Oaza Ph</li>
              <li>Mladší žactvo "A" 4:5, soupeř TJ Spoje Ph</li>
              <li>Mladší žactvo "B" 4:2, soupeř TJ Sokol Liboc</li>
              <li>Babytenis 0:6, soupeř TCD Donovalská "A"</li>
              <br/>
            </ul>
            <p><strong>Sobota 27.4.</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dospělí "A" 4:5, soupeř Tenis Klánovice "A"</li>
              <li>Dospělí "B" 2:7, soupeř Tenis Klánovice "C"</li>
              <li>Starší žactvo "A" 4:5, soupeř Tenis Klánovice "B"</li>
              <li>Starší žactvo "B" 0:6, soupeř TCD Donovalská</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Soutěž družstev 2024',
        date: '8.4.2024',
        content: (
          <>
            <p><strong>Soutěž družstev 2024 - Termíny utkání:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Dospělí, starší žactvo: Soboty 27.4., 4.5., 11.5., 25.5., 1.6., 15.6., 23.6.</li>
              <li>Dorost, mladší žactvo, babytenis: Neděle 28.4., 5.5., 12.5., 26.5., 2.6., 16.6., 23.6.</li>
            </ul>
            <p>Soupisky a místa konání jednotlivých utkání na <a href="https://www.cztenis.cz">www.cztenis.cz</a></p>
            <p>Nominace hráčů, upřesnění místa a času začátku bude sděleno nejpozději do pátku před hracím víkendem.</p>
            <p>Úspěšnou sezónu všem hráčům a hráčkám!</p>
          </>
        ),
      },
      {
        title: 'Hra na venkovních kurtech',
        date: '8.4.2024',
        content: (
          <>
            <p>Od 8.4. hrajeme již na venkovních kurtech!</p>
          </>
        ),
      },
      {
        title: 'Velikonoce - tréninky se nekonají',
        date: '1.4.2024',
        content: (
          <>
            <p>V pondělí 1.4. se tréninky nekonají. Veselé Velikonoce!</p>
          </>
        ),
      },
      {
        title: 'Výsledky Velikonočního turnaje',
        date: '28.3.2024',
        content: (
          <>
            <p><strong>Výsledky Velikonočního turnaje:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Skupina 1: Vítěz Natálka Macková a David Haramule</li>
              <li>Skupina 2: Vítěz Rasťa Tirč</li>
              <li>Skupina 3: Vítěz Adam Roubal</li>
            </ul><br/>
            <p>Všem účastníkům pochvala a gratulace za bojovné výkony!</p>
          </>
        ),
      },
      {
        title: 'Tréninky během jarních prázdnin',
        date: '12.2.2024',
        content: (
          <>
            <p>V termínu jarních prázdnin (12. - 16. 2. 2024) se tréninky konají pouze pro zájemce. Účast je nutné nahlásit předem. Přejeme všem hezké prázdniny!</p>
          </>
        ),
      },
      {
        title: 'Úspěchy Lenky Hrbkové',
        date: '4.2.2024',
        content: (
          <>
            <p>Lenka Hrbková zvítězila ve čtyřhře turnaje ČTS žen TK SK Kladno a byla ve finále čtyřhry žen CTA Rudná. Gratulace!</p>
          </>
        ),
      },
      {
        title: 'Vítězka Anička Kobzová',
        date: '20.1.2024',
        content: (
          <>
            <p>Anička Kobzová zvítězila v turnaji dvouhry starších žákyň na domácích kurtech a spolu s Aničkou Novotnou vyhrály i čtyřhru.</p>
            <p>Bašta Baloun se dostal do semifinále turnaje starších žáků a ve čtyřhře s Davidem Haramulem zvítězili. Gratulace všem!</p>
          </>
        ),
      },
      {
        title: 'Vánoční přání a tréninky během prázdnin',
        date: '23.12.2023',
        content: (
          <>
            <p><strong>Přejeme všem našim svěřencům a příznivcům Veselé Vánoce a mnoho tenisových úspěchů v roce 2024!</strong></p><br/>
            <p>Během vánočních prázdnin (23.12.2023 - 3.1.2024) se skupinové tréninky nekonají, individuální tréninky jsou možné po domluvě. Tenisové haly jsou v provozu během prázdnin i všech svátků.</p>
          </>
        ),
      },
      {
        title: 'Natálka Macková držitelkou Putovního poháru',
        date: '22.12.2023',
        content: (
          <>
            <p>Natálka Macková získala Putovní pohár pro nejlepšího čimického hráče za období září - prosinec 2023. Gratulace za zodpovědný přístup, zápal pro hru a veliké zlepšení!</p>
          </>
        ),
      },
      {
        title: 'Výsledky Vánočního turnaje',
        date: '9.12.2023',
        content: (
          <>
            <p><strong>Výsledky Vánočního turnaje:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Skupina 1: 1. místo Vašek Valenta, 2. místo Terka Poláková, 3. místo Matyáš Kábr</li>
              <li>Skupina 2: 1. místo Ondra Řehoř, 2. místo Jan Haramule, 3. místo Sebík Navrátil</li>
            </ul>
            <p>Ve společné čtyřhře obou skupin zvítězila dvojice Terka Poláková a Dita Pilařová.</p><br/>
            <p><strong>V kategorii staršího žactva:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>1. místo Bašta Baloun a Sára Elbadri</li>
              <li>2. místo David Haramule a Natálka Macková</li>
            </ul>
            <p>Všem účastníkům gratulujeme za podané výkony a herní zlepšení!</p>
          </>
        ),
      },
      {
        title: 'Vánoční turnaj pro děti',
        date: '2.12.2024',
        content: (
          <>
            <p><strong>Zveme děti na Vánoční turnaj 9.12.!</strong></p>
            <p>Zúčastnit se mohou všechny děti bez ohledu na věk a herní úroveň. Děti budou rozdělené do skupin a všichni hráči budou ocenění.</p>
            <p>Těšíme se na vaši účast!</p>
          </>
        ),
      },
      {
        title: 'Zahájení halové sezony 2023/2024',
        date: '9.10.2023',
        content: (
          <>
            <p>Tréninky probíhají pondělí až pátek v rozmezí 13:00 - 20:00.<br/>
            <br/>
            <strong>Sobotní trénink</strong><br/>
            <br/>
            Hráči mají možnost pro herní zlepšení využít sobotní tříhodinový trénink, 
            který se koná každou sobotu od 14.10. do 2.12. 2023, vždy v čase 9:00 - 12:00.</p>
          </>
        ),
      },
      {
        title: 'Výsledky turnaje čtyřher na závěr letní sezony',
        date: '1.10.2023',
        content: (
          <>
            <p><strong>Výsledky turnaje čtyřher na závěr letní sezony 2023 o putovní poháry:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Skupina rodinných párů: 1. místo David a Petr Haramule, 2. místo Anička a Marcel Novotní, 3. místo Bašta a Pavel Balounovi</li>
              <li>Skupina kamarádských dvojic: 1. místo Martin Onder a Oliver Häring, 2. místo Antonie Löfler a Artur Horbenko, 3. místo Sára Elbadri a Ella Šrutová</li>
            </ul><br/>
            <p>Ve společné čtyřhře obou skupin zvítězila dvojice Jenda a Petr Haramule.</p><br/>
            <p><strong>V kategorii smíšených dvojic:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>1. místo Jenda a Petr Haramule</li>
              <li>2. místo Dita a tatínek Pilařovi</li>
              <li>3. místo Adam Marek a Stela Vaňková</li>
            </ul><br/>
            <p>Všem účastníkům gratulujeme za podané výkony a herní zlepšení!</p>
          </>
        ),
      },
      
      
      {
        title: 'Zahájení nové školní tréninkové sezony 2023/2024',
        date: '4.9.2023',
        content: (
          <>
            <p>Tréninky probíhají v nově sestaveném rozvrhu od pondělí do pátku v čase 13:00 - 20:00.</p><br/>
            <p><strong>Školička pro nejmenší probíhá:</strong></p><br/>
            <ul className="list-disc list-inside">
              <li>Pondělky: 17:00 - 18:00</li>
              <li>Středy: 16:00 - 17:00</li>
              <li>Pátky: 13:00 - 14:00</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Putovní pohár pro Sophii Sukovou',
        date: '1.9.2023',
        content: (
          <>
            <p>Na závěr 4. tenisového kempu byl předán putovní pohár pro aktuálně nejlepšího čimického hráče Sophii Sukové. Pohár vybojovala poctivým přístupem k tréninku a úžasným zápalem. Gratulujeme!</p>
          </>
        ),
      },
      
      
  ];
  

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header a navigace */}
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
      {/* Hlavní obsah */}
      <main className="pt-20 max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
  <section className="p-0 mb-16">
    <h1 className="text-5xl font-extrabold mb-8 text-orange-600 text-center">
      Aktuality
    </h1>
    {/* Zobrazení novinek v kartách */}
    <div className="flex flex-col gap-6">
      {newsItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-2 text-red-600">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">{item.date}</p>
          <div className="text-gray-700 flex-grow">{item.content}</div>
        </div>
      ))}
    </div>
  </section>
</main>



      {/* Footer */}
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

export default Novinky;
