var hehe=['我是第一个','我是第二个','我是第三个']
var Header = React.createClass({
	getDefaultProps:function(){
		return {
			name:'我叫邹豪'
		}
	},
	componentDidMount(){
		//真实已经挂在上面的
	},
	componentWillUnmount(){
        //整个生命周期以及完成可以将组件进行卸载
	},
	clickHaert(){
		console.log(this.props.fusx)
		console.log(this)
	},
	propTypes:{
		fusx:React.PropTypes.object
	},
	render(){
		const title ='我是logo2号';
		const arr=['我是第一个','我是第二个','我是第三个']
		var myStyle={
			bigbox:{
				width:'100%',
				display: 'flex',
    			justifyContent: 'space-around',
				height:'100px',
				backgroundColor:'#abcdef'
			},
			div:{
				width:200,
				height:'100%',
				backgroundColor:'red'
			}
		}
		return(  
			//rentrn 单标签的时候，直接return DOM结构，如果这个单标签内有子元素，就要return一个小括号，小括号内部在写结构。
			<div style={myStyle.bigbox} >
				<div className="divstyle" onClick={this.clickHaert}> 
					我是logo
					{this.props.fusx}
				</div>
				<div className="divstyle">
					<Btn/>
					<Zouhao/>
				</div>
				<div className="divstyle">
					我是用户名
					{this.props.name}
				</div>
			</div>
		)
	},
});
class Zouhao extends React.Component{
	constructor(props){
		super(props);
//		console.log(this)
	};
	clickZouhao(){
//		console.log(this);
	};
	render(){
		const Titil= '打游戏'
		return(
			<div className='Btnbox'>
				<button onClick={this.clickZouhao}>{Titil}</button>
			</div>
		)
	}
}


let Btn = React.createClass({
	render(){
		let lww='罗文文';
		return(
			<div className='Btnbox'>
				<button className='btn'>{lww}</button>
			</div>
		)
	}
})

ReactDOM.render(
//	<Header/>,
	<div>
		{hehe.map((names,index)=>{
			return <h1 key={index}>{names}  {index}</h1>
		})}
		<Header fusx='666666666'></Header>
	</div>,
	
	document.getElementById('root')
)
