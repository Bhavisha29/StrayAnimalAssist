import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Form from './pages/Form';
import Ngoregister from './pages/Ngoregister';
import Adoption from './pages/Adoption';
import Fostering from './pages/Fostering';
import Volunteering from './pages/Volunteering';
import Donation from './pages/Donation';
import AfterLogin from './pages/AfterLogin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/ngoregister" element={<Ngoregister />} />
        <Route path="/adoption" element={<Adoption />} />
        <Route path="/fostering" element={<Fostering />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/afterlogin" element={<AfterLogin />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App