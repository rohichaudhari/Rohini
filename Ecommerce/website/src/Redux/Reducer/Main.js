
// combine all reducer here and then send store
// (object wise)

import {combineReducers} from "redux"
import {cartreducer,wishreducer} from '../Reducer/Reducer';

const rootreducer = combineReducers({
    cartreducer,wishreducer
})


export default rootreducer;
