import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ClipLoader } from "react-spinners";
import "./ArticleStyles.css";

const ArticlePage = () => {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://jashstory.pp.ua/api/post/${id}`);
        const data = await response.json();
        setArticleData(data);
        setLoading(false);
      } catch (err) {
        console.error("Ошибка загрузки статьи:", err);
        setError("Не удалось загрузить статью");
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center min-h-screen flex-col">
          <ClipLoader size={100} color="#3498db" loading={loading} />
          <p className="text-lg mt-4">Загрузка...</p>
        </div>
        <Footer />
      </>
    );
  }
  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  const { article } = articleData;

  return (
    <>
      <Header />
      <div className="px-10 text-black my-10 font-sf">
        <div
          className="article-container flex flex-col"
          dangerouslySetInnerHTML={{ __html: article }}
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;
