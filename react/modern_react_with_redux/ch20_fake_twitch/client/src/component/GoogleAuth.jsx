import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const clientId = '734000839622-9uvki6rpt27r8o0nr8vv2gtcjqgq64e8.apps.googleusercontent.com';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId,
          scope: 'email',
          plugin_name: 'EnzoTest',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSingInClick = () => {
    this.auth.signIn();
  };

  onSingOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSingOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui red google button' onClick={this.onSingInClick}>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
