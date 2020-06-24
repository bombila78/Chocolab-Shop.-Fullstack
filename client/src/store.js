import {  createStore } from 'redux';
import chocolab from '../src/reducers/index';
import { loadState, saveState } from './localstorage/localstorage';

import {save, load} from 'redux-localstorage-simple'




const store = createStore(chocolab, loadState());

store.subscribe(() => {
    saveState({
        cart: store.getState().cart
    })
})

export default store;