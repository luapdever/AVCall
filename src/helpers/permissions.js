export function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      // stream.getTracks()
      // .forEach(track => track.stop());
			window.localStream = stream;
      // window.localAudio.srcObject = stream;
      // window.localAudio.autoplay = true;
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
}
