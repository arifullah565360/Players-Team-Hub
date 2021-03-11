import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMars, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'
import maleImage from '../../images/male.png'
import femaleImage from '../../images/female.png'
import Facebook from '../../images/Facebook.png'
import twitter from '../../images/Twitter.png'
import youtube from '../../images/YouTube.png'

const TeamDetails = () => {
    const { TeamId } = useParams();
    const [detail, setDetail] = useState([])
    const{strStadiumThumb,strTeam,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strFacebook,strTwitter,strYoutube} = detail
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

        <div>

            <div className="headerDetail">
               <img src={strStadiumThumb} alt=""/>
            </div>
        <div className="container-div">
            <div className="team-details-container">
                <div className="team-details-top">
                    <div className="team-details">
                        <h1>{strTeam}</h1>
                        <p><FontAwesomeIcon icon={faCalendarCheck} />  Founded : {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} />  Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} />  Gender: {strGender}</p>
                    </div>

                    <div className="team-image">
                        {teamImage}
                    </div>
                </div>
                <div className="team-description">
                <p>{strDescriptionEN}</p>
                </div> 
            </div>
        </div> 
            <div className="social-link">
                <h1><a href={`https://${strFacebook}`}><img src={Facebook} alt=""/>  </a></h1>
                <h1><a href={`https://${strTwitter}`}><img src={twitter} alt=""/>  </a></h1>
                <h3><a href={`https://${strYoutube}`}><img src={youtube} alt=""/>  </a></h3>
            </div>

        </div>
    );
};

export default TeamDetails;