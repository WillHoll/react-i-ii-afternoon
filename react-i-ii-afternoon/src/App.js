import React, {Component} from 'react';
import data from './component/data';
import './App.css';
import DisplayMaker from './component/DisplayMaker';


class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: data,
      displayedObj: data[0],
    }
  }

  prevInput()  {
    let array = this.state.arr
    if (this.state.displayedObj.id === 1) {
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === this.state.displayedObj.id - 1)
        return this.setState({displayedObj: array[i]})
      }
    }
  }

  nextInput() {
    let array = this.state.arr
    if (this.state.displayedObj.id === array.length) {
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === this.state.displayedObj.id + 1) {
          return this.setState({displayedObj: array[i]})
        }
      }
    }
  }



  render() {
  return (
      <div className="App">
        <header><h2>Home</h2></header>
        <main>
          <div className="content">
            <div className="inner-header">
              <h1>{this.state.displayedObj.id}/{this.state.arr.length}</h1>
            </div>
              <div className="main-content">
                <DisplayMaker object={this.state.displayedObj}/>
              </div>
              <div className="inner-footer">
                <button onClick={() => this.prevInput()}>&lt; Previous</button>
                <div className="button-container">
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>New</button>
                </div>
                <button onClick={() => this.nextInput()}>Next &gt;</button>
              </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
