import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div>
          <a className="navbar-brand" href="#">
            <b>My Shopping Cart</b>
          </a>
          Unique Items:
          <div className="badge badge-pill badge-primary text-left ml-2">
            {this.props.uniqueItems}
          </div>
        </div>
      </nav>
    );
  }
}

//Version 2
//Stateless Functional Component

// const Navbar = props => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <div>
//         <a className="navbar-brand" href="#">
//           <b>My Shopping Cart</b>
//         </a>
//         Unique Items:
//         <div className="badge badge-pill badge-primary text-left ml-2">
//           {props.uniqueItems}
//         </div>
//       </div>
//     </nav>
//   );
// };

//Version 3 with Object Destructuring
// const Navbar = ({uniqueItems}) => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <div>
//         <a className="navbar-brand" href="#">
//           <b>My Shopping Cart</b>
//         </a>
//         Unique Items:
//         <div className="badge badge-pill badge-primary text-left ml-2">
//           {uniqueItems}
//         </div>
//       </div>
//     </nav>
//   );
// };
export default Navbar;
