import { useState } from "react";
import axios from "axios";

const YouTube = () => {
  const [vidList, setVidList] = useState([]);
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${process.env.REACT_APP_API_KEY}`);
      debugger;
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

  return (
    <section>
      <input onChange={handleChange} value={input} type="text" placeholder="Search..." />

      <button onClick={handleClick} className="searchbutton" type="submit">
        Search
      </button>
      <div className="noresultbox">
        {text}

        {vidList.map((vid) => {
          return (
            <section>
              <p>{vid.snippet.title}</p>
              <a href={`https://www.youtube.com/watch?v=${vid.id.videoId}`} target="_blank" rel="noreferrer">
                <img src={vid.snippet.thumbnails.default.url} alt={vid.snippet.description} />
              </a>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default YouTube;
