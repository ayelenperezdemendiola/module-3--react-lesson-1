import React from 'react';

class Name extends React.Component{
    render (){
        return (
            <h1 className={this.props.clase}>{this.props.nombre}</h1>
        )
    }
}

export default Name;