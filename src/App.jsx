import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Components/Header"
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"

import Home from "./home"
import Tablets from "./Tablets"
import Monitores from "./Monitores"
import Impresoras from "./Impresoras"
import Mouse from "./Mouse"
import Marcas from "./Marcas"
import Ventas from "./Ventas"
import Nosotros from "./Nosotros"
import Promociones from "./Promociones"

import "./css/Components/App.css"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos/tablets" element={<Tablets/>} />
        <Route path="/productos/monitores" element={<Monitores/>} />
        <Route path="/productos/impresoras" element={<Impresoras/>} />
        <Route path="/productos/mouse" element={<Mouse/>} />
        <Route path="/marcas" element={<Marcas/>} />
        <Route path="/ventas" element={<Ventas/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/promociones" element={<Promociones/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App