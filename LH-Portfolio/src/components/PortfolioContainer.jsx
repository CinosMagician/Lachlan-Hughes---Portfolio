import { useState, useEffect } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from '../footer';
import ContactForm from './ContactForm';
import Header from '../header';
import './PortfolioContainer.css';
import '../footer.css';

import aboutBackground from '../assets/blueexpback.png';
import portfolioBackground from '../assets/greenback.png';
import contactBackground from '../assets/redback.png';
import resumeBackground from '../assets/purpback.png';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const [backgroundImage, setBackgroundImage] = useState(aboutBackground);

  useEffect(() => {
    // Update background image based on the current page
    switch (currentPage) {
      case 'About':
        setBackgroundImage(aboutBackground);
        break;
      case 'Portfolio':
        setBackgroundImage(portfolioBackground);
        break;
      case 'Contact':
        setBackgroundImage(contactBackground);
        break;
      case 'Resume':
        setBackgroundImage(resumeBackground);
        break;
      default:
        setBackgroundImage(aboutBackground);
    }
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
      <div id="root" style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">
        {renderPage()}
        {currentPage === 'Contact' && <ContactForm />}
      </main>
      <Footer handlePageChange={handlePageChange} />
    </div>
  );
}