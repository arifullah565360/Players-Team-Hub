import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'

import headerImage from '../../images/detail-header.png'
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'

const TeamDetails = () => {
    const { TeamId } = useParams();
    const [detail, setDetail] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${TeamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.teams[0]))
    })

    let teamImage;
    if(detail.strGender === 'female') {
        teamImage = <img src={femaleImage} alt=""/>
    } else{
        teamImage = <img src={maleImage} alt=""/>
    }

    return (

        <div className="container-div">

            <div className="header">
               <img src={headerImage} alt=""/>
            </div>

            <div className="team-details-container">
                <div className="team-details-top">
                    <div className="team-details">
                        <h1>{detail.strTeam}</h1>
                        <p><FontAwesomeIcon icon={faCalendarCheck} />  Founded : {detail.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} />  Country: {detail.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />  Sport Type: {detail.strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} />  Gender: {detail.strGender}</p>
                    </div>

                    <div className="team-image">
                        {teamImage}
                    </div>
                </div>
                <div className="team-description">
                <p>{detail.strDescriptionEN}</p>
                </div> 
            </div>

        </div>
    );
};

export default TeamDetails;