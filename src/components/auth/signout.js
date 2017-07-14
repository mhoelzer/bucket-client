import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	componentWillMout(){
		this.props.signoutuser()
	}
	render(){
		return <div>Adios...</div>
	}
}

export default connect(null, actions)(Signout);