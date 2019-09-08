import React from 'react';

// class Image extends React.Component {
//     render(){
//         return(
//             <img src={this.props.imageUrl} className="App-img" alt={this.props.imageAlt} />
//         )
//     }
// }

const Image = props => <img src={props.imageUrl} className="App-img" alt={props.imageAlt} />


export default Image;