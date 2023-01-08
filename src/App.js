import { useState } from "react";
import { authToken, createMeeting } from "./api/token";
import { MeetingConsumer, MeetingProvider } from "@videosdk.live/react-sdk";
import Container from "./components/Container";
import JoinScreen from "./components/JoinScreen";

function App() {
  const [meetingId, setMeetingId] = useState(null);

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  return (
    <>
      <main>
        {authToken && meetingId ? (
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: true,
              webcamEnabled: false,
              name: "C.V. Raman",
            }}
            token={authToken}
          >
            <MeetingConsumer>
              {() => <Container meetingId={meetingId} />}
            </MeetingConsumer>
          </MeetingProvider>
        ) : (
          <JoinScreen getMeetingAndToken={getMeetingAndToken} />
        )}
      </main>
    </>
  );
}

export default App;
