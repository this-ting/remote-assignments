import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <WelcomeLogo />
        <Navigation />
      </header>
      <WelcomeBanner />
      <SectionContent />
      <ActionButton />
      <Footer />
    </div>
  );
}

class WelcomeLogo extends React.Component {
  render() {
    return (
      <div className="logo">Welcome Title/Logo</div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav id = "navigation">
          <ul>
              <ExitIcon />
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <NavIcon />
      </div>
    );
  }
}

class NavIcon extends React.Component {
  render() {
    return (
      <div>
        <i class="fas fa-ellipsis-h"></i>
      </div>
    );
  }
}

class ExitIcon extends React.Component {
  render() {
    return (
      <div>
        <i className="fas fa-times"></i>
      </div>
    );
  }
}

class WelcomeBanner extends React.Component {
  render() {
    return (
      <div className="welcome-banner">Welcome Message</div>
    );
  }
}

class SectionContent extends React.Component {
  render() {
    return (
      <div className ="section-container">
        <h1 className="section-title"> Section Title</h1>
        <SectionBox />
      </div>
    );
  }
}

class SectionBox extends React.Component {
  render() {
    return (
      <div className="col">
        <h3 > Content Box 1</h3>
        <InnerBox />
        <h3>  Content Box 2</h3>
        <InnerBox />
        <h3>  Content Box 3</h3>
        <InnerBox />
        <h3>  Content Box 3</h3>
        <InnerBox />      
      </div>
    );
  }
}

class InnerBox extends React.Component {
  render() {
    return (
      <div >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
    );
  }
}

class ActionButton extends React.Component {
  render() {
    return (
      <div>
        <button type="button" >Call to Action!</button>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer> &copy; 2019 Ting Chang</footer>
    );
  }
}

export default App;
