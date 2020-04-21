import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Body />

    </React.StrictMode>
  );
}

function Header() {
  return (<div id="header">Welcome to React Project :) Clock : <Clock /></div>);
}

function Body() {
  return (<React.StrictMode><SaveButton /><TodoList /></React.StrictMode >);
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log('constructor');
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillUnmount');
  }

  tick() {
    this.setState({ date: new Date });
  }

  render() {
    return (<span>{this.state.date.toLocaleTimeString()}</span>);
  }
}

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    alert('tiklandi');
  }

  render() {
    return (
      <div>      
        <input type="text"></input>
        <button onClick={this.handleClick}>Save</button>
        <ActionLink/>
      </div>
    );
  }
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="https://www.google.com.tr" onClick={handleClick}>
      a href sayfa açma engellemesi
    </a>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameList: ["samed", "rıfkı"] };
  } 

  render() {
    return (
      <ul>
        {this.state.nameList.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }

}








export default App;
