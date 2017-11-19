const modify = (state = [], action) => {
  switch (action.type) {
    case 'ITEM/ADD':
      return {
      	...state,
      	items: state.items.push(action.payload)
      }

    default:
      return state;
  }
};

export default modify;