import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/rightSide/rightSide';
function App() {
  return (
    <div className="App">
      <div className='appGlass'>
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
