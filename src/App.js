import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notes />} />
        
      </Routes>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import {React,useState} from 'react';
// import {DatePicker} from 'antd';
// import BarChart from './components/BarChart';
// import { UserData } from './Utiles/Data';
// import LineChart from './components/LineChart';
// import PieChart from './components/PieChart';

// function App() {
//   const [userData, setUserData] = useState({
//     labels: UserData.map((data) => data.year),
//     datasets: [
//       {
//         label: "Users Gained",
//         data: UserData.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   });

//   console.log(userData)

//   return (
//     <div className="App">
//       <div style={{ width:"auto"}}>
//         <BarChart chartData={userData} />
//       </div>
//       <div style={{ width:"auto"}}>
//         <LineChart chartData={userData} />
//       </div>
//       <div style={{ width:"auto"}}>
//         <PieChart chartData={userData} />
//       </div>
//     </div>
//     import React from 'react';
//     import Notes from '../pages/Notes';
//     import {BrowserRouter,Route,Routes} from "react-router-dom";
    
   