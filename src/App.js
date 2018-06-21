import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Room from './components/room';
import RoomSettings from './components/room-settings';
import RoombaSettings from './components/roomba-settings';
import './App.scss';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      roomDimensions: {
        x: 5,
        y: 5,
      },
      robotCoordinates: {
        x: 0,
        y: 0,
      },
      // dirtCoordinates: {
      //   x: -1,
      //   y: -1,
      //   opacity: 0,
      // },
      dirtPatches: {},
      dirtCount: 0,
    };
    this.blockSize = 60;
  }

  dirtXcoordinate = React.createRef();
  dirtYcoordinate = React.createRef();

  setRoomWidthDimensions = e => {
    this.setState({
      roomDimensions: {
        x: parseInt(e.target.value, 0),
        y: this.state.roomDimensions.y,
      },
      robotCoordinates: {
        x: 0,
        y: 0,
      },
    });
  };

  setRoomHeightDimensions = e => {
    this.setState({
      roomDimensions: {
        y: parseInt(e.target.value, 0),
        x: this.state.roomDimensions.x,
      },
      robotCoordinates: {
        x: 0,
        y: 0,
      },
    });
  };

  setRobotXCoordinates = e => {
    this.setState({
      robotCoordinates: {
        x: parseInt(e.target.value, 0),
        y: this.state.robotCoordinates.y,
      },
    });
  };

  setRobotYCoordinates = e => {
    this.setState({
      robotCoordinates: {
        y: parseInt(e.target.value, 0),
        x: this.state.robotCoordinates.x,
      },
    });
  };

  renderBlock = (roomDimensionsWidth, roomDimensionsHeight) => {
    const numberOfBlocks =
      this.state.roomDimensions.x * this.state.roomDimensions.y;
    let blocks = [];
    for (let i = 0; i < numberOfBlocks; i++) {
      blocks.push(
        <div
          style={{
            width: this.blockSize,
            height: this.blockSize,
          }}
          key={i}
          className="blocks"
        />,
      );
    }
    return blocks;
  };

  addDirtPatchForm = e => {
    e.preventDefault();

    const dirtPatches = { ...this.state.dirtPatches };
    const dirt = {
      x: this.dirtXcoordinate.current.value,
      y: this.dirtYcoordinate.current.value,
    };

    dirtPatches[`dirt${Date.now()}`] = dirt;
    this.setState({
      dirtPatches,
    });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp.bind(this));
  }

  handleKeyUp = e => {
    if (e.keyCode === 38 || e.keyCode === 87) {
      this.setState({
        robotCoordinates: {
          y: this.state.robotCoordinates.y + 1,
          x: this.state.robotCoordinates.x,
        },
      });
      if (this.state.robotCoordinates.y === this.state.roomDimensions.y) {
        this.setState({
          robotCoordinates: {
            y: this.state.roomDimensions.y - 1,
            x: this.state.robotCoordinates.x,
          },
        });
      }
    } else if (e.keyCode === 40 || e.keyCode === 83) {
      this.setState({
        robotCoordinates: {
          y: this.state.robotCoordinates.y - 1,
          x: this.state.robotCoordinates.x,
        },
      });
      if (this.state.robotCoordinates.y < 0) {
        this.setState({
          robotCoordinates: {
            y: 0,
            x: this.state.robotCoordinates.x,
          },
        });
      }
    } else if (e.keyCode === 37 || e.keyCode === 65) {
      this.setState({
        robotCoordinates: {
          x: this.state.robotCoordinates.x - 1,
          y: this.state.robotCoordinates.y,
        },
      });
      if (this.state.robotCoordinates.x < 0) {
        this.setState({
          robotCoordinates: {
            x: 0,
            y: this.state.robotCoordinates.y,
          },
        });
      }
    } else if (e.keyCode === 39 || e.keyCode === 68) {
      this.setState({
        robotCoordinates: {
          x: this.state.robotCoordinates.x + 1,
          y: this.state.robotCoordinates.y,
        },
      });
      if (this.state.robotCoordinates.x === this.state.roomDimensions.x) {
        this.setState({
          robotCoordinates: {
            y: this.state.robotCoordinates.y,
            x: this.state.roomDimensions.x - 1,
          },
        });
      }
    }
  };

  render() {
    const roomDimensionsWidth = this.state.roomDimensions.x;
    const roomDimensionsHeight = this.state.roomDimensions.y;
    const robotYCoordinates = this.state.robotCoordinates.y;
    const robotXCoordinates = this.state.robotCoordinates.x;
    // const dirtXCoordinates = this.state.dirtCoordinates.x;
    // const dirtYCoordinates = this.state.dirtCoordinates.y;

    // this.createDirt();

    return (
      <div className="container">
        <div className="settings">
          <RoomSettings
            roomDimensionsWidth={this.state.roomDimensions.x * this.blockSize}
            roomDimensionsHeight={this.state.roomDimensions.y * this.blockSize}
            setRoomWidthDimensions={this.setRoomWidthDimensions}
            setRoomHeightDimensions={this.setRoomHeightDimensions}
          />
          <hr />
          <RoombaSettings
            robotYCoordinates={robotYCoordinates * this.blockSize}
            robotXCoordinates={robotXCoordinates * this.blockSize}
            setRobotXCoordinates={this.setRobotXCoordinates}
            setRobotYCoordinates={this.setRobotYCoordinates}
            blockSize={this.blockSize}
          />
          <hr />
          <p>Add Dirt</p>
          <form style={{ opacity: this.state.opacity }} action="">
            <p>Patch</p>
            <div>
              <label htmlFor="">X coordinates</label>
              <input ref={this.dirtXcoordinate} type="number" />
            </div>
            <div>
              <label htmlFor="">Y coordinates</label>
              <input ref={this.dirtYcoordinate} type="number" />
            </div>
            <button onClick={this.addDirtPatchForm} type="submit">
              Add Dirt Patch
            </button>
          </form>
        </div>
        <Room
          roomDimensionsWidth={roomDimensionsWidth * this.blockSize}
          roomDimensionsHeight={roomDimensionsHeight * this.blockSize}
          dirtPatches={this.state.dirtPatches}
          // dirtXCoordinates={dirtXCoordinates}
          // dirtYCoordinates={dirtYCoordinates}
          // dirtOpacity={this.state.dirtCoordinates.opacity}
          robotYCoordinates={robotYCoordinates}
          robotXCoordinates={robotXCoordinates}
          blockSize={this.blockSize}
          renderBlock={this.renderBlock(
            this.state.roomDimensions.x,
            this.state.roomDimensions.y,
          )}
        />
      </div>
    );
  }
}

export default App;
