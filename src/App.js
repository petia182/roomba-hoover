import React, { Component } from "react";
import Block from "./components/block";
import "./App.scss";

class App extends Component {
	state = {
		roomDimensions: {
			width: 400,
			height: 400
		},
		robotCoordinates: {
			x: 0,
			y: 0
		},
		dirtCoordinates: {
			x: 1,
			y: 1
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

	setRobotXCoordinates = e => {
		this.setState({
			robotCoordinates: {
				x: (e.target.value - 1) * this.state.roomDimensions.width / 5,
				y: this.state.robotCoordinates.y
			}
		});
	};

	setRobotYCoordinates = e => {
		this.setState({
			robotCoordinates: {
				y: (e.target.value - 1) * this.state.roomDimensions.width / 5,
				x: this.state.robotCoordinates.x
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
				<div className="settings">
					<div className="room-coordinates">
						<p>Current Room dimensions</p>
						<p>Width: {this.state.roomDimensions.width}px</p>
						<p>Length: {this.state.roomDimensions.height}px</p>
					</div>
					Set Room Dimensions (number)
					<br />
					<form action="">
						<div className="form-group">
							<label htmlFor="room-width-dimensions">Set width</label>
							<input
								onChange={this.setRoomWidthDimensions}
								id="room-width-dimensions"
								type="number"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="room-height-dimensions">Set length</label>
							<input
								onChange={this.setRoomHeightDimensions}
								id="room-height-dimensions"
								type="number"
							/>
						</div>
						<hr />
						<div className="roomba-coordinates">
							Roomba coordinates
							<p>X: {this.state.robotCoordinates.x}</p>
							<p>Y: {this.state.robotCoordinates.y}</p>
						</div>
						<div className="form-group">
							<label htmlFor="">Set X coordinate (between 0 and 5):</label>
							<input
								onChange={this.setRobotXCoordinates}
								type="number"
								min="0"
								max="5"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="">Set Y coordinate (between 0 and 5):</label>
							<input
								onChange={this.setRobotYCoordinates}
								type="number"
								min="0"
								max="5"
							/>
						</div>
					</form>
				</div>
				<div
					style={{
						width: parseInt(this.state.roomDimensions.width, 0),
						height: parseInt(this.state.roomDimensions.height, 0)
					}}
					className="coordinate-system"
				>
					{this.renderBlock()}
					<div
						style={{
							width: this.state.roomDimensions.width / 5,
							height: this.state.roomDimensions.height / 5,
							bottom: this.state.robotCoordinates.y,
							left: this.state.robotCoordinates.x
						}}
						className="roomba"
					>
						Roomba
					</div>
					<p className="x-axis">X axis</p>
					<p className="y-axis">Y axis</p>
				</div>
			</div>
		);
	}
}

export default App;
