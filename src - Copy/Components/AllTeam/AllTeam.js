import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const AllTeam = (props) => {
    const {strTeam,strTeamJersey,idTeam} = props.team
    return (
        <div>
             <div className="component">
            <img src={strTeamJersey} alt=""/>
            <h1>{strTeam}</h1>
            <p>Soports type: Football</p>
            <Link to={`/TeamDetails/${idTeam}`}>
                <button className="main-button">Explore  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </Link>    
        </div>
        </div>
    );
};

export default AllTeam;