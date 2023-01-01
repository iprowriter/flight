import Header from "./components/Header";
import Home from "./pages/Home";
import Price from "./pages/Price"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/price" element={<Price/>} />
      </Routes>
    </Router>
  );
}

export default App;
