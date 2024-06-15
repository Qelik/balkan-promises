import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Tournament from './components/tournament/tournament';
import Document from './components/document/document';
import About from './components/about/about';
import Contact from './components/contact/contact';
import './App.css';
import Article from './components/article/article';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/document" element={<Document />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;