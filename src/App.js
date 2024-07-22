import React, {useState} from 'react';
import "./App.css";
import SearchBar from "./components/SearchBar";
import axios from 'axios';
import NewsList from './components/NewsList';
function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (keyword) => {
    try {
      const response = await axios.get(`http://localhost:5000/search`, { params: { q: keyword } });
      console.log('response',response)
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching articles', error);
    }
  };
  return (
    <div className="App">
      <h1>News search</h1>
      <SearchBar fetchArticles={fetchArticles}/>
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
