import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const hours = this.state.time.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
      greeting = '! בוקר טוב';
    } else if (hours >= 12 && hours < 18) {
      greeting = '! אחר הצהריים טובים';
    } else if (hours >= 18 && hours < 22) {
      greeting = '! ערב טוב';
    } else {
      greeting = '! לילה טוב';
    }

    return (
      <div>
        <h1>{greeting}</h1>
      </div>
    );
  }
}

export default Greeting;
