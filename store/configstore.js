import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import indexReducer from '../reducers/indexReducer'
//让redux使用中间件的方式支持异步操作
let createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore);
let store=createStoreWithMiddleware(indexReducer);
export default store;