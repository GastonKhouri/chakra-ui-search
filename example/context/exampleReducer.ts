import { ExampleState } from './';
import { Example } from '../interfaces/interfaces';

type ExampleAction =
	| { type: '[Example] Clean Query'; }
	| { type: '[Example] Start Search', payload: string; }
	| { type: '[Example] Finish Search', payload: Example[]; }
	| { type: '[Example] Update Selection', payload: string; };

export const exampleReducer = ( state: ExampleState, action: ExampleAction ): ExampleState => {

	switch ( action.type ) {
		case '[Example] Clean Query':
			return {
				...state,
				isLoading: false,
				value: '',
				results: [],
			};

		case '[Example] Start Search':
			return {
				...state,
				isLoading: true,
				value: action.payload,
			};

		case '[Example] Finish Search':
			return {
				...state,
				isLoading: false,
				results: action.payload
			};

		case '[Example] Update Selection':
			return {
				...state,
				value: action.payload,
			};

		default:
			return state;
	}

};