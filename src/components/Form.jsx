import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="name">
          Nome
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute1">
          Atributo 1
          <input
            type="number"
            name="attribute1"
            id="attribute1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 2
          <input
            type="number"
            name="attribute2"
            id="attribute2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 3
          <input
            type="number"
            name="attribute3"
            id="attribute3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Link da imagem
          <input type="text" name="image" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo
          <input type="checkbox" name="trunfo" id="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
