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
				x: 5,
				y: 5
			},
			robotCoordinates: {
				x: 0,
				y: 0
			},
			dirtCoordinates: {
				x: 0,
				y: 0
			},
			count: 0
		};
		this.blockSize = 80;
	}
	setRoomWidthDimensions = e => {
		this.setState({
			roomDimensions: {
				x: parseInt(e.target.value, 0),
				y: this.state.roomDimensions.y
			}
		});
	};

	setRoomHeightDimensions = e => {
		this.setState({
			roomDimensions: {
				y: parseInt(e.target.value, 0),
				x: this.state.roomDimensions.x
			}
		});
	};

	setRobotXCoordinates = e => {
		this.setState({
			robotCoordinates: {
				x: parseInt(e.target.value, 0),
				y: this.state.robotCoordinates.y
			}
		});
	};

	setRobotYCoordinates = e => {
		this.setState({
			robotCoordinates: {
				y: parseInt(e.target.value, 0),
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
			this.state.roomDimensions.x * this.state.roomDimensions.y;
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

	// componentDidUpdate = () => {
	// 	this.moveRobot();
	// };

	componentDidMount() {
		window.addEventListener("keyup", this.handleKeyUp.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("keyup", this.handleKeyUp.bind(this));
	}

	handleKeyUp = e => {
		if (e.keyCode === 38 || e.keyCode === 87) {
			this.setState({
				robotCoordinates: {
					y: this.state.robotCoordinates.y + 1,
					x: this.state.robotCoordinates.x
				}
			});
			if (this.state.robotCoordinates.y === this.state.roomDimensions.y) {
				this.setState({
					robotCoordinates: {
						y: this.state.roomDimensions.y - 1,
						x: this.state.robotCoordinates.x
					}
				});
			}
		} else if (e.keyCode === 40 || e.keyCode === 83) {
			this.setState({
				robotCoordinates: {
					y: this.state.robotCoordinates.y - 1,
					x: this.state.robotCoordinates.x
				}
			});
			if (this.state.robotCoordinates.y < 0) {
				this.setState({
					robotCoordinates: {
						y: 0,
						x: this.state.robotCoordinates.x
					}
				});
			}
		} else if (e.keyCode === 37 || e.keyCode === 65) {
			console.log("LEFT");
			this.setState({
				robotCoordinates: {
					x: this.state.robotCoordinates.x - 1,
					y: this.state.robotCoordinates.y
				}
			});
			if (this.state.robotCoordinates.x < 0) {
				this.setState({
					robotCoordinates: {
						x: 0,
						y: this.state.robotCoordinates.y
					}
				});
			}
		} else if (e.keyCode === 39 || e.keyCode === 68) {
			console.log("RIGHT");
			this.setState({
				robotCoordinates: {
					x: this.state.robotCoordinates.x + 1,
					y: this.state.robotCoordinates.y
				}
			});
			if (this.state.robotCoordinates.x === this.state.roomDimensions.x) {
				this.setState({
					robotCoordinates: {
						y: this.state.robotCoordinates.y,
						x: this.state.roomDimensions.x - 1
					}
				});
			}
		}
	};

	render() {
		const roomDimensionsWidth = this.state.roomDimensions.x * this.blockSize;
		const roomDimensionsHeight = this.state.roomDimensions.y * this.blockSize;
		const robotYCoordinates = this.state.robotCoordinates.y * this.blockSize;
		const robotXCoordinates = this.state.robotCoordinates.x * this.blockSize;

		// this.moveRobot();

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
						blockSize={this.blockSize}
					/>
				</div>
				<Room
					roomDimensionsWidth={roomDimensionsWidth}
					roomDimensionsHeight={roomDimensionsHeight}
					robotYCoordinates={robotYCoordinates}
					robotXCoordinates={robotXCoordinates}
					blockSize={this.blockSize}
					renderBlock={this.renderBlock(
						this.state.roomDimensions.x,
						this.state.roomDimensions.y
					)}
				/>
			</div>
		);
	}
}

export default App;
