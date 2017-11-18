import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
	items: state.items
});

// const mapDispatchToProps = () => ({}); 

const Main = (props) => {
  return(
    <ul>
      {props.items.map((item) => (
        <Item id={item.id} item={item.text} />
      ))}
    </ul>
  );
};
 
export default connect(
  mapStateToProps
)(Main);