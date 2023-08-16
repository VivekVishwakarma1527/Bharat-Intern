import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
  
const HomePage =()=>{

    const [roomCode, setRoomCode] = useState("");
    const Navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        Navigate(`/room/${roomCode}`);
    }

    return (
        <div className='Home-page'>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label>Enter Room Code</label>
                    <input value={roomCode} onChange={(e)=>{setRoomCode(e.target.value)}} type="text" placeholder='Enter code here'/>
                </div>
                <button type='submit'>Enter Room</button>
            </form>
        </div>
    )
}

export default HomePage;