import React from 'react';
import './App.css';

class App extends React.Component {
 render() {
    return (
      <div className="App">
        <HeaderContainer />
        <WelcomeBanner />
        <h1 className="section-title"> Section Title</h1>
        <SectionContent />
        <ActionButton />
        <Footer />
      </div>
    );
  }
}

class HeaderContainer extends React.Component {
  state = {
  navOpen: false
  }
 
  toggleMenu = () => {
    console.log("I opened the menu");
    this.setState((prevState) => {
      return {navOpen: !prevState.navOpen};
    })
  }

  closeMenu = () => {
    console.log("I closed the menu");
    this.setState({navOpen: false})
  }

  render() {
    let navigation;
    if (this.state.navOpen) {
      navigation = <Navigation closeMenu={this.closeMenu}/>
    }
    return (
      <header className="Header-container">
        <WelcomeLogo />
       {navigation}
        <NavIcon toggleMenu={this.toggleMenu}/>
      </header>
    );
  }
}

class WelcomeLogo extends React.Component {
    render() {
    return (
      <div className="logo" >Welcome Title/Logo</div>
    );
  }
}

class Navigation extends React.Component {
  state = {
    // navOpen: false
  }

  // closeMenu = () => {
  //   console.log("I closed the menu");
  //   this.setState((prevState) => {
  //     return {navOpen: !prevState.navOpen};
  //   } );
  // }

  render() {
    // let exitIcon;
    // if (this.state.navClose) {
    //   exitIcon = <ExitIcon closeMenu={this.closeMenu}/>
    // }
      return (
        <div>
          <nav id = "navigation" onClick={this.props.toggleMenu}>
          <ExitIcon />
            <ul>
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
  render() {
    return (
      <div>
        <i class="fas fa-ellipsis-h" onClick={this.props.toggleMenu}></i>
      </div>
    );
  }
}

class ExitIcon extends React.Component {
  render() {
    return (
      <div>
        <i className="fas fa-times" onClick={this.props.closeMenu}></i>
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
