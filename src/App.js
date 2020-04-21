import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Body />
      <LoggingButton />
    </React.StrictMode>
  );
}

function Header() {
  return (<div id="header">
    Welcome to React Project :)
    Clock :
    <Clock />
  </div>);
}

function Body() {
  return (<React.StrictMode>
    <SaveButton />
  </React.StrictMode >);
}

class Clock extends React.Component {
  state = { date: new Date() };

  /*constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log('constructor');
  }*/

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date });
  }

  render() {
    return (<span>{this.state.date.toLocaleTimeString()}</span>);
  }
  
}

class SaveButton extends React.Component {
  state = { text: "", nameList: [] };

  handleClick = () => {
    console.log(this.state);
    this.setState(state => ({
      nameList: [...state.nameList, state.text],
      text:""
    }))
  }

  onChange = (e) => {
    console.log(e.target.value);
    const text = e.target;
    this.setState({
      text: text.value
    });
  }

  render() {
    console.log(this.state.nameList);
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.state.text}></input>
        <button onClick={this.handleClick}>Save</button>
        <TodoList nameList={this.state.nameList} />
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

const TodoList = (props) => {
  console.log(props);

  function listli (nameList) {
    return nameList.map(list => 
      <li>{list}</li>
    );
  }

  return (
    <ul>
      {listli(props.nameList)}
    </ul>
  );
}




class LoggingButton extends React.Component {

  handleClick() {
    console.log('This is:', this);
  }

  render() {
    // Bu yazım şekli, `this`'in handleClick içerisinde bağlanmasını sağlar.
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}








export default App;
