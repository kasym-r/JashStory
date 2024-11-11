import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import News from "./pages/news/News"
import About from "./pages/about/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/article" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;





