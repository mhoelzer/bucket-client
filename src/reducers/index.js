import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import SelectedBand from './reducer_selectedband';
import {reducer as formReducer} from 'redux-form';


// define the properties of our app store here
const rootReducer = combineReducers({
	// state: (state = {}) => state
	bands: BandsReducer,
	SelectedBand: SelectedBand
});
export default rootReducer;