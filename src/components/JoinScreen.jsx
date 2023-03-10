import React, { useState } from "react";
import "../styles/joinScreen.css";
import { MeetIcon } from "./icons/Meet";
import { Spinner } from "./icons/Spinner";

function JoinScreen({ getMeetingAndToken }) {
  const [meetingId, setMeetingId] = useState(null);
  const [inLoading, setInLoading] = useState(false);
  const handleClick = async () => {
    setInLoading(true);
    await getMeetingAndToken(meetingId);
  };
  return (
    <div className="container">
      <section className="joinScreen">
        <form action="" onSubmit={handleClick}>
          <div className="appName">
            <h2>
              <MeetIcon /> AV CALL
            </h2>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Meeting Id"
              onChange={(e) => {
                setMeetingId(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit" disabled={inLoading}>
            {inLoading ? <Spinner className={"rotateIt"} /> : "Join"}
          </button>
          {" or "}
          <button type="button" onClick={handleClick} disabled={inLoading}>
            {inLoading ? <Spinner className={"rotateIt"} /> : "Create Meeting"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default JoinScreen;
