import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import ContactPage from './ContactPage'
import ReportPage from './ReportPage'
import ErrorPage from './ErrorPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />

          <Route path='/HomePage' element={<HomePage />} />

          <Route path='/AboutPage' element={<AboutPage />} />

          <Route path='/ContactPage' element={<ContactPage />} />

          <Route path='/ServicePage' element={<ServicesPage />} />

          <Route path='/ReportPage' element={<ReportPage />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
