import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const VideoDisplay = () => {
  const [video, setVideo] = useState({});
  const { videoid } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoid}&key=AIzaSyA_9sECkr5ABUZVpSYJM6xIkFa30z7ouAk`
        );
        setVideo(res.data.items[0].snippet);
        debugger;
      } catch (error) {
        setVideo({});
      }
    };
    fetchVideo();
  });

  return (
    <div>
      Hello VidDisplay
      <p>{video.title}</p>
    </div>
  );
};

export default VideoDisplay;
