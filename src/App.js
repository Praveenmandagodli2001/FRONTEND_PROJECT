import React from 'react'
import "./App.css"
import { Route,  Routes } from 'react-router-dom'
import AllSarees from "./pages/AllSarees"
import SilkSarees from "./pages/SilkSarees"
import Dresses from "./pages/Dresses"
import Tops from "./pages/Tops"
import Skirts from "./pages/Skirts"
import TShirts from "./pages/TShirts"
import LandingPage from './pages/LandingPage'
import Details from './pages/Details'
const App = () => {
  return (<>
    
      <Routes>
        <Route path='/'>
        <Route index element={<LandingPage/>}/>
        <Route path='/allSarees' element={<AllSarees/>}/>
        <Route path='/silkSarees' element={<SilkSarees/>}/>
        <Route path='/dresses' element={<Dresses/>}/>
        <Route path='/tops' element={<Tops/>}/>
        <Route path='/skirts' element={<Skirts/>}/>
        <Route path='/tShirts' element={<TShirts />}/>
        <Route path='/details' element={<Details />}/>
        </Route>
      </Routes>
    
    </>)}

export default App
