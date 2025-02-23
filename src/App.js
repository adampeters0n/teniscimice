import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Newhomepage from './Newhomepage';
import Prising from './Prising';
import Onasnas from './Onasnas';
import Novinky from './Novinky';
import Kempytenis from './Kempytenis';
import Minitenis from './Minitenis';
import Kontaktfile from './Kontaktfile';
import Novesluzby from './Novesluzby';
import Nasekurzy from './Nasekurzy';
import Rezervacekurtu from './Rezervacekurtu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newhomepage />} /> 
        <Route path="cenik" element={<Prising />} />
        <Route path="o-nas" element={<Onasnas />} />
        <Route path="aktuality" element={<Novinky />} />
        <Route path="kempy" element={<Kempytenis />} />
        <Route path="skolicka" element={<Minitenis />} />
        <Route path="kontakt" element={<Kontaktfile />} />
        <Route path="doplnkove-sluzby" element={<Novesluzby />} />
        <Route path="nase-kurzy" element={<Nasekurzy />} />
        <Route path="rezervace-kurtu" element={<Rezervacekurtu />} />

      </Routes>
    </Router>
  );
}

export default App;
