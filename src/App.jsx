import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/index'
import PivotOS from './pages/pivot-os'
import BridgeOS from './pages/bridge-os'
import HumanOS from './pages/human-os'
import About from './pages/about'
import Speaking from './pages/speaking'
import Contact from './pages/contact'
import ProjectCheck from './pages/project-check'
import CribNetwork from './pages/crib-network'
import FuseNetwork from './pages/fuse-network'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pivot-os" element={<PivotOS />} />
        <Route path="/bridge-os" element={<BridgeOS />} />
        <Route path="/human-os" element={<HumanOS />} />
        <Route path="/about" element={<About />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-check" element={<ProjectCheck />} />
        <Route path="/crib-network" element={<CribNetwork />} />
        <Route path="/fuse-network" element={<FuseNetwork />} />
      </Routes>
    </BrowserRouter>
  )
}
