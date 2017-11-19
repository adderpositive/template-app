import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, item }) => (
  <li>
    {item} {id}
  </li>
);

Item.PropTypes = {
  item: PropTypes.string.isRequired
};

export default Item;