import { useState } from 'react'
import Error from './components/Error'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter  , Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Expense from './components/Expense'
import Counter from './components/Counter'
import Condition from './components/Condition'
import Recipe from './components/Recipe'
import Vivewrecipe from './components/Vivewrecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/Counter' element={<Counter/>}/>
        <Route path='/Expense' element={<Expense/>}/>
        <Route path='/Conditon' element={<Condition/>}/>
        <Route path='/Recipe' element={<Recipe/>}/>
        <Route path='/viewrecipe' element={<Vivewrecipe/>}/>


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
