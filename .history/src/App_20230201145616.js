import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Realisation from './pages/Realisation';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Realisation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
