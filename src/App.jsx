import Welcome from './pages/Welcome/Welcome.jsx';

import {
  Routes,
  Route,
} from "react-router-dom"

function App() {


  return (
   <Routes>
      <Route path="/" element={<Welcome />} />
   </Routes>
  )
}

export default App
