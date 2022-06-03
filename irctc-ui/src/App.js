import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './routes/navigation/navigation.component';
import LandingPage from './routes/landing/landing-page.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App;
