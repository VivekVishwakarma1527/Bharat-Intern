import React from 'react';
import { useParams } from 'react-router-dom';
import { Zego } from "@zegocloud/zego-uikit-prebuilt";


const RoomPage= ()=> {
    const {roomId} = useParams();
    const myMeeting = async(element) => {
        const appID = 1189377809;
        const serverSecret = "f84679b0f310e3b5b16237f8f6a62a08";
        const kitToken = Zego.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "A1" );
        const zp = Zego.create(kitToken)
        zp.joinRoom({
            container: element,
            scenario: {
                mode: Zego.VideoConference,
            },
        });
    }
  return (
    <div className='RoomPage'>
        <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage;