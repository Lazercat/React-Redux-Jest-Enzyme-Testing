import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackForm } from './StackForm';
// import { stack } from '../data/fixtures';
// const props = { stack };

configure({ adapter: new Adapter() });

const change_title = 'change title';
const change_prompt = 'change prompt';
const change_answer = 'change answer';

describe( 'Stack', () => {
	const stackForm = shallow(<StackForm />); 

	it('renders the form title', () => {
		expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
	});

	it('renders a link home', () => {
		expect(stackForm.find('h4').at(0).text()).toEqual('Home');
	});

	it('renders a form component', () => {
		expect(stackForm.find('Form').exists()).toBe(true);
	});

	it('renders a button to add a new card', () => {
		expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
	});

	it('renders a button to submit the form', () => {
		expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add The Stack');
	});

	describe('and updating the title', () => {
		beforeEach( ()=> {
			stackForm.find('FormControl').simulate('change', { target: { value: change_title}});
		}); 

		it('updates the title in state', () => {
			expect(stackForm.state().title).toEqual(change_title);
		});
	});

	describe('when adding a new card', () => {

		beforeEach( ()=> {
			stackForm.find('Button').at(0).simulate('click');
		}); 

		afterEach( () => {
			stackForm.setState({ cards: [] });
		});

		it('adds a new cardto the state', () => {
			expect(stackForm.state().cards.length).toEqual(1);
		});

		it('renders the prompt section', () => {
			expect(stackForm.find('ControlLabel').at(1).props().children).toEqual('Prompt:');
		});

		it('renders the answer section', () => {
			expect(stackForm.find('ControlLabel').at(2).props().children).toEqual('Answer:');
		});

		describe('and updating the card prompt', () => {
			beforeEach(() => {
				stackForm.find('FormControl').at(1)
					.simulate('change', { target: { value: change_prompt}});
			});
	
			it('updates the prompt in the state', () => {
				expect(stackForm.state().cards[0].prompt).toEqual(change_prompt);
			});
		});

		describe('and updating the card prompt', () => {
			beforeEach(() => {
				stackForm.find('FormControl').at(1)
					.simulate('change', { target: { value: change_prompt}});
			});
	
			it('updates the prompt in the state', () => {
				expect(stackForm.state().cards[0].prompt).toEqual(change_prompt);
			});
		});

		describe('and updating the card answer', () => {
			beforeEach(() => {
				stackForm.find('FormControl').at(2)
					.simulate('change', { target: { value: change_answer}});
			});
	
			it('updates the answer in the state', () => {
				expect(stackForm.state().cards[0].answer).toEqual(change_answer);
			});
		});
		
	});
});



