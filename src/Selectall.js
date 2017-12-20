import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {checked: false};
    this.handleClick = this.handleClick.bind(this);
    };


  handleClick = () => {
    //this.setState((prevState)=>({checked:true})
    this.setState((prevState)=>({checked:!prevState.checked})
   );
  }

  render() {
    return (
      <div className="App">
        <table className="Select-all">
          <tr>
           <td><input type="checkbox" id="Selectallcheckbox"  onClick={this.handleClick}/> </td>
           <td><th className="Select-all-header"> Select All</th></td>
            <th className="Name-header">Name</th>
            <th className="Email-header"> Email</th>
            <th className="phone-header"> Phone Number</th>
            <th className="Address-header"> Address</th>
          </tr>
          <tr>
            <td colspan='2'>
          <input type="checkbox" className="checkbox" checked={this.state.checked}/>  </td>
            <td>Sheena</td>
            <td>Sheenasharma93@gmail.com</td>
            <td>229392883839</td>
            <td>cerner health care</td>
          </tr>

          <tr>
            <td colspan='2'>
          <input type="checkbox" className="checkbox" checked={this.state.checked}/>
            </td>
            <td>Sheena</td>
            <td>Sheenasharma93@gmail.com</td>
            <td>229392883839</td>
            <td>cerner health care</td>
          </tr>

          <tr>
            <td colspan='2'>
          <input type="checkbox" className="checkbox" checked={this.state.checked}/>
            </td>
            <td>Sheena</td>
            <td>Sheenasharma93@gmail.com</td>
            <td>229392883839</td>
            <td>cerner health care</td>
          </tr>

          <tr>
            <td colspan='2'>
          <input type="checkbox" id="checkbox" checked={this.state.checked}/>
            </td>
            <td>Sheena</td>
            <td>Sheenasharma93@gmail.com</td>
            <td>229392883839</td>
            <td>cerner health care</td>
          </tr>
        </table>
          <input type="button" className="validate" value="Validate"/>
      </div>
    );
  }
}

export default App;
