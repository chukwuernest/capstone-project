import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ServicePage from './ServicePage'
import ContactPage from './ContactPage'
import ReportPage from './ReportPage'
import ErrorPage from './ErrorPage'
import SignInPage from './SignInPage'
import CreateAccountPage from './CreateAccountPage'
import VerifyPage from './VerifyPage'
import ForgotPasswordPage from './ForgotPasswordPage'
import Success from './components/success'
import joinAsV from './components/joinAsV'
import Nav1 from './nav1'
import Footer from './footer'
import NextEvent from './NextEvent'
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

          <Route path='/ServicePage' element={<ServicePage />} />

          <Route path='/ReportPage' element={<ReportPage />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage /> */}
      {/* <Nav1 /> */}
      {/* <Footer /> */}
      {/* <AboutPage /> */}
      {/* <ServicePage /> */}
      {/* <NextEvent /> */}
      {/* <ContactPage /> */}
    </div>
  )
}

export default App
