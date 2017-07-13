// axios, which is a promise-based http library that allows us to make AJAX requests. We can do GET, POST, UPDATE, & DELETE with it.
import axios from 'axios';

export const CREATE_POSTS = 'CREATE_POSTS';

const ROOT_URL = 'http://rest.learncode.academy/api/paul';

export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts`, props);
	return {
		type: CREATE_POSTS,
		payload: request
	};
}