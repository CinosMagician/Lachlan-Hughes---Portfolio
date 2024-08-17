import { Outlet } from 'react-router-dom';
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import Footer from './footer';
import Header from './header';

const App = () => (
  <div>
    <Header />
    <PortfolioContainer />
    {/* This will render the child routes */}
    <Outlet />
    <Footer />
  </div>
);

export default App;
