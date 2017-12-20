import ConfigToolView from './ConfigToolView';
import { updateConfigValues } from '../actions';
import {configValuesReducers} from '../reducers';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'terra-button';




const propTypes = {
  refreshConfigToolView: PropTypes.func.isRequired,
};




class ConfigToolContainer extends React.Component {
   constructor(props){
      super(props);
        console.log("constructor props are" + JSON.stringify(props));
        this.printState= this.printState.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('orionReactComponentRefresh', this.props.refreshConfigToolView);
  //   this.props.refreshConfigToolView();
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('orionReactComponentRefresh', this.props.refreshConfigToolView);
  // }
  printState(){
    console.log("props are:" + JSON.stringify(this.props));

  }

  render() {
    return (
      <div>
        <ConfigToolView configValuesState={this.props.configValuesState} eventListener={this.props.refreshConfigToolView} text={"some value"} />
        <Button text="Ok"  onClick={this.printState}/>
    </div>
    );

  }

}
//mapping the states to props
const mapStateToProps= (state) =>{
  return{
    configValuesState:state.configValuesState,
  }
}

//action Binding
const mapDispatchToProps = (dispatch, ownProps) => {
    // let that_dispatch = dispatch;
    return {
      refreshConfigToolView: (event) => { //eventListener
        dispatch(updateConfigValues(event));
      },
    }
};
//bind reducers
const configReducers= {configValuesReducers:configValuesReducers};

export {configReducers};

//-----
export default connect(mapStateToProps,mapDispatchToProps)(ConfigToolContainer);
