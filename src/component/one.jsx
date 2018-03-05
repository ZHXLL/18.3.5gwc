import React, { Component } from 'react';
import { connect } from 'react-redux';
import './one.css'

class One extends Component {
  constructor(props){
    super(props)
  }
  
  render() {    
    var sp=[
      {id:'id_1',price:100,name:'鼠标'},
      {id:'id_2',price:200,name:'键盘'},
      {id:'id_3',price:600,name:'显示器'},
      {id:'id_4',price:300,name:'路由器'}
    ]   
    var {addducers,payload} = this.props;
    return (
      <div className='spy'>
        我是内容区域:
        <ul>
        {
          sp.map((item,index)=>{
            return (
              <li key={index}>  
                <p>{item.name}</p>
                <p> 价格：{item.price}</p>
                <div className='spybtn'>
                    <button onClick={ ()=>addducers({id:item.id,price:item.price,name:item.name}) }>+</button>
                </div>
              </li>
              )
          })
        }
        </ul>
        <p></p>
        <p>一共  {this.props.newprice} 元 </p>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log(state.addReducer);
   // console.log(state.addReducer.newprice)
  // console.log(state.addReducer.jilu)
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
)(One);





