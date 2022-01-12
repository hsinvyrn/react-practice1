// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Table from './Table';
import Form from './Form';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {
  state = {
    mydata: [],
  }

  removeData = (index) => {
    const {mydata} = this.state
  
    this.setState({
      mydata: mydata.filter((d, i) => {
        return i !== index
      }),
    })
  }
  
  handleSubmit = (d) => {
    this.setState({mydata: [...this.state.mydata, d]})
  }

  render() {
    // const theData = this.state.mydata
    // use ES6 property shorthand
    const {mydata} = this.state

    return (
      <div className="container">
        <h1>Hola! Buenas noches</h1>
        <Table sdata={mydata} removeData={this.removeData} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
