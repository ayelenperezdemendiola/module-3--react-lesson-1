import React from 'react';

// class Likes extends React.Component{
//     render(){
//         return(
//             <div className="conteiner-heart">
//             <p className="content-continue">Leer más...</p>
//             <p>{this.props.amountOfLikes}</p>
//             <i class="fas fa-heart"></i>
//           </div>
//         )
//     }
// }

const Likes = props => {
    const likeContent =  
    <div className="conteiner-heart">
    <p className="content-continue">Leer más...</p>
    <p>{props.amountOfLikes}</p>
    <i class="fas fa-heart"></i>
  </div>;
  return (likeContent)

}

export default Likes;