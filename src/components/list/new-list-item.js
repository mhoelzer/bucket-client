import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../../actions2/index'
import { Link } from 'react-router';

class ListItem extends Component {
	handleFormSubmit(formProps){
		// call action creator to sign up the user
		// console.log(formProps);
		this.props.createPost(formProps);
	}

	render(){
		const{handleSubmit, fields: {title, category, url, content}} = this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				
				<fieldset className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</fieldset>
				<fieldset className="form-group">
					<label>Category</label>
					<input type="text" className="form-control" {...category} />
				</fieldset>
				<fieldset className="form-group">
					<label>URL</label>
					<input type="text" className="form-control" {...url} />
				</fieldset>
				<fieldset className="form-group">
					<label>Content</label>
					<textarea type="text" rows="8" className="form-control text" {...content} />
				</fieldset>

				<button type="submit" className="btn btn=primary">Submit</button>
				<button input="submit" className="btn btn-danger">Cancel</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'category', 'url', 'content']
// })(ListItem);
}, null, { createPost })(ListItem);