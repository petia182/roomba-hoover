import React, { Component } from "react";
import ReactDOM from "react-dom";

import Room from "./components/room";
import RoomSettings from "./components/room-settings";
import RoombaSettings from "./components/roomba-settings";
import DirtSettings from "./components/dirt-settings";
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
				x: -1,
				y: -1,
				opacity: 0,
			},
			dirtPatches: [],
			dirtCount: 0
		};
		this.blockSize = 60;
	}

	setRoomWidthDimensions = e => {
		this.setState({
			roomDimensions: {
				x: parseInt(e.target.value, 0),
				y: this.state.roomDimensions.y
			},
			robotCoordinates: {
				x: 0,
				y: 0
			}
		});
	};

	setRoomHeightDimensions = e => {
		this.setState({
			roomDimensions: {
				y: parseInt(e.target.value, 0),
				x: this.state.roomDimensions.x
			},
			robotCoordinates: {
				x: 0,
				y: 0
			}
		});
	};

	setRobotXCoordinates = e => {
		this.setState({
			robotCoordinates: {
				x: parseInt(e.target.value, 0),
				y: this.state.robotCoordinates.y,
			}
		});
	};

	setRobotYCoordinates = e => {
		this.setState({
			robotCoordinates: {
				y: parseInt(e.target.value, 0),
				x: this.state.robotCoordinates.x,
			}
		});
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
		console.log("click");
		this.setState({
			dirtCount: this.state.dirtCount + 1
		});
		ReactDOM.render(
			this.renderDirtForm(),
			document.getElementById("dirt-form")
		);
	};

	setDirtPatchCoordinates = e => {

		e.preventDefault();
		console.log(this.getUserInputX())
		// let dirt = {
		// 	x: 0,
		// 	y: 0
		// };
		// const target = e.target;
		// const value = target.value;
		// const name = target.name;

		// this.setState({
		// 	dirtCoordinates: {
		// 		x: this.getUserInputX,
		// 		y: this.getUserInputY
		// 	}
		// })
		//
		// this.setState({
		// 	dirtPatches: this.state.dirtPatches.concat([
		// 		{ x: parseInt(([name]: value), 0), y: parseInt(([name]: value), 0) }
		// 	])
		// });
	};

	getUserInputX(e) {
		// console.log(e.target.value)
		// return e.target.value;
		this.setState({
			dirtCoordinates: {
				x: parseInt(e.target.value, 0),
				y: this.state.dirtCoordinates.y,
				opacity: this.state.dirtCoordinates.opacity
			}
		})
	}


	getUserInputY(e) {
		this.setState({
			dirtCoordinates: {
				y: parseInt(e.target.value, 0),
				x: this.state.dirtCoordinates.x,
				opacity: 1
			}
		})
	}

	renderDirtForm() {
		let patches = [];
		for (let i = 0; i <= this.state.dirtCount; i++) {
			patches.push(
				<React.Fragment key={i}>
					<p>Patch {i + 1}</p>
					<div>
						<label htmlFor="">X coordinates</label>
						<input onChange={(e) => this.getUserInputX(e)} name="x" type="number" />
					</div>
					<div>
						<label htmlFor="">Y coordinates</label>
						<input onChange={(e) => this.getUserInputY(e)} name="y" type="number" />
					</div>
					<button onClick={this.setDirtPatchCoordinates}>Submit</button>
				</React.Fragment>
			);
		}
		return patches;
	}

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
						x: this.state.robotCoordinates.x,
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
		const dirtXCoordinates = this.state.dirtCoordinates.x;
		const dirtYCoordinates = this.state.dirtCoordinates.y;

		// this.clearDirt();

		return (
			<div className="container">
				<div className="settings">
					<RoomSettings
						roomDimensionsWidth={this.state.roomDimensions.x * this.blockSize}
						roomDimensionsHeight={this.state.roomDimensions.y * this.blockSize}
						setRoomWidthDimensions={this.setRoomWidthDimensions}
						setRoomHeightDimensions={this.setRoomHeightDimensions}
					/>
					<hr />
					<RoombaSettings
						robotYCoordinates={robotYCoordinates * this.blockSize}
						robotXCoordinates={robotXCoordinates * this.blockSize}
						setRobotXCoordinates={this.setRobotXCoordinates}
						setRobotYCoordinates={this.setRobotYCoordinates}
						blockSize={this.blockSize}
					/>
					<hr />
					{/* <DirtSettings /> */}
					<button onClick={this.addDirtPatchForm}>Add patch</button>
					<form action="" id="dirt-form" />
				</div>
				<Room
					roomDimensionsWidth={roomDimensionsWidth * this.blockSize}
					roomDimensionsHeight={roomDimensionsHeight * this.blockSize}
					dirtXCoordinates={dirtXCoordinates}
					dirtYCoordinates={dirtYCoordinates}
					dirtOpacity={this.state.dirtCoordinates.opacity}
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
