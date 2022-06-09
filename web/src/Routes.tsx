import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { CreateLocaisReciclagem } from './pages/CreateLocaisReciclagem';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-locais' element={<CreateLocaisReciclagem />} />
      </Routes>
    </BrowserRouter>
  );
}