import { createStore } from 'redux';

import eventReducer from './reducers';

// store can be created with root reducer and middleware
const store = createStore(eventReducer)

export default store;