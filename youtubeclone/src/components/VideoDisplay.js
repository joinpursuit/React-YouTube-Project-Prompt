import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";



const VideoDisplay = () => {
  const [video, setVideo] = useState({});
  const { videoid } = useParams();
  const [ playerId, setPlayerId ] = useState('')

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(

          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoid}&key=${process.env.REACT_APP_API_KEY}`
        );
        debugger
        setVideo(res.data.items[0].snippet);
        setPlayerId(res.data.items[0].id)
      } catch (error) {
        setVideo({});
      }  
    };
    fetchVideo();
    debugger

  });

  return (
    <div>

     <iframe src={`https://www.youtube.com/embed/${playerId}`} title={video.title} width="680" height="480" allowFullScreen>HELLO</iframe>
     <p>{video.title}</p>
    </div>
  );
};

export default VideoDisplay;
