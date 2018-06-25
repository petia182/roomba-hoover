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
				x: 7,
				y: 7
			},
			robotCoordinates: {
				x: 0,
				y: 0
			},
			dirtPatches: {},
			dirtCount: 0
			// blockSize: 60,
		};
		this.blockSize = 60;
	}

	dirtXcoordinate = React.createRef();
	dirtYcoordinate = React.createRef();

	setCoordinates = (
		e,
		parameterToUpdate,
		otherParameter,
		otherParameterValue,
		objectName
	) => {
		let max = parseInt(e.target.max, 0);
		let min = parseInt(e.target.min, 0);
		let value = parseInt(e.target.value, 0);
		if (value > max) {
			this.setState({
				[objectName]: {
					[parameterToUpdate]: max,
					[otherParameter]: otherParameterValue
				}
			});
		} else if (value < min) {
			this.setState({
				[objectName]: {
					[parameterToUpdate]: min,
					[otherParameter]: otherParameterValue
				}
			});
		} else {
			this.setState({
				[objectName]: {
					[parameterToUpdate]: value,
					[otherParameter]: otherParameterValue
				}
			});
		}
	};

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

	addDirtPatchForm = e => {
		e.preventDefault();

		const dirtPatches = { ...this.state.dirtPatches };
		const dirt = {
			id: `dirt${Date.now()}`,
			x: this.dirtXcoordinate.current.value,
			y: this.dirtYcoordinate.current.value
		};

		dirtPatches[`dirt${Date.now()}`] = dirt;
		this.setState({
			dirtPatches
		});
	};

	componentDidMount() {
		window.addEventListener("keyup", this.handleKeyUp.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("keyup", this.handleKeyUp.bind(this));
	}

	deleteDirtPatch = key => {
		const dirtPatches = { ...this.state.dirtPatches };
		delete dirtPatches[key];
		this.setState({
			dirtPatches
		});
	};

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
		const roomDimensionsWidth = this.state.roomDimensions.x;
		const roomDimensionsHeight = this.state.roomDimensions.y;
		const robotYCoordinates = this.state.robotCoordinates.y;
		const robotXCoordinates = this.state.robotCoordinates.x;

		return (
			<div className="container">
				<div className="settings">
					<RoomSettings
						roomDimensionsWidth={this.state.roomDimensions.x}
						roomDimensionsHeight={this.state.roomDimensions.y}
						setRoomWidthDimensions={e =>
							this.setCoordinates(
								e,
								"x",
								"y",
								this.state.roomDimensions.y,
								"roomDimensions"
							)
						}
						setRoomHeightDimensions={e =>
							this.setCoordinates(
								e,
								"y",
								"x",
								this.state.roomDimensions.x,
								"roomDimensions"
							)
						}
					/>
					<hr />
					<RoombaSettings
						robotYCoordinates={robotYCoordinates * this.blockSize}
						robotXCoordinates={robotXCoordinates * this.blockSize}
						setRobotXCoordinates={e =>
							this.setCoordinates(
								e,
								"x",
								"y",
								this.state.robotCoordinates.y,
								"robotCoordinates"
							)
						}
						setRobotYCoordinates={e =>
							this.setCoordinates(
								e,
								"y",
								"x",
								this.state.robotCoordinates.x,
								"robotCoordinates"
							)
						}
						blockSize={this.blockSize}
					/>
					<hr />
					<div className="dirt-settings">
						<p>Add Dirt Patches</p>
						<label htmlFor="">X: </label>
						<input ref={this.dirtXcoordinate} type="number" min="0" max="10" />
						<label htmlFor="">Y: </label>
						<input ref={this.dirtYcoordinate} type="number" min="0" max="10" />
						<button
							className="add-patch"
							onClick={this.addDirtPatchForm}
							type="submit"
						>
							Add Dirt Patch
						</button>
					</div>
				</div>
				<Room
					roomDimensionsWidth={roomDimensionsWidth * this.blockSize}
					roomDimensionsHeight={roomDimensionsHeight * this.blockSize}
					dirtPatches={this.state.dirtPatches}
					deleteDirtPatch={this.deleteDirtPatch}
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
