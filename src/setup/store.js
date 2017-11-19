import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

// when we have more reducers then combine reducers together in /reducers dir
import reducer from '../reducers';
import initialState from '../actions/initialState';

const store = createStore(reducer, initialState); // redux store

export default store;