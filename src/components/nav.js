import React, { Component } from 'react';
// stuff from bootstrap. diff comp inside bootstrap
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// takes the import comp from above/the ones in the {}
class NavBarHeader extends Component{
	renderLinks(){
		if(this.props.authenticated){
			return <NavItem href="#">Sign Out</NavItem>
		} else{
			return [
				<NavItem key={1} href="./signin">Sign In</NavItem>,
				<NavItem key={2} href="#">Sign Up</NavItem>
			];
		}
	}
	render(){
		return(
			// should be one overarhing contrainer
			// sicne class is already a keyword
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Bucket List</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					{this.renderLinks()}
					<NavDropdown key={3} title="Cool Stuff" id="basic-nav-dropdown">
						<MenuItem key={3.1}>Action</MenuItem>
						<MenuItem key={3.2}>Another Action</MenuItem>
						<MenuItem key={3.3}>Something Else Here</MenuItem>
						<MenuItem divider />
						<MenuItem key={3.4}>Separated Link</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}

function mapStateToProps(state){
	return{
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(NavBarHeader);