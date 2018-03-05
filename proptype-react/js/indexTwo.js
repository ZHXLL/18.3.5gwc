class Myzouhao extends React.Component{ 
	constructor(props){
		super(props);
		console.log(React)
		this.state={
			links:false
		};
	};
	handleClick(){
//		this.refs.myTextInput.focus();
//		console.log('this.refs.myTextInput.focus()')
//		console.log(1)
		console.log(this)
	};
	txtClick(){
//		this.state.links=!this.state.links;
//		console.log(this.state.links);
		this.setState({links: !this.state.links});
	}
	render(){
		var txt= this.state.links?'我是对的':'我是错的';
	    return (
	      <div>
	        <input type="text" ref="myTextInput" />
	        <input type="button" value="点击" onClick={()=>this.handleClick()} />
	        
			<p>{txt}</p>
			<input type="button" value="点击切换" onClick={()=>this.txtClick()} />
	      </div>
	    );
	}
}

ReactDOM.render(
	<Myzouhao/>,
	document.getElementById('red')
)
