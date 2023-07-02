import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MyDeals from './pages/MyDeals';
import NewReferral from './pages/Form/NewReferral/NewReferral';
import Progress from './pages/Progress';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Support from './pages/Form/Support/Support';
import CreateAccount from './pages/Form/CreateNewAccount/Form';
import Login from './pages/Form/Login/Login';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/mydeals" element={<MyDeals/>}/>
        <Route path="/newreferral" element={<NewReferral/>}/>
        <Route path="/trackprogress" element={<Progress/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/>
        <Route path="/myprofile" element={<Profile/>}/>
        <Route path="/support" element={<Support/>}/>

        <Route path="/" element={<Home/>}/>
        <Route path="/createaccount" exact element={<CreateAccount/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
    </Router>   
    </>
  );
}

export default App;

