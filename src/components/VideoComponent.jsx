import { useParticipant } from "@videosdk.live/react-sdk";
import React, { useEffect, /* useMemo ,*/ useRef } from "react";
// import ReactPlayer from "react-player";
import '../styles/videos.css'

function VideoComponent(props) {
    const micRef = useRef(null);
    const { 
      // webcamStream, 
      micStream, 
      // webcamOn, 
      micOn, 
      isLocal 
    } = useParticipant(
      props.participantId
    );
  
    // const videoStream = useMemo(() => {
    //   if (webcamOn && webcamStream) {
    //     const mediaStream = new MediaStream();
    //     mediaStream.addTrack(webcamStream.track);
    //     return mediaStream;
    //   }
    // }, [webcamStream, webcamOn]);
  
    useEffect(() => {
      if (micRef.current) {
        if (micOn && micStream) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
  
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
  
    return (
      <React.Fragment key={props.participantId}>
        {micOn && micRef && <audio ref={micRef} autoPlay muted={isLocal} />}
        {/* {webcamOn && (
          <ReactPlayer
            playsinline // very very imp prop
            pip={false}
            light={false}
            // controls={true}
            muted={true}
            playing={true}
            //
            url={videoStream}
            height={"100%"}
            width={"100%"}
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        )} */}
      </React.Fragment>
    );
}

export default VideoComponent;