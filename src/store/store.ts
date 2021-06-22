/**
 * Redux store
 * 
 * @category Store
 * @package  App
 * @author   Joakim Wennergren <joakim.wennergren@databeams.se>
 * @license  Copyright (C) Joakim Wennergren 2021
 * @link     https://github.com/Databeams/Mikbits-webapplication.git
 */
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from "../reducers/index.reducer";
import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//Create a new redux store
export const store: any = createStore(persistedReducer, applyMiddleware(logger));

export const persistor: any = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
