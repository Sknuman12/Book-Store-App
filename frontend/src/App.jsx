
import './App.css'
import Signup from './components/Signup'
import Courses from './courses/Courses'
import { Home } from './home/Home'
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
  <Routes>
    <Route path='/' element={ <Home/> }/>
    <Route path='/course' element={<Courses/>} />
    <Route path='/signup' element={<Signup/>} />
  </Routes>
  </>
  )
}

export default App
