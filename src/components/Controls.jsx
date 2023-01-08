import { useMeeting } from "@videosdk.live/react-sdk";
import "../styles/controls.css";
import { CamOff, CamOn, LeaveIt, MicOff, MicOn } from "./icons/controls";

function Controls() {
  const { leave, toggleMic, toggleWebcam, localWebcamOn, localMicOn } =
    useMeeting();

  const leaveCall = () => {
    leave();
    window.location.reload();
  }
  return (
    <section className="controls">
      <div className="leave" onClick={leaveCall}>
        <LeaveIt />
      </div>
      <div className="mic" onClick={toggleMic}>
        {localMicOn ? <MicOn /> : <MicOff />}
      </div>
      <div className="cam" onClick={toggleWebcam}>
        {localWebcamOn ? <CamOn /> : <CamOff />}
      </div>
    </section>
  );
}

export default Controls;
