import React from "react";
import ReactDOM from "react-dom";

class DirtSettings extends React.Component {
	state = {
		click: 1
	};

	handleClick = e => {
		e.preventDefault();
		console.log("click");
		this.setState({
			click: this.state.click + 1
		});
		ReactDOM.render(this.renderForm(), document.getElementById("dirt-form"));
	};

	renderForm() {
		// let numberOfClicks = 0;
		let patches = [];
		for (let i = 1; i <= this.state.click; i++) {
			patches.push(
				<React.Fragment key={i}>
					<p>Patch {i}</p>
					<div>
						<label htmlFor="">X coordinates</label>
						<input type="number" />
					</div>
					<div>
						<label htmlFor="">Y coordinates</label>
						<input type="number" />
					</div>
				</React.Fragment>
			);
		}
		return patches;
		// return (
		//
		// );
	}

	render() {
		return (
			<React.Fragment>
				<p>Add dirt patches</p>
				<button onClick={this.handleClick}>Add patch</button>
				<form action="" id="dirt-form" />
			</React.Fragment>
		);
	}
}

export default DirtSettings;
