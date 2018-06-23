import React from 'react';

import DirtPatch from './dirt-patch';

class Room extends React.Component {
  render() {
    const {
      roomDimensionsWidth,
      roomDimensionsHeight,
      robotXCoordinates,
      robotYCoordinates,
      renderBlock,
      blockSize,
      deleteDirtPatch,
      // dirtXCoordinates,
      // dirtYCoordinates,
      // dirtOpacity,
      // addDirt,
      dirtPatches,
    } = this.props;

    return (
      // <div className="coordinate-system-wrapper">
      <div
        className="coordinate-system"
        style={{
          width: parseInt(roomDimensionsWidth, 0),
          height: parseInt(roomDimensionsHeight, 0),
        }}
      >
        {renderBlock}
        <div
          className="roomba"
          style={{
            width: blockSize,
            height: blockSize,
            bottom: robotYCoordinates * blockSize,
            left: robotXCoordinates * blockSize,
          }}
        >
          Roomba
        </div>
        {Object.keys(dirtPatches).map((patch, i) => {
          // console.log(dirtPatches);
          return (
            <DirtPatch
              key={dirtPatches[patch].id}
              partch={dirtPatches[patch]}
              dirtPatches={dirtPatches}
              dirtXCoordinates={parseInt(dirtPatches[patch].x, 0)}
              dirtYCoordinates={parseInt(dirtPatches[patch].y, 0)}
              blockSize={blockSize}
              robotXCoordinates={robotXCoordinates}
              robotYCoordinates={robotYCoordinates}
              deleteDirtPatch={deleteDirtPatch}
            />
          );
        })}
        {/* <DirtPatch
            blockSize={blockSize}
            dirtXCoordinates={dirtXCoordinates}
            dirtYCoordinates={dirtYCoordinates}
            robotXCoordinates={robotXCoordinates}
            robotYCoordinates={robotYCoordinates}
          /> */}
        <p className="x-axis">X</p>
        <p className="y-axis">Y</p>
      </div>
      // </div>
    );
  }
}

export default Room;
