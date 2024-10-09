import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import News from "./pages/news/News"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/article" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;





