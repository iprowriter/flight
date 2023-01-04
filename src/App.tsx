import Header from "./components/Header";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/price" element={<Pricing/>} />
      </Routes>
    </Router>
  );
}

export default App;
