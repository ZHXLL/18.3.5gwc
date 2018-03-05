import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {  
    const {payload,newprice}  = this.props
    // console.log(this);
    // console.log(this.props.location.state.data);
    return (
      <div className="App">
        购物车

        <ul>
          {
            payload.map((item,index)=>{
              return (
                <li key={index}> {item.name} x {item.num}   单价:{item.price}</li>
              )
            })
          }
        </ul>
        <div>一共 { newprice } 元</div>
      </div>
    );
  }
}


function mapStateToProps(state){
  // console.log(state.addReducer)
  return {
    payload : state.addReducer.payload,
    newprice:state.addReducer.newprice,
  }
}
function mapDispatchToProps(dispatch){
  return {
    addducers:(res)=>dispatch({type:"ADD",payload:res}),
    // rereducer:(res)=>dispatch({type:"ADD",text:res})
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


