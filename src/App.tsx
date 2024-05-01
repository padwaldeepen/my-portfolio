import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import './App.scss';
import { Home } from './components/home/Home';
import { CustomNavbar } from './components/navbar/Navbar';
import { Skills } from './components/skills/Skills';
import './styles.scss';

export const App = () => {
  return (
    <Router>
      <div className='app'>
        <CustomNavbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </div>
    </Router>
  );
};
