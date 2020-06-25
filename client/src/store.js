import { createStore } from 'redux';
import chocolab from '../src/reducers/index';
import { loadState, saveState } from './localstorage/localstorage';

const store = createStore(chocolab, loadState());

store.subscribe(() => {
    saveState({
        cart: store.getState().cart,
        login: store.getState().login
    })
})

export default store;