import React from 'react';

// class Content extends React.Component{
//     render(){
//         return(
//             <div className="content-container">
//             <p className="content">{this.props.content1}</p>
//             <p className="content">{this.props.content2}</p>
//           </div>
//         )
//     }
// }

const Content = props =>{
    const contentContent = 
    <div className="content-container">
            <p className="content">{props.content1}</p>
            <p className="content">{props.content2}</p>
    </div>;
    return (contentContent);
}

export default Content;