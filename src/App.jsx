import './App.css'
import LoginPage from './Modules/LoginModule/Components/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Modules/HomeModule/Components/HomePage.';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />}/>
      </Routes>
    </Router>

  )
}

export default App
