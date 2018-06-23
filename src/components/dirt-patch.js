import React from 'react';

class DirtPatch extends React.Component {
  clearDirt = () => {
    Object.keys(this.props.dirtPatches).map(patch => {
      if (
        this.props.robotYCoordinates ===
          parseInt(this.props.dirtPatches[patch].y, 0) &&
        this.props.robotXCoordinates ===
          parseInt(this.props.dirtPatches[patch].x, 0)
      ) {
        const id = this.props.dirtPatches[patch].id;
        this.props.deleteDirtPatch(id);
      }
    });
  };

  componentDidUpdate() {
    this.clearDirt();
  }

  render() {
    const { blockSize, dirtXCoordinates, dirtYCoordinates } = this.props;
    return (
      <div
        className="dirt-patch"
        style={{
          width: blockSize,
          height: blockSize,
          bottom: dirtYCoordinates * blockSize,
          left: dirtXCoordinates * blockSize,
          opacity: this.opacity,
        }}
      >
        <span style={{ width: blockSize / 2, height: blockSize / 2 }} />
      </div>
    );
  }
}

export default DirtPatch;
