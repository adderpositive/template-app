import React from 'react';
import Item from './pages/Item';
import { connect as reduxConnect } from 'react-redux';
import { connect as felaConnect } from 'react-fela';

const cnt = () => ({
  color: '#ff0'
});

const states = (state) => ({
  items: state.items
});

// const dispatches = () => ({});

const styles = () => ({
  cnt
});

const Main = (props) => {
  return(
    <ul className={props.styles.cnt}>
      {props.items.map((item) => (
        <Item key={item.id} item={item.text} />
      ))}
    </ul>
  );
};

// map redux state and fela styles to props
const mapping = reduxConnect(
  states,
  // dispatches
)(felaConnect(styles)(Main));

export default mapping;