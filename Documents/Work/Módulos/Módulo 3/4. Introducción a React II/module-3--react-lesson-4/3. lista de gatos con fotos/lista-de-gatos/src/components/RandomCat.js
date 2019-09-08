import React from 'react';

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    return (
      <a href="http://lorempixel.com">
        <img
          src={`http://lorempixel.com/${this.props.whidthCat}/${this.props.heightCat}/cats/${randomCat}`}
          alt="Random cat"
        />
      </a>
    );
  }
}


RandomCat.defaultProps = {
    whidthCat: 400,
    heightCat: 200
};

export default RandomCat;