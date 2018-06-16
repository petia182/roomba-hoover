import React, { Component } from "react";
import Room from "./components/room";
import RoomSettings from "./components/room-settings";
import RoombaSettings from "./components/roomba-settings";
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

	getUserInput(e) {
		console.log(e.target.value);
		return e.target.value;
	}

	renderBlock(roomDimensionsWidth, roomDimensionsHeight) {
		let blocks = [];
		for (let i = 0; i < 25; i++) {
			blocks.push(
				<div
					style={{
						width: roomDimensionsWidth / 5,
						height: roomDimensionsHeight / 5
					}}
					key={i}
					className="blocks"
				/>
			);
		}
		return blocks;
	}

	render() {
		const roomDimensionsWidth = this.state.roomDimensions.width;
		const roomDimensionsHeight = this.state.roomDimensions.height;
		const robotYCoordinates = this.state.robotCoordinates.y;
		const robotXCoordinates = this.state.robotCoordinates.x;

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
