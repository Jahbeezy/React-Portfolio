import React from "react";
import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import Header from './components/Header'
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Porto from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import "./style.css"

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/portfolio' element= {<Porto/>} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/resume' element= {<Resume/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
