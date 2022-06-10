import Welcome from './pages/Welcome/Welcome.jsx';
import Home from './pages/Home/Home.jsx';

import {
  Routes,
  Route,
} from "react-router-dom"

function App() {


  return (
   <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
   </Routes>
  )
}

export default App
