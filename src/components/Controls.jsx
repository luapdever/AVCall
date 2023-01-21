import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import "../styles/controls.css";
import { CamOff, CamOn, LeaveIt, MicOff, MicOn } from "./icons/controls";
import { Spinner } from "./icons/Spinner";

function Controls(props) {
  const {
    leave,
    toggleMic,
    toggleWebcam,
    localWebcamOn,
    localMicOn,
    localParticipant,
  } = useMeeting();

  const { isLocal } = useParticipant(localParticipant.id);

  const leaveCall = () => {
    leave();
    window.location.reload();
  };
  return (
    <section className="controls">
      <div className="leave" onClick={leaveCall}>
        <LeaveIt />
      </div>
      <div
        className={"mic" + (localMicOn ? "" : " disabled")}
        onClick={isLocal != null ? toggleMic : () => {}}
      >
        {isLocal != null ? (
          localMicOn ? (
            <MicOn />
          ) : (
            <MicOff />
          )
        ) : (
          <Spinner className={"rotateIt"} />
        )}
      </div>
      <div
        className={"cam" + (localWebcamOn ? "" : " disabled")}
        onClick={isLocal != null ? toggleWebcam : () => {}}
      >
        {isLocal != null ? (
          localWebcamOn ? (
            <CamOn />
          ) : (
            <CamOff />
          )
        ) : (
          <Spinner className={"rotateIt"} />
        )}
      </div>
    </section>
  );
}

export default Controls;
