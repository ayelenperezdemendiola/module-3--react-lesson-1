import React from 'react';
import Name from './components/Name';
import Date from './components/Date';
import Image from './components/Image';
import Content from './components/Content';
import Likes from './components/Likes';
 
const profileImage = "https://www.zooportraits.com/wp-content/uploads/2019/02/Golden-tiger-Panthera-tigris.jpg";
const profileImageAlt = "Tigre profesional";

class MediaCard extends React.Component {

  render() {


    return (
      <div className="App">
         <div className="App-container">

      <div className="title-container">
      <Image imageUrl= {profileImage} imageAlt= {profileImageAlt}/>
      <Name nombre = "Tai German" clase="title"/>
      </div>
      <Date dateClass= "subtitle" dateText="2 de octubre"/>
      <Content content1= "Si, ¡soy un tigre!" content2= "El Paulo Londra de la Selva"/>
      <Likes amountOfLikes="8M"/>
          </div>
      </div>
    );
  }
}

export default MediaCard;
