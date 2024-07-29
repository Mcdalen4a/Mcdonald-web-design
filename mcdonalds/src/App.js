import React from 'react';
import './style.css'; 
import MyNavbar from './Navbar.js';
import BodyContent from './Body';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar /> 
        <BodyContent />
      </div>
    );
  }
}

export default App;