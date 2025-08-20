import React, { useState, Suspense, lazy } from 'react'
import Navbar from './navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUsPage from './contactus/contact'
import Solutions from './solutions/Solutions'
import Dashboard from './Hr/Dashboard'
import HRLoginPage from './Hr/login'
import BFSI from './solutions/industries/bfsi/bfsi'
import ManufacturingLandingPage from './solutions/industries/manufacturing/Manufacturing'
import MediaLandingPage from './solutions/industries/media/Media'
import ITITESLandingPage from './solutions/industries/it_and_ites/it_and_ites'
import TelecomBPOKPOLandingPage from './solutions/industries/telecommunication/telecommunication'
import HealthcareLandingPage from './solutions/industries/healthcare/healthcare'
import MachineLearning from './solutions/technology/Machinelearning'
import AIIntegrations from './solutions/technology/Aiintegration'
import WorkflowAutomation from './solutions/technology/Workflowautomation'
import SystemIntegration from './solutions/technology/Systemintegration'
import ProcessOptimization from './solutions/technology/Processoptimization'
import CustomerAnalytics from './solutions/Domain/CustomerAnalytics'
import HRAnalytics from './solutions/Domain/HRAnalytics'
import MarketAnalytics from './solutions/Domain/MaketingAnalytics'

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
          <Route path='/Our-solutions' element={<Solutions />} />
          <Route path='hr/Dashboard' element={<Dashboard />} />
          <Route path='hr/login' element={<HRLoginPage />} />
          <Route path='Our-solutions/BFSI' element={<BFSI />} />
          <Route path='Our-solutions/Manufacturing' element={<ManufacturingLandingPage />} />
          <Route path='Our-solutions/Media' element={<MediaLandingPage />} />
          <Route path='Our-solutions/IT-and-ITES' element={<ITITESLandingPage />} />
          <Route path='Our-solutions/Telecommunication' element={<TelecomBPOKPOLandingPage />} />
          <Route path='Our-solutions/Healthcare' element={<HealthcareLandingPage />} />
          <Route path='Our-solutions/Technology/Machinelearning' element={<MachineLearning />} />
          <Route path='Our-solutions/Technology/AIIntegration' element={<AIIntegrations />} />
          <Route path='Our-solutions/Technology/WorkflowAutomation' element={<WorkflowAutomation />} />
          <Route path='Our-solutions/Technology/SystemIntegration' element={<SystemIntegration />} />
          <Route path='Our-solutions/Technology/Processoptimization' element={<ProcessOptimization />} />
          <Route path='Our-solutions/Domain/CustomerAnalytics' element={<CustomerAnalytics />} />
          <Route path='Our-solutions/Domain/HRAnalytics' element={<HRAnalytics />} />
          <Route path='Our-solutions/Domain/MarketingAnalytics' element={<MarketAnalytics />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
