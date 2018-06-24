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
      dirtPatches,
    } = this.props;

    return (
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
          <img
            src="https://www.kotacreative.co.uk/codepen/roomba.png"
            alt=""
            style={{
              width: blockSize,
            }}
          />
        </div>
        {Object.keys(dirtPatches).map((patch, i) => {
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
        <p className="x-axis">X</p>
        <p className="y-axis">Y</p>
      </div>
    );
  }
}

export default Room;
