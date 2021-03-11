import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './AllTeam.css'

const AllTeam = (props) => {
    const {strTeam,strTeamLogo,idTeam} = props.team
    const details = useHistory();
    const handleClick = () =>{
        const url =`/TeamDetails/${idTeam}`;
       details.push(url)
    }
    return (
        <div className="homeContainer">
         <div className="component">
            <img src={strTeamLogo} alt=""/>
            <h1>{strTeam}</h1>
            <p>Soports type: Football</p>
            
            <button onClick={() =>handleClick(idTeam)} className="main-button">Explore  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
       </div>
        </div>
    );
};

export default AllTeam;