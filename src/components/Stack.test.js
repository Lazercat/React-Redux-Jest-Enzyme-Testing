import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Stack } from './Stack';
import { stack } from '../data/fixtures';
const props = { stack };

configure({ adapter: new Adapter() });

describe( 'Stack', () => {
	const stack = shallow(<Stack {...props} />); 

	it('renders the title', () => {
		expect(stack.find('h3').text()).toEqual(props.stack.title);
	});
    
	it('renders the Link home', () => {
		expect(stack.find('Link h4').text()).toEqual('Home');
	});
    
	it('renders the correct number of cards', () => {
		expect(stack.find('Card').length).toEqual(props.stack.cards.length);
	});

});