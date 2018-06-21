import React from "react";

class DirtPatch extends React.Component {
	constructor(props) {
		super();
		this.opacity = 1;
	}

	clearDirt = () => {
		if (
			this.props.robotYCoordinates === this.props.dirtYCoordinates &&
			this.props.robotXCoordinates === this.props.dirtXCoordinates
		) {
			console.log("Cleaning");
			this.opacity = 0;
		}
	};

	render() {
		this.clearDirt();

		const {
			blockSize,
			dirtXCoordinates,
			dirtYCoordinates,
			dirtOpacity
		} = this.props;
		return (
			<div
				className="dirt-patch"
				style={{
					width: blockSize,
					height: blockSize,
					bottom: dirtYCoordinates * blockSize,
					left: dirtXCoordinates * blockSize,
					opacity: this.opacity
				}}
			>
				<span style={{ width: blockSize / 2, height: blockSize / 2 }} />
			</div>
		);
	}
}

export default DirtPatch;
