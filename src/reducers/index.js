import { combineReducers } from 'redux';
// import BandsReducer from './reducer_bands';
// import SelectedBand from './reducer_selectedband';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';
import {
	AUTH_USER,
	UNAUTH_USER
} from '../actions/types';

// define the properties of our app store here
const rootReducer = combineReducers({
	// state: (state = {}) => state
	form: formReducer,
	auth: authReducer,
	// bands: BandsReducer,
	// SelectedBand: SelectedBand
});
export default rootReducer;