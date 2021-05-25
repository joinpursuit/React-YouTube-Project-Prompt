import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./YouTube.css";

const YouTube = () => {
  const [vidList, setVidList] = useState([]);
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=9&part=snippet&q=${input}&key=${process.env.REACT_APP_API_KEY}`);
      setVidList(res.data.items);
    } catch (error) {
      setVidList([]);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    fetchVideos();
    setInput("");
    setSearched(true);
  };

  let text;
  if (!searched) {
    text = <p> Please Submit a Search Above </p>;
  } else text = null;

  return <section className="MainBody"></section>;
};
