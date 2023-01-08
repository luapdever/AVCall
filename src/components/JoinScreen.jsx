import React, { useState } from "react";
import "../styles/joinScreen.css";
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
          <div>
            <input
              type="text"
              placeholder="Enter Meeting Id"
              onChange={(e) => {
                setMeetingId(e.target.value);
              }}
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
