/* import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk]

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
	persistedReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
) 

export const persistor = persistStore(store)

//export default store


/* default () => {
	const store = createStore(
		persistedReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middleware))
	) 
	let persistor = persistStore(store)
	return { store, persistor }
} */


import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;