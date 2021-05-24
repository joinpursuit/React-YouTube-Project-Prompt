import React from "react";
import { useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [video, setVideo] = useState([])

  const inputChange = (e) => { setInput(e.target.value) };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(process.env.REACT_APP_API_KEY)
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    console.log(data.items[0].id.videoId)
    //finish grabbing the video ids and return them
    const videos = data.items.map(video => {
      console.log(video.id.videoId)
      setVideo([...video.id.videoId])
    })
    console.log(video)
    return videos
  };

  const videoPopulate = (e) => {
    //setVideo to what handleSubmit returns
    setVideo()
  }

  const mockAPI = async () => await ({
    "kind": "youtube#searchListResponse",
    "etag": "H0mKhyLPeEwGHHC0rBDD4qmYGLA",
    "nextPageToken": "CAUQAA",
    "regionCode": "US",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 5
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "00P9QrfwO8ndDDEqVey8girbdkU",
        "id": {
          "kind": "youtube#video",
          "videoId": "1HygThMLzGs"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "fYpb13wO4-1pvc5shdAGekyetm0",
        "id": {
          "kind": "youtube#video",
          "videoId": "UmVpw2TisOA"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "BC1kQI9T3h_4lkPVKuF1CiVTq9s",
        "id": {
          "kind": "youtube#video",
          "videoId": "gpyB54lSpYg"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "wvWWXR_roLrgiGgG5_92ZyUa3UU",
        "id": {
          "kind": "youtube#video",
          "videoId": "2Pcp1lDGBus"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "tG0_sJyk4XmLEWzuqE8y7T986Es",
        "id": {
          "kind": "youtube#video",
          "videoId": "07d2dXHYb94"
        }
      }
    ]
  }
  )

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
