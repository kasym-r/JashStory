import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ClipLoader } from "react-spinners";
import "./ArticleStyles.css";
import { useLanguage } from "../../context/LanguageContext";

const ArticlePage = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jashstory.pp.ua/api/post/${id}?language=${language}`
        );
        const data = await response.json();
        setArticleData(data);
      } catch (err) {
        console.error("Error loading article:", err);
        setError(
          language === "en" 
            ? "Failed to load the article" 
            : "Не удалось загрузить статью"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, language]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen flex-col">
          <ClipLoader size={100} color="#00000" loading={loading} />
          <p className="text-lg mt-4">
            {language === "en" ? "Loading..." : "Загрузка..."}
          </p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-center text-lg text-red-500">{error}</p>
        </div>
        <Footer />
      </>
    );
  }

  const { article } = articleData || {};

  return (
    <>
      <Header />
      <div className="md:text-lg px-4 md:px-10 text-black my-10 font-sf">
        <div
          className="article-container flex flex-col"
          dangerouslySetInnerHTML={{ __html: article }}
        />
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;