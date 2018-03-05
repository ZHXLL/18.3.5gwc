import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './component/one'
import registerServiceWorker from './registerServiceWorker';
import { Link,Route,HashRouter } from 'react-router-dom';

import { Provider }  from 'react-redux';
import store from './store/stores';


ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
				<div>
					<Link to='/'>商品</Link>
					<Link to={ {pathname:"/abc", hash:"#ahash", query:{foo: "bar", boo:"boz"}, state:{data:"miao"}} }>购物车</Link>
					<Route exact path='/' component={One} />
					<Route exact path='/abc' component={App} />
				</div>
		</HashRouter>
    </Provider>

	, document.getElementById('root'));
registerServiceWorker();
