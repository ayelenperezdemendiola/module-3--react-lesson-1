import React from 'react';

// class Date extends React.Component {
// render(){
//     return(
//         <h2 className={this.props.dateClass}>{this.props.dateText}</h2>

//     )
// }
// }

const Date = props => <h2 className={props.dateClass}>{props.dateText}</h2>


export default Date;