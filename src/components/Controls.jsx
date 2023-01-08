import { useMeeting } from "@videosdk.live/react-sdk";
import '../styles/controls.css'

function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
      <section className="controls">
        <button onClick={leave}>Leave</button>
        <button onClick={toggleMic}>toggleMic</button>
        <button onClick={toggleWebcam}>toggleWebcam</button>
      </section>
    );
}

export default Controls;