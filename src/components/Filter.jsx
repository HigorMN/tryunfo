import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { filterI, onInputChange, filterR } = this.props;
    return (
      <>
        <div>
          <input
            type="text"
            name="filterI"
            id="filterI"
            data-testid="name-filter"
            value={ filterI }
            onChange={ onInputChange }
          />
        </div>
        <div>
          <select
            data-testid="rare-filter"
            name="filterR"
            value={ filterR }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
      </>
    );
  }
}

Filter.propTypes = {
  filterI: PropTypes.string,
  onInputChange: PropTypes.func,
  filterR: PropTypes.string,
}.isRequered;
