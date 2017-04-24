import React, { Component } from 'react';

class Main extends Component {
	render() {
		return (
			<div className='main-container'> Hi from Main! 
			{this.props.children}
			</div>
		)
	}
}

export default Main;