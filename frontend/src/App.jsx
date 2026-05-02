import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Branch from './pages/Branch';
import News from './pages/News';

function ScrollTop() {
  window.scrollTo(0, 0);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/dich-vu" element={<Services />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/chi-nhanh" element={<Branch />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}
