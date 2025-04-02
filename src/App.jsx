import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './Projects'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='  bg-gradient-to-r from-pink-900 via-purple-500 to-indigo-900  h-auto overflow-hidden'>
  <Navbar/>
  <Home/>
  <About/>
  <Experience/>
  <Projects/>
  <Footer/>
 </div>
  )
}


export default App
