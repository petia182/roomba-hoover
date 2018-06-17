import React, { Component } from "react";
import Room from "./components/room";
import RoomSettings from "./components/room-settings";
import RoombaSettings from "./components/roomba-settings";
import "./App.scss";

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			roomDimensions: {
				width: 2,
				height: 2
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
		this.blockSize = 60;
	}
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
				x: e.target.value * this.state.roomDimensions.width / 5,
				y: this.state.robotCoordinates.y
			}
		});
	};

	setRobotYCoordinates = e => {
		this.setState({
			robotCoordinates: {
				y: e.target.value * this.state.roomDimensions.width / 5,
				x: this.state.robotCoordinates.x
			}
		});
	};

	// getUserInput(e) {
	// 	console.log(e.target.value);
	// 	return e.target.value;
	// }

	renderBlock = (roomDimensionsWidth, roomDimensionsHeight) => {
		const numberOfBlocks =
			this.state.roomDimensions.width * this.state.roomDimensions.height;
		let blocks = [];
		for (let i = 0; i < numberOfBlocks; i++) {
			blocks.push(
				<div
					style={{
						width: this.blockSize,
						height: this.blockSize
					}}
					key={i}
					className="blocks"
				/>
			);
		}
		return blocks;
	};

	componentDidUpdate = () => {
		this.moveRobot();
	};

	moveRobot = e => {
		// let n = 0;
		// document.body.addEventListener("keyup", e => {
		// 	n += 1;
		// 	console.log(this.state.robotCoordinates.x);
		// 	this.setState({
		// 		robotCoordinates: {
		// 			y: this.state.robotCoordinates.x + n,
		// 			x: 5
		// 		}
		// 	});
		// 	if (e.keyCode === 38 || e.keyCode === 87) {
		// 		// this.setState({
		// 		// 	robotCoordinates: {
		// 		// 		y: n,
		// 		// 		x: this.state.robotCoordinates.x
		// 		// 	}
		// 		// });
		// 	} else if (e.keyCode === 40 || e.keyCode === 83) {
		// 		console.log("DOWN");
		// 	} else if (e.keyCode === 37 || e.keyCode === 65) {
		// 		console.log("LEFT");
		// 	} else if (e.keyCode === 39 || e.keyCode === 68) {
		// 		console.log("RIGHT");
		// 	}
		// });
	};

	render() {
		const roomDimensionsWidth =
			this.state.roomDimensions.width * this.blockSize;
		const roomDimensionsHeight =
			this.state.roomDimensions.height * this.blockSize;
		const robotYCoordinates = this.state.robotCoordinates.y;
		const robotXCoordinates = this.state.robotCoordinates.x;

		this.moveRobot();

		return (
			<div className="container">
				<div className="settings">
					<RoomSettings
						roomDimensionsWidth={roomDimensionsWidth}
						roomDimensionsHeight={roomDimensionsHeight}
						setRoomWidthDimensions={this.setRoomWidthDimensions}
						setRoomHeightDimensions={this.setRoomHeightDimensions}
					/>
					<hr />
					<RoombaSettings
						robotYCoordinates={robotYCoordinates}
						robotXCoordinates={robotXCoordinates}
						setRobotXCoordinates={this.setRobotXCoordinates}
						setRobotYCoordinates={this.setRobotYCoordinates}
					/>
				</div>
				<Room
					roomDimensionsWidth={roomDimensionsWidth}
					roomDimensionsHeight={roomDimensionsHeight}
					robotYCoordinates={robotYCoordinates}
					robotXCoordinates={robotXCoordinates}
					renderBlock={this.renderBlock(
						this.state.roomDimensions.width,
						this.state.roomDimensions.height
					)}
				/>
			</div>
		);
	}
}

export default App;
