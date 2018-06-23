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
          <div className="form-group">
            <label htmlFor="">X:</label>
            <input onChange={setRobotXCoordinates} type="number" />
          </div>
          <div className="form-group">
            <label htmlFor="">Y:</label>
            <input onChange={setRobotYCoordinates} type="number" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RoombaSettings;
