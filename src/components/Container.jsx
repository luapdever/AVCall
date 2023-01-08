import { useMeeting } from "@videosdk.live/react-sdk";
import React, { useEffect, useState } from "react";
import Controls from "./Controls";
import VideoComponent from "./VideoComponent";

import "../styles/container.css";
import { getLocalStream } from "../helpers/permissions";
import { Spinner } from "./icons/Spinner";

function Container(props) {
  const [inLoading, setInLoading] = useState(false);

  const [joined, setJoined] = useState(false);
  const { join } = useMeeting();
  const { participants } = useMeeting();

  const joinMeeting = () => {
    if (window.localStream) {
      setInLoading(true);
      setJoined(true);
      join();
    } else {
      getLocalStream();
    }
  };

  useEffect(() => {
    getLocalStream();
  }, []);

  return (
    <div className="container">
      <div className="callContainer">
        <h3>
          Meeting ID: <b className="or">{props.meetingId}</b>
        </h3>
        {joined ? (
          <div className="participants">
            {[...participants.keys()].map((participantId, index) => (
              <div
                className={index === 0 ? "firstParticipant" : "secondParticipant"}
                key={"Participant" + index}
              >
                <VideoComponent participantId={participantId} />
              </div>
            ))}
            <Controls />
          </div>
        ) : (
          <>
            <p>
              Please, you need to authorize this app accessing to{" "}
              <b className="or">mic, audio, and webcam</b>.
            </p>
            <p>After this, you can join to meeting.</p>
            <button onClick={joinMeeting}>
              {inLoading ? (
                <Spinner className={"rotateIt"} />
              ) : (
                "Join now"
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Container;
