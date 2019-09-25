import React, { Component } from "react";

class Counter extends Component {
  // Put style attribute into JSX
  // style={{ fontSize: 30 }}

  //Returns "Please create a new tag" if the first expression is true
  // {this.state.tags.length === 0 && "Please create a new tag!"}

  render() {
    return (
      <div>
        <th scope="row">
          <td>
            <button className={this.renderButtonColors2()}>
              {this.formatCount2()}
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-outline-primary"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-outline-primary"
            >
              -
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.onDelete(this.props.counter)}
              className="btn btn-outline-primary"
            >
              Delete
            </button>
          </td>
        </th>
      </div>
    );
  }

  //In JSX we can not have if and else because it is not a templating engine like Angular:
  //Solution outsourcing the if and else to a helper method.

  renderButtonColors() {
    let classes = "btn btn-outline-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  renderButtonColors2() {
    let classes = "btn btn-outline-";
    if (this.props.counter.value === 0) {
      classes += "warning";
    } else {
      classes += "primary";
    }
    return classes;
  }

  formatCount() {
    //Object destructuring
    const { value } = this.props.counter;
    let count = "";
    count = value === 0 ? "Zero" : value;
    return count;
  }

  formatCount2() {
    //Object destructuring
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0)
  //     return <p>There are no tags to display</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}> {tag} </li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
