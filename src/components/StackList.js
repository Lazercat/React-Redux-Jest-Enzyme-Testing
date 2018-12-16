import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import stacks from '../data/stacks.json';
import { setStack, loadStacks } from '../actions';


export class StackList extends Component {
	componentDidMount() {
		if(this.props.stacks.length===0) this.props.loadStacks(stacks);
	}

	render(){
		return(
			<React.Fragment>
				{
					this.props.stacks.map(stack=>{
						return(
							<Link 
								to="/stack" 
								key={stack.id} 
								onClick={()=> this.props.setStack(stack)}
							>
								<h4>{stack.title}</h4>
							</Link>
						);
					})
				}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return { stacks: state.stacks };
}

StackList.propTypes = {
	stacks: PropTypes.array,
	loadStacks: PropTypes.func,
	setStack: PropTypes.func
};

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);