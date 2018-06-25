import React from 'react';

class RoombaSettings extends React.Component {
  render() {
    const {
      robotYCoordinates,
      robotXCoordinates,
      setRobotXCoordinates,
      setRobotYCoordinates,
      blockSize,
    } = this.props;

    return (
      <React.Fragment>
        <div className="roomba-coordinates">
          <i>Current Roomba coordinates</i>
          <p>
            <span>X: {robotXCoordinates / blockSize}</span>
            <span>Y: {robotYCoordinates / blockSize}</span>
          </p>
        </div>
        <div className="roomba-settings">
          Set Roomba starting point
          <br />
          <label htmlFor="">X:</label>
          <input
            onChange={setRobotXCoordinates}
            type="number"
            min="0"
            max="9"
          />
          <label htmlFor="">Y:</label>
          <input
            onChange={setRobotYCoordinates}
            type="number"
            min="0"
            max="9"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RoombaSettings;
