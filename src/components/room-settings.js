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
				<h2>Move the robot using the arrow keys on your keyboard.</h2>
				<div className="room-coordinates">
					<p>Current Room dimensions</p>
					<p>Width: {roomDimensionsWidth}px</p>
					<p>Length: {roomDimensionsHeight}px</p>
				</div>
				Set Room Dimensions (number)
				<br />
				<div className="form-group">
					<label htmlFor="room-width-dimensions">Set width</label>
					<input
						onChange={setRoomWidthDimensions}
						id="room-width-dimensions"
						type="number"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="room-height-dimensions">Set length</label>
					<input
						onChange={setRoomHeightDimensions}
						id="room-height-dimensions"
						type="number"
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default RoomSettings;
