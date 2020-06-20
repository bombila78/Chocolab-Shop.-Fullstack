import {createStore} from 'redux';
import updateGoodList from '../src/reducers/good-list-reducer';

const store = createStore(updateGoodList);

export default store;