import React, { Component } from 'react';
// stuff from bootstrap. diff comp inside bootstrap
import { Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav } from 'react-bootstrap';

// takes the import comp from above/the ones in the {}
class NavBarHeader extends Component{
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
					<NavItem eventKey={1} href="#">Sign In</NavItem>
					<NavItem eventKey={2} href="#">Sign Up</NavItem>
					<NavDropdown eventKey={3} title="Cool Stuff" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another Action</MenuItem>
						<MenuItem eventKey={3.3}>Something Else Here</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.4}>Separated Link</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBarHeader;