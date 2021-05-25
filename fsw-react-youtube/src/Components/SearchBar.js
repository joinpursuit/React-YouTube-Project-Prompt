import React from "react";
import { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [video, setVideo] = useState([])

  const inputChange = (e) => { setInput(e.target.value) };

  const handleSubmit = async (e) => {
    e.preventDefault()    
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    console.log(data.items)
    const vidArr = data.items.map(vid => vid.id.videoId)
    console.log(vidArr)
    setVideo(...vidArr)
    console.log(video)
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={inputChange}
        value={input}
        type="text"
        placeholder="Search..."
      />
      <button>Search</button>

    </form>

    //get an array of objects from youtube api
    //set a ul with li's
    // each li represents an object with data which represents thumbnails
  );
}
