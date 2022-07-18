import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/App.css';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import Clock from './components/Clock';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate;

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

root.render(<Clock />);
