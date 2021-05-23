import { useState } from "react";
import axios from "axios";
import "./YouTube.css";
const YouTube = () => {
  const [vidList, setVidList] = useState([]);
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResults=9&part=snippet&q=${input}&key=${process.env.REACT_APP_API_KEY}`);
      setVidList(res.data.items);
      debugger;
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

  return (
    <section className="MainBody">
      <input onChange={handleChange} value={input} type="text" placeholder="Search..." />

      <button onClick={handleClick} className="searchbutton" type="submit">
        Search
      </button>
      <div className="noresultbox">{text}</div>
      <div className="VideoContainer">
        {vidList.map((vid) => {
          return (
            <section className="VideoList">
              <a href={`https://www.youtube.com/watch?v=${vid.id.videoId}`} target="_blank" rel="noreferrer">
                <img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.description} />
              </a>
              <p>{vid.snippet.title}</p>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default YouTube;
