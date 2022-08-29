import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { filterI, onInputChange, filterR, trunfo } = this.props;
    return (
      <div className="container-filter">
        <h1 className="mt-4">Todas as cartas</h1>
        <h4>Filtros de busca</h4>
        <div className="mb-3">
          <label htmlFor="filterI" className="form-label">
            <input
              type="text"
              name="filterI"
              id="filterI"
              data-testid="name-filter"
              value={ filterI }
              onChange={ onInputChange }
              disabled={ trunfo }
              className="form-control"
              placeholder="Nome da carta"
            />
          </label>
        </div>
        <div>
          <select
            data-testid="rare-filter"
            name="filterR"
            value={ filterR }
            onChange={ onInputChange }
            disabled={ trunfo }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        <div>
          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              checked={ trunfo }
              onChange={ onInputChange }
              name="trunfo"
              id="trunfo"
              data-testid="trunfo-filter"
            />
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  filterI: PropTypes.string,
  onInputChange: PropTypes.func,
  filterR: PropTypes.string,
  trunfo: PropTypes.string,
}.isRequered;
