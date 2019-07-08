import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header-container">
        <WelcomeLogo />
        <Navigation />
        <NavIcon />
      </header>
      <WelcomeBanner />
      <h1 className="section-title"> Section Title</h1>
      <SectionContent />
      <ActionButton />
      <Footer />
    </div>
  );
}

class WelcomeLogo extends React.Component {
    render() {
    return (
      <div className="logo" >Welcome Title/Logo</div>
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
      </div>
    );
  }
}

class NavIcon extends React.Component {
  state = {
    showNav: false
  }

  showNav = () => {
    console.log('can you see me?!?!?');
    this.setState({
      showNav: document.getElementById("navigation").style.display = "block"
    });
  }

  render() {
    return (
      <div>
        <i class="fas fa-ellipsis-h" onClick={this.showNav}></i>
      </div>
    );
  }
}

class ExitIcon extends React.Component {
  state = {
    closeNav: true
  }

  
  closeNav = () => {
    console.log('SEE ME NOW?!?!?');
    this.setState({
      closeNav: document.getElementById("navigation").style.display = "none"
    });
  }
  
  
  render() {
    return (
      <div>
        <i className="fas fa-times" onClick={this.closeNav}></i>
      </div>
    );
  }
}

class WelcomeBanner extends React.Component {
  state = {
    title: 'Welcome Message'
  }

  changeBanner = () => {
    this.setState({
      title: 'Have a good day!'
    });
  }
  
  render() {
    return (
      <div className="welcome-banner" onClick={this.changeBanner}>{this.state.title}</div>
    );
  }
}

class SectionContent extends React.Component {  
  render() {
    return (
      <div className ="section-container">
        <SectionBox />
        <SectionBox />
        <SectionBox />
        <SectionBox />
      </div>
    );
  }
}

class SectionBox extends React.Component {
  render() {
    return (
      <div className="col">
        <h3 > Content Box </h3>
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
  state = {
    showContent:false
  }

  showContent = () => {
    console.log('RECIEVED');
    this.setState({
      showContent:true
    });
  }
  
  render() {
    return (
      <div>
        <button type="button" onClick={this.showContent}>Call to Action!</button>
        {this.state.showContent ?
           <SectionContent /> :
           null
        }

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
