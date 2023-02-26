import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import './styles/App.css'
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Footer from "./components/Footer";
import LogementInfo from "./pages/LogementInfo";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Accueil/>} />
        <Route path="/Apropos" element={<Apropos/>}/>
        <Route path="/Logement" element={<LogementInfo/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
