import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div data-testid="name-card" className="container-card">
        <div className="name-card">
          <h1>{cardName}</h1>
        </div>
        <div className="img-card">
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div className="description-card">
          <p data-testid="description-card">{cardDescription}</p>
        </div>
        <div className="cards">
          <div className="card-atributes">
            <p>Atricuto 01  . . . . . . . . . . . . . . . .</p>
            <div className="attr">
              <p data-testid="attr1-card">{cardAttr1}</p>
            </div>
          </div>
          <div className="card-atributes">
            <p>Atricuto 02 . . . . . . . . . . . . . . . .</p>
            <div className="attr">
              <p data-testid="attr2-card">{cardAttr2}</p>
            </div>
          </div>
          <div className="card-atributes">
            <p>Atricuto 03 . . . . . . . . . . . . . . . .</p>
            <div className="attr">
              <p data-testid="attr3-card">{cardAttr3}</p>
            </div>
          </div>
          <p data-testid="rare-card">{cardRare}</p>
          {
            cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3>
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  hasTrunfo: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
}.isRequered;
