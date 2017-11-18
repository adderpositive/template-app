import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, item }) => (
  <li key={id}>
    {item}
  </li>
);

Item.PropTypes = {
	key: PropTypes.number.isRequired,
	item: PropTypes.string.isRequired
}

export default Item;