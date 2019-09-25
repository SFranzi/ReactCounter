import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //Lifecycle Hook

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Component Updated");
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //if (prevProps.counter.value !== this.props.counter.value) {
  //Ajax call to get new data from the server
  //}
  //}

  //Lifecycle Hook

  // componentWillUnmount() {
  //   console.log("Component Unmounted");
  // }

  render() {
    return (
      <React.Fragment>
        <table class="table table-borderless">
          <tbody>
            <tr>
              {this.props.counters.map(counter => (
                <Counter
                  counter={counter}
                  onIncrement={this.props.onIncrement}
                  onDecrement={this.props.onDecrement}
                  onDelete={this.props.onDelete}
                />
              ))}
            </tr>
          </tbody>
        </table>

        <button
          onClick={this.props.onReset}
          cLass="btn btn-primary btn-sm mb-4 ml-4"
        >
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default Counters;
