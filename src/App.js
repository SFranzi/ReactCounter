import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  //Lifecycle Hook

  //constructor(props) {
  //super(props);
  //console.log("App - Constructor", this.props);
  //this.state = this.props.something;
  //}

  //Lifecycle Hook

  //componentDidMount() {
  //console.log("App - Mounted");
  // Ajax Call: Get data from server
  //this.setState({ movies })
  //}

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //Arrow functions inherit the this keyword
  handleReset = () => {
    const counters = this.state.counters.slice();
    counters.map(counter => {
      counter.value = 0;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = this.state.counters.slice();
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          uniqueItems={this.state.counters.filter(c => c.value !== 0).length}
        />
        <main className="container mt-5">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
