import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {checked: false};
    this.validateForm = this.validateForm.bind(this);
    this.triggerCheckBox = this.triggerCheckBox.bind(this);
    this.state={
      selectAll:false,
      checkbox1:false,
      checkbox2:false,
      checkbox3:false,
      rowOneValues:{
              name:'',
              emailAddress:'',
              phone:'',
              company:'',
      },
    };

  };

  triggerCheckBox(event){
  if(event.target.className==='Selectallcheckbox'){
   var select=event.target;
     if(select.checked===false){


      this.setState({
        selectAll:false,
        checkbox1:false,
        checkbox2:false,
        checkbox3: false,
      });
     }
     else {
       this.setState({
         selectAll:true,
         checkbox1:true,
         checkbox2:true,
         checkbox3: true,
     });
      }
    }
    if(event.target.className==='checkbox'){
      var check=event.target;
      if(check.checked===false){
        this.setState({
          selectAll: false,
          [check.name] : false,
        });

      }
    }
  }

  updateValues(eve){
      var elem = eve.target;
     if(eve.target.name==='name'){
       this.setState((prevstate)=>{
         let newstate = Object.assign({},prevstate);
         newstate.rowOneValues[elem.name]=elem.value;
         return newstate;
       })
     }else if (eve.target.name==='emailAddress') {
       this.setState((prevstate)=>{
         let newstate = Object.assign({},prevstate);
         newstate.rowOneValues[elem.name]=elem.value;
         return newstate;
       })
     }else if (eve.target.name==='phone') {
       this.setState((prevstate)=>{
         let newstate = Object.assign({},prevstate);
         newstate.rowOneValues[elem.name]=elem.value;
         return newstate;
       })
     }else if (eve.target.name==='company') {
       this.setState((prevstate)=>{
         let newstate = Object.assign({},prevstate);
         newstate.rowOneValues[elem.name]=elem.value;
         return newstate;
       })
     }
  }

  validateForm(){
    var letters = /^[A-Za-z]+$/;
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    var message='Invalid '
    if(!this.state.rowOneValues['name'].match(letters)){
      message +=' name';
      alert(message);
    }
    else if(!this.state.rowOneValues['emailAddress'].match(mailformat)){
      message +=' emailAddress ';
      alert(message);
    }
    else if(!this.state.rowOneValues['phone'].match(phoneno)){
      message +=' phone ';
      alert(message);
    }
    message = 'Invalid';
  }




  render() {
    console.log("state: "+JSON.stringify(this.state));
    return (
      <div className="App">
        <table className="Select-all"  onChange={(event)=>(this.triggerCheckBox(event))}>
          <tbody>
          <tr>
           <td><input type="checkbox" className="Selectallcheckbox" name='selectAll' checked={this.state.selectAll} /> </td>
           <td><th className="Select-all-header"> Select All</th></td>
            <th className="Name-header">Name</th>
            <th className="Email-header"> Email</th>
            <th className="phone-header"> Phone Number</th>
            <th className="Address-header"> Address</th>
          </tr>
          <tr onChange={(eve)=> (this.updateValues(eve))}>
            <td colSpan='2'>
          <input type="checkbox" className="checkbox" name='checkbox1' checked={this.state.checkbox1} />  </td>
            <td> <input type="text" className="uname" name="name" value={this.state.rowOneValues.name}/> </td>
            <td> <input className="emailAddress" type="email" name="emailAddress" value={this.state.rowOneValues.emailAddress}/></td>
            <td><input className="pnumber" type="number" name='phone' value={this.state.rowOneValues.phone} /></td>
            <td><input type="text" className="cname" name="company" value={this.state.rowOneValues.company}/> </td>
          </tr>

          <tr>
            <td colSpan='2'>
          <input type="checkbox" className="checkbox" name='checkbox2'checked={this.state.checkbox2}/>
            </td>
            <td>Sheena</td>
            <td>Sheenasharma93@gmail.com</td>
            <td>229392883839</td>
            <td>cerner health care</td>
          </tr>

          <tr>
            <td colSpan='2'>
          <input type="checkbox" className="checkbox" name='checkbox3' checked={this.state.checkbox3}/>
            </td>
            <td>Sheena</td>
            <td>Sheenasharma93@gmail.com</td>
            <td>229392883839</td>
            <td>cerner health care</td>
          </tr>

        </tbody>
        </table>
          <input type="button" className="validate" onClick={this.validateForm}value="Validate"/>
      </div>
    );
  }
}

export default App;
