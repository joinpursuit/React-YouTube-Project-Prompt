import { useState, useEffect } from "react";
import axios from "axios";
const Youtube = () => {
  const [vidList, setvidList] = useState([]);
  const [input, setInput] = useState("");

  const fetchVideos = async () => {
    const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=${process.env.REACT_APP_API_KEY}`);
    debugger; //youtube.googleapis.com/youtube/v3/search?part=snippet&q=cats&key=[YOUR_API_KEY
    console.log(res);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    debugger;
  };

  return (
    <section>
      <input onChange={handleChange} type="text" placeholder="Search..." />

      <button onClick={handleClick} className="searchbutton" type="submit">
        Search
      </button>
      <div className="noresultbox">
        <p>Please Submit a Search Above</p>
      </div>
    </section>
  );
};

export default Youtube;
