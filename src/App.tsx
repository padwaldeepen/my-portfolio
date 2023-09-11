import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.scss';
import './styles.scss';
import { CustomNavbar } from './component/navbar/Navbar';
import { Home } from './component/home/Home';
import { Education } from './component/education/Education';
import { Skills } from './component/skills/Skills';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/education" element={ <Education /> } />
          <Route path="/skills" element={ <Skills /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </div>
    </Router>
  );
};
