import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; //<-- Redux create store
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; //<-- provider provides store to child components
import rootReducer from './reducers'; //<-- pull in root reducer
import App from './components/App'; //<-- react router
import Stack from './components/Stack';//<-- react router
import StackForm from './components/StackForm';
import { setStack } from './actions'; //<-- default action
import './index.css';

const store = createStore(rootReducer);
// store.subscribe( ()=> console.log('store', store.getState())); //<-- event watch logger of the store
store.dispatch( setStack({ id: 0, title: 'example', cards: [] })); //<-- dispatching action to update store. 

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} /> 
				<Route path="/stack" component={Stack} />
				<Route path='/stack_form' component={StackForm}/>
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root') 
);
