import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import CadastroDeUsuarios from "./Pages/CadastroDeUsuarios";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/CadastroDeUsuarios" element={<CadastroDeUsuarios/>} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
