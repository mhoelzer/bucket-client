// axios, which is a promise-based http library that allows us to make AJAX requests. We can do GET, POST, UPDATE, & DELETE with it.
import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER } from './types';
import authReducer from '../reducers/auth_reducer';


// BANDS
// action constant names
// selectBand is an action creator. it returns an action that has to be object with a type property
const SELECT_BAND = 'SELECT_BAND';
export function selectBand(band){
	console.log("You have selected:", band.name)
	return{
		type: 'SELECT_BAND',
		payload: band
	}
}


// NOT BANDS
// call out to a test api
// take out the learncode b/c the url might be too long. check by adding /posts at the end in the url thingy on internet
// const ROOT_URL = 'http//rest.learncode.academy/api/mh';
const ROOT_URL = 'http://localhost:3000';

export const CREATE_POSTS = 'CREATE_POSTS';

// action creator b/c returns an action
export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}

export function signinUser({ email, password }){
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {email, password})
			// this kickstarts if the response is good
			.then(response => {
				// update the state to indicate authenticated user
				dispatch({ type: AUTH_USER });
				// puts the token in localstroage. it's safe and doesnt have to be imported and can be called at any time. 
				// the sI saves something in localstroage. provide a toekn then data
				localStorage.setItem('token', response.data.token);
				// this sends us off to the /newitem veiw
				browserHistory.push('/newitem');
			})
			.catch(() => {

			});
	}
}