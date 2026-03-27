import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AptosProject from './pages/AptosProject'
import LogisticsProject from './pages/LogisticsProject'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/aptos-sybil-detector" element={<AptosProject />} />
      <Route path="/projects/vyn-logistics" element={<LogisticsProject />} />
    </Routes>
  )
}

export default App