import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="">
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">
            Nome
            <input
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
              id="cardName"
              data-testid="name-input"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cardDescription" className="form-label">
            Descrição
            <textarea
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              id="cardDescription"
              data-testid="description-input"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cardAttr1" className="form-label">
            Atributo 01
            <input
              type="number"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
              id="cardAttr1"
              data-testid="attr1-input"
              className="form-number"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cardAttr2" className="form-label">
            Atributo 02
            <input
              type="number"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
              id="cardAttr2"
              data-testid="attr2-input"
              className="form-number"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cardAttr3" className="form-label">
            Atributo 03
            <input
              type="number"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
              id="cardAttr3"
              data-testid="attr3-input"
              className="form-number"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cardImage" className="form-label">
            Link da imagem
            <input
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
              id="cardImage"
              data-testid="image-input"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="cardRare" className="form-label">
            Raridade
            <select
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
              id="cardRare"
              data-testid="rare-input"
              className="form-control"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </div>
        <label htmlFor="cardTrunfo">
          Super Trunfo
          {hasTrunfo && <span>Você já tem um Super Trunfo em seu baralho</span>}
          {hasTrunfo === false && <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            name="cardTrunfo"
            id="cardTrunfo"
            data-testid="trunfo-input"
          />}
        </label>
        <button
          type="button"
          onClick={
            () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo })
          }
          name="onSaveButtonClick"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequered;
