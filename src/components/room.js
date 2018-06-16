import React from "react";

class Room extends React.Component {
	render() {
		const {
			roomDimensionsWidth,
			roomDimensionsHeight,
			robotXCoordinates,
			robotYCoordinates,
			renderBlock
		} = this.props;
		return (
			<div
				className="coordinate-system"
				style={{
					width: parseInt(roomDimensionsWidth, 0),
					height: parseInt(roomDimensionsHeight, 0)
				}}
			>
				{renderBlock}
				<div
					style={{
						width: roomDimensionsWidth / 5,
						height: roomDimensionsHeight / 5,
						bottom: robotYCoordinates,
						left: robotXCoordinates
					}}
					className="roomba"
				>
					Roomba
				</div>
				<p className="x-axis">X axis</p>
				<p className="y-axis">Y axis</p>
			</div>
		);
	}
}

export default Room;
