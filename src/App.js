import React, {Component} from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			instructors: [
				{
					name: 'Tim',
					hobbies: ['sailing', 'react']
				}, {
					name: 'Matt',
					hobbies: ['math', 'D3']
				}, {
					name: 'Colt',
					hobbies: ['CSS', 'Hiking']
				},{
					name: 'Elie',
					hobbies: ['Music', 'ES2015']
				}

			]
		};
	}
	
	render() {
		const instructors = this.state.instructors.map((instructors,index) => (
			<li key={index}>
				<h3>{instructors.name}</h3>
				<h4>Hobbies: {instructors.hobbies.join(", "})</h4>
			</li>
		));
		
		return (
		<div className = "App">
			<ul>
				{instructors}	
			</ul>	
		</div>
		);
	}
	
}

export default App;