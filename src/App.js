import React, { Component } from "react";
import Block from "./components/block";
import "./App.scss";

class App extends Component {
	state = {
		roomDimensions: {
			width: 600,
			height: 600
		},
		robotCoordinates: {
			x: 0,
			y: 0
		},
		dirtCoordinates: {
			x: 0,
			y: 0
		}
	};

	setRoomWidthDimensions = e => {
		this.setState({
			roomDimensions: {
				width: e.target.value,
				height: this.state.roomDimensions.height
			}
		});
	};

	setRoomHeightDimensions = e => {
		this.setState({
			roomDimensions: {
				height: e.target.value,
				width: this.state.roomDimensions.width
			}
		});
	};

	renderBlock() {
		let blocks = [];
		for (let i = 0; i < 25; i++) {
			blocks.push(
				<div
					style={{
						width: this.state.roomDimensions.width / 5,
						height: this.state.roomDimensions.height / 5
					}}
					key={i}
					className="blocks"
				/>
			);
		}
		return blocks;
	}

	render() {
		return (
			<div className="container">
				<form action="">
					Room Dimensions (number)
					<br />
					<label htmlFor="room-width-dimensions">Set width</label>
					<input
						onChange={this.setRoomWidthDimensions}
						id="room-width-dimensions"
						type="number"
					/>
					<label htmlFor="room-height-dimensions">Set length</label>
					<input
						onChange={this.setRoomHeightDimensions}
						id="room-height-dimensions"
						type="number"
					/>
				</form>
				<div>
					<p>Room dimensions</p>
					<p>Width: {this.state.roomDimensions.width}px</p>
					<p>Length: {this.state.roomDimensions.height}px</p>
				</div>
				<div
					style={{
						width: parseInt(this.state.roomDimensions.width, 0),
						height: parseInt(this.state.roomDimensions.height, 0)
					}}
					className="coordinate-system"
				>
					{this.renderBlock()}
				</div>
			</div>
		);
	}
}

export default App;
