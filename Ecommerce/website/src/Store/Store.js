// import { createStore } from 'redux'
// import rootreducer from '../Redux/Reducer/Main'

// const store = createStore(
//     rootreducer
// )
// export default store

import { createStore } from "redux";
import rootreducer from "../Redux/Reducer/Main";

const store = createStore(
    rootreducer
)
export default store