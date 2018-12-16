import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';

export const Stack = ({ stack: { title, cards }}) => {
	return(
		<React.Fragment>
			<Link className="link-home" to="/">
				<h4>Home</h4>
			</Link>
			<h3>{title}</h3>
			<br />
			{cards.map( card => {
				return (
					<Card 
						key={card.id}
						card={card}
					>
						{card.prompt}
					</Card>
				);
			})}
		</React.Fragment>
	);
};

function mapStateToProps(state){ 
	return { stack: state.stack };
}

Stack.propTypes = {
	stack: PropTypes.object,
	title: PropTypes.string,
	cards: PropTypes.array,
};


export default connect(mapStateToProps, null)(Stack);