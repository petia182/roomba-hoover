import React from "react";
import ReactDOM from "react-dom";

class DirtSettings extends React.Component {
	state = {
		click: 1,
		opacity: 0
	};
	//
	// renderForm() {
	// 	// let numberOfClicks = 0;
	// 	let patches = [];
	// 	for (let i = 1; i <= this.state.click; i++) {
	// 		patches.push(<React.Fragment key={i} />);
	// 	}
	// 	return patches;
	// 	// return (
	// 	//
	// 	// );
	// }

	handleClick = () => {
		this.setState({
			opacity: 1
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Add patch</button>
				<form style={{ opacity: this.state.opacity }} action="">
					<p>Patch</p>
					<div>
						<label htmlFor="">X coordinates</label>
						<input type="number" />
					</div>
					<div>
						<label htmlFor="">Y coordinates</label>
						<input type="number" />
					</div>
				</form>
			</div>
		);
	}
}

export default DirtSettings;
