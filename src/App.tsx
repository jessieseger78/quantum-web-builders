import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import CallNowButton from './components/CallNowButton';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  console.log('Call Now button deployed to live');

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-navy">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
          <CallNowButton />
          <ChatBot />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
