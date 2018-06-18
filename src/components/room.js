import React from "react";

import DirtPatch from "./dirt-patch";

class Room extends React.Component {
	render() {
		const {
			roomDimensionsWidth,
			roomDimensionsHeight,
			robotXCoordinates,
			robotYCoordinates,
			renderBlock,
			blockSize,
			dirtXCoordinates,
			dirtYCoordinates,
			dirtOpacity
		} = this.props;
		return (
			// <div className="coordinate-system-wrapper">
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
							bottom: robotYCoordinates * blockSize,
							left: robotXCoordinates * blockSize
						}}
					>
						Roomba
					</div>
					<DirtPatch
						blockSize={blockSize}
						dirtXCoordinates={dirtXCoordinates}
						dirtYCoordinates={dirtYCoordinates}
						robotXCoordinates={robotXCoordinates}
						robotYCoordinates={robotYCoordinates}
						dirtOpacity={dirtOpacity}
					/>
					<p className="x-axis">X</p>
					<p className="y-axis">Y</p>
				</div>
			// </div>
		);
	}
}

export default Room;
