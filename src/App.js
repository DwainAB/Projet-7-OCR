import {Routes,Route, Router, BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar";
import './styles/App.css'
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Footer from "./components/Footer";
import LogementInfo from "./pages/LogementInfo";
import Erreur404 from "./pages/Erreur";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="global"> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Apropos" element={<Apropos/>}/>
          <Route path="/Logement/:id" element={<LogementInfo/>}/>
          <Route path="*" element={<Erreur404/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
