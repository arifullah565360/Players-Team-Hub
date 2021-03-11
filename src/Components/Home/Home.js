import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';
import AllTeam from '../AllTeam/AllTeam';
import Header from '../Header/Header';

const Home = (props) => {
    const [team, setteam] = useState([]);
    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data => setteam(data.teams))
    },[])
    
    return (
    <div className="home">
      <div>
        
         <Header/>
          
       </div>
        <div className="container">
          {
            team.map(team => <AllTeam team={team}></AllTeam>)
          }
        </div>
     </div>
    );
};

export default Home;