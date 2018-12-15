import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

export class App extends Component {

    render(){
        return(
            <React.Fragment>
                <h2>Flashcard Pro</h2>
                <hr />
                <StackList />
                <hr />
                <Link to="stack_form"><h4>Create a New Stack</h4></Link>
            </React.Fragment>
        )
    }
}

export default App;