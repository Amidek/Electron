import React from 'react';
import { render } from 'react-dom';

const state = {
  status: {
    default: 'off',
    work: 'work',
    rest: 'rest',
  },
  time: 1200,
  timer: null,
}

const formatTime = () => {
  format = () => {
    let minutes = Math.floor(state.time / 60);
    let seconds = state.time - (minutes * 60);
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
  }
  this.setState ({
    time: format(state.timer),
  });
};

const step = () => {};

const startTimer = () => {
  time = state.time;
  this.setState({
    timer: setInterval(this.step, 1000),
  });
  state.status === 'work';
};

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">{state.timer}</div>}
        {(status === 'off') && <button className="btn" onClick={startTimer}>Start</button>}
        {(status !== 'off') && <button className="btn" onClick={this.stopTimer}>Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
