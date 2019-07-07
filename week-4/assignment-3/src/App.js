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
      <div class="logo">Welcome Title/Logo</div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav id = "navigation">
          <ul>
              <i class="fas fa-times"></i>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <i class="fas fa-ellipsis-h"></i>
      </div>
    );
  }
}




class WelcomeBanner extends React.Component {
  render() {
    return (
      <div class="welcome-banner">Welcome Message</div>
    );
  }
}


class SectionContent extends React.Component {
  render() {
    return (
      <div class ="section-container">
        <h1 class="section-title"> Section Title</h1>
        <SectionBox />
      </div>
    );
  }
}

class SectionBox extends React.Component {
  render() {
    return (
      <div class="col">
        <h1 > Content Box 1</h1>
        <h1 > Content Box 2</h1>
        <h1 > Content Box 3</h1>
        <h1 > Content Box 3</h1>
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
