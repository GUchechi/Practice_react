import './App.css'
import Homepage from './Components/Pages/Homepage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
