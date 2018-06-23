import React from 'react';

class RoomSettings extends React.Component {
  render() {
    const {
      roomDimensionsWidth,
      roomDimensionsHeight,
      setRoomWidthDimensions,
      setRoomHeightDimensions,
    } = this.props;
    return (
      <React.Fragment>
        <div className="instructions">
          <h1>Instructions</h1>
          <ol>
            <li>(Optional) Set the coordinates of the room</li>
            <li>(Optional) Set the starting point of the roomba</li>
            <li>Set the coordinates of 0 or more dirt patches</li>
            <li>Move the roomba using the arrow keys or (A,W,S,D)</li>
          </ol>
        </div>
        <div className="room-coordinates">
          <i>Current Room dimensions</i>
          <p>
            <span>X: {roomDimensionsWidth}</span>
            <span>Y: {roomDimensionsHeight}</span>
          </p>
        </div>
        <div className="room-settings">
          Set Room Dimensions (number)
          <br />
          <div className="form-group">
            <label htmlFor="room-width-dimensions">X:</label>
            <input
              onChange={setRoomWidthDimensions}
              id="room-width-dimensions"
              type="number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="room-height-dimensions">Y:</label>
            <input
              onChange={setRoomHeightDimensions}
              id="room-height-dimensions"
              type="number"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RoomSettings;
