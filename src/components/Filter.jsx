import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { filterI, onInputChange } = this.props;
    return (
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
    );
  }
}

Filter.propTypes = {
  filterI: PropTypes.string,
  onInputChange: PropTypes.func,
}.isRequered;
