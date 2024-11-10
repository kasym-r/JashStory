import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewsText from "./newsText/NewsText";
import Info from "./info/Info";

const News = () => {

  return (
    <>
      <Header />
      <Info />
      <NewsText/>
      <Footer />
    </>
  );
};

export default News;