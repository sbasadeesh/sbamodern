import React, { useState, Suspense, lazy } from 'react'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUsPage from './contactus/contact'

// Lazy load route components
const Home = lazy(() => import('./home/home'))
const Dataandai = lazy(() => import('./Dataandai/Dataandai'))
const It_and_buisness_automation = lazy(() => import('./itandautomation/itandautomation'))
const Open_hybrid_cloud = lazy(() => import('./openhybridcloud/Openhybridcloud'))
const Security_and_sustainability = lazy(() => import('./securityandsustainability/security_and_sustainability'))
const Company = lazy(() => import('./company/company'))
const Carrers = lazy(() => import('./carrers/carrers'))
const Apply = lazy(() => import('./apply/apply'))
const Test = lazy(() => import('./test'))
const SuccessStories = lazy(() => import('./stories/stories'))
const About_us = lazy(() => import('./about_us/About_us'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* Wrap routes with Suspense and fallback UI */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Data-and-ai' element={<Dataandai />} />
          <Route path='/It_and_buisness_automation' element={<It_and_buisness_automation />} />
          <Route path='/Open_hybrid_cloud' element={<Open_hybrid_cloud />} />
          <Route path='/Security_and_sustainability' element={<Security_and_sustainability />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Join-with-us' element={<Carrers />} />
          <Route path='/Apply' element={<Apply />} />
          <Route path='/test' element={<Test />} />
          <Route path='/our-stories' element={<SuccessStories />} />
          <Route path='/About-us' element={<About_us />} />
          <Route path='/Connect-with-us' element={<ContactUsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
