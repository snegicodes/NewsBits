import { useState, useEffect } from "react";
import "./App.css";
import NavNews from "./components/NavNews/NavNews";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("General");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  console.log(process.env);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `${proxyUrl}newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&lang=en&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
      // console.log(newsArray.length, loadMore, newsResults);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newsArray);

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);

  return (
    <div className="App">
      <NavNews setCategory={setCategory} />
      <NewsContent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
}

export default App;
