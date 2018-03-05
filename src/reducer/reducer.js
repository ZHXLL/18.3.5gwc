import { SHIFT,ADD } from "../action/action";
import { combineReducers } from 'redux'
const initialState={
	payload:[],
	jilu:[],
	newprice:0
}

//计算总价格的函数
function newjg(ob){	
	ob.newprice=0;
	ob.payload.forEach((v)=>{
		return ob.newprice += v.price*v.num;
	})
	return ob.newprice
}

const addReducer=(state = initialState , action) => {
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case ADD :
			
			if( state.jilu.indexOf(action.payload.id) == -1){
				state.jilu.push(action.payload.id);	
				state.payload.push(
				   {
				   	id:action.payload.id,
				   	num:1,
				   	price:action.payload.price,
				   	name:action.payload.name
				   }
				);
				state.newprice = newjg(state)
			}else{
				let ind = state.jilu.indexOf(action.payload.id);
				state.payload[ind].num+=1;
				state.newprice = newjg(state)
			}
			return Object.assign({}, state, { payload:state.payload , newprice:state.newprice });
		case SHIFT :
			
			return Object.assign({}, state, { payload:state.payload , newprice:state.newprce });
		default:
			return state;
	}
}



const reducer = combineReducers({ 
    addReducer
});

export default reducer;
