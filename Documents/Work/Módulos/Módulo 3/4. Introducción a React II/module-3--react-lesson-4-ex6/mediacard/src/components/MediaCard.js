import React from 'react';


class MediaCard extends React.Component {
  render() {
    return (
        <div className="App-container">
          <div className="title-container">
            <img src={this.props.imageUrl} className="App-img" alt={this.props.imageAlt} />
            <h1 className="title">{this.props.titleName}</h1>
          </div>
          <h2 className="subtitle">{this.props.dateText}</h2>
          <div className="content-container">
            <p className="content">{this.props.content1}</p>
            <p className="content">{this.props.content2}</p>
          </div>
          <div className="conteiner-heart">
            <p className="content-continue">Leer más...</p>
            <p>{this.props.amountOfLikes}</p>
            <i class="fas fa-heart"></i>
          </div>
        </div>
    );
  }
}


export default MediaCard;
