import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyDeals from './pages/MyDeals';
import NewReferral from './pages/NewReferral';
import Progress from './pages/Progress';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Support from './pages/Support';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<MyDeals/>}/>
        <Route path="/newreferral" element={<NewReferral/>}/>
        <Route path="/trackprogress" element={<Progress/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/myprofile" element={<Profile/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </Router>   
    </>
  );
}

export default App;

