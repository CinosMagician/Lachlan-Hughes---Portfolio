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


// Unsure if imports are needed here as they have been imported in their own specific areas. Leaving here for now in case needed
// import profilePic from '../assets/profilepic.png';
// import githubIcon from '../assets/GitHub.svg';
// import linkedinIcon from '../assets/lin.svg';
// import emailIcon from '../assets/Email.svg';


import aboutBackground from '../assets/blueexpback.png';
import portfolioBackground from '../assets/greenback.png';
import contactBackground from '../assets/redback.png';
import resumeBackground from '../assets/purpback.png';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const [backgroundImage, setBackgroundImage] = useState(aboutBackground);
  const [fadeClass, setFadeClass] = useState('hidden');

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

    setFadeClass('hidden');

    const timeout = setTimeout(() => {
      setFadeClass('fade-in');
    }, 10);

    return () => clearTimeout(timeout);
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
      <main className={`mx-3 ${fadeClass}`}>
        {renderPage()}
        {currentPage === 'Contact' && <ContactForm />}
      </main>
      <Footer handlePageChange={handlePageChange} />
    </div>
  );
}