import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// require('dotenv').config();

const persistConfig = {
	key: 'root',
	storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const endpoint = '';
const store = createStore(
	persistedReducer,
	applyMiddleware(thunk.withExtraArgument(endpoint))
);

store.subscribe(() => {
	console.log('current store =>', store.getState());
});

const persistor = persistStore(store);

const getStore = () => {
	return { store, persistor };
};

export default getStore;
