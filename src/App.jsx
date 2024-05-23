
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Footer from './components/Footer'
import { useContext } from 'react'
import { TokenAuthContext } from './contexts/TokenAuth'


function App() {
  const {isAuthorised,setIsAuthorised} = useContext(TokenAuthContext)


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>
      <Route path='/dashboard' element={isAuthorised?<Dashboard/>:<Navigate to={'/login'}></Navigate>}/>
      <Route path='/projects' element={isAuthorised?<Projects/>:<Navigate to={'/login'}></Navigate>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
