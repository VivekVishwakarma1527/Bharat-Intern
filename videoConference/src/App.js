import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './home/home';
import RoomPage from './insideRoom/room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/room/:roomId' element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
