 import React, { useEffect } from "react";

const VideoCall = ({ roomName, displayName }) => {
  useEffect(() => {
    const domain = "meet.jit.si";  // Free Jitsi server
    const options = {
      roomName: roomName,
      width: "100%",
      height: 600,
      parentNode: document.getElementById("jitsi-container"),
      userInfo: {
        displayName: displayName,
      },
    };
    const api = new window.JitsiMeetExternalAPI(domain, options);

    return () => api.dispose(); // Cleanup when component unmounts
  }, [roomName, displayName]);

  return <div id="jitsi-container" style={{ width: "100%", height: "600px" }} />;
};

export default VideoCall;