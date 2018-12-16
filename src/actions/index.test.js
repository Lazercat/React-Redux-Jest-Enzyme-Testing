import * as actions from './index';
import { stack, stacks } from '../data/fixtures';

describe('actions', () => {
	it('creates an action to set the main stack', () => {
		const expected_action = { type: actions.SET_STACK, stack };
		expect(actions.setStack(stack)).toEqual(expected_action);
	});
    
	it('creates an action to add a stack', () => {
		const expected_action = { type: actions.ADD_STACK, stack };
		expect(actions.addStack(stack)).toEqual(expected_action);
	});

	it('creates an action to load stacks', () => {
		const expected_action = { type: actions.LOAD_STACKS, stacks };
		expect(actions.loadStacks(stacks)).toEqual(expected_action);
	});
});