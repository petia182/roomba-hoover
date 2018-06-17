import React from "react";

class Room extends React.Component {
	render() {
		const {
			roomDimensionsWidth,
			roomDimensionsHeight,
			robotXCoordinates,
			robotYCoordinates,
			renderBlock,
			blockSize
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
					className="roomba"
					style={{
						width: blockSize,
						height: blockSize,
						bottom: robotYCoordinates,
						left: robotXCoordinates
					}}
				>
					Roomba
				</div>
				<p className="x-axis">X</p>
				<p className="y-axis">Y</p>
			</div>
		);
	}
}

export default Room;
