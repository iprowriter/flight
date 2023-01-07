import Header from "./components/Header";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Stepper from "./pages/Stepper";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/price" element={<Pricing/>} />
        <Route  path="/steps" element={<Stepper/>} />
      </Routes>
    </Router>
  );
}

export default App;
