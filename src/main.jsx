import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import App from './App';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import './fade.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      >
        <Outlet />
      </CSSTransition>
    </TransitionGroup>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <AnimatedRoutes />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: 'about',
            element: <About />,
          },
          {
            path: 'portfolio',
            element: <Portfolio />,
          },
          {
            path: 'contact',
            element: <Contact />,
          },
          {
            path: 'resume',
            element: <Resume />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);