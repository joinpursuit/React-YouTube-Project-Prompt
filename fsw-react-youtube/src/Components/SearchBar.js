import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VideoCard from './VideoCard.js'

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [vids, setVideo] = useState([]);
  const [vidId, setVidId] = useState('')

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&part=snippet&key=${process.env.REACT_APP_API_KEY}`
    );

    setVideo(data.items);
    setInput("");
  };

  const OnClick = (e) => {
    e.preventDefault();
    setVidId(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={inputChange}
          value={input}
          type="text"
          placeholder="Search..."
        />
        <button>Search</button>
      </form>
      <ul className="List">
        {vids.map((video) => (
          <>
            <Link className="Link" to={`/video/${video.id.videoId}`}>
              <li key={video.id.videoId}>
                <img
                  alt="youtube vid"
                  className="thumbnails"
                  src={video.snippet.thumbnails.high.url}
                />
                <h3>{video.snippet.title}</h3>
              </li>
            </Link>
          </>
        ))}
      </ul>
    </>
  );
}
