import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import ArticlePage from "./pages/article/ArticlePage";
import ScrollToTop from "./scrolltotop/ScrollToTop";
import PrevOlympiads from "./pages/about/prevOlympiads/PrevOlympiads";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default App;





