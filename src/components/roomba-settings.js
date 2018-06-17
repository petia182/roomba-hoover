import React from "react";

class RoombaSettings extends React.Component {
	render() {
		const {
			robotYCoordinates,
			robotXCoordinates,
			setRobotXCoordinates,
			setRobotYCoordinates,
			blockSize
		} = this.props;

		return (
			<React.Fragment>
				<div className="roomba-coordinates">
					Roomba coordinates
					<p>X: {robotXCoordinates / blockSize}</p>
					<p>Y: {robotYCoordinates / blockSize}</p>
				</div>
				<div className="form-group">
					<label htmlFor="">Set X coordinate (between 0 and 5):</label>
					<input
						onChange={setRobotXCoordinates}
						type="number"
						min="0"
						max="5"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Set Y coordinate (between 0 and 5):</label>
					<input
						onChange={setRobotYCoordinates}
						type="number"
						min="0"
						max="5"
					/>
				</div>
			</React.Fragment>
		);
	}
}

export default RoombaSettings;
