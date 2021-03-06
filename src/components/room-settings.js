import React from "react";

class RoomSettings extends React.Component {
	render() {
		const {
			roomDimensionsWidth,
			roomDimensionsHeight,
			setRoomWidthDimensions,
			setRoomHeightDimensions
		} = this.props;
		return (
			<React.Fragment>
				<div className="instructions">
					<h1>Instructions</h1>
					<ol>
						{/* <li>(Optional) Set the coordinates of the room (min 0, max 10)</li>
            <li>
              (Optional) Set the starting point of the roomba (min 0, max 9)
            </li> */}
						<li>Set the coordinates of 0 or more dirt patches</li>
						<li>Move the roomba using the arrow keys or (A,W,S,D)</li>
					</ol>
				</div>
				<div className="room-coordinates">
					<i>Current room dimensions</i>
					<p>
						<span>X: {roomDimensionsWidth}</span>
						<span>Y: {roomDimensionsHeight}</span>
					</p>
				</div>
				<div className="room-settings">
					Update room dimensions
					<br />
					<label htmlFor="room-width-dimensions">X:</label>
					<input
						onChange={setRoomWidthDimensions}
						type="number"
						min="1"
						max="10"
					/>
					<label htmlFor="room-height-dimensions">Y:</label>
					<input
						onChange={setRoomHeightDimensions}
						type="number"
						min="1"
						max="10"
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default RoomSettings;
