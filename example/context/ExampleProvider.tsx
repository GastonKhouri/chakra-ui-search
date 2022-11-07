import React, { FC, useReducer } from 'react';

import { ExampleContext, exampleReducer } from './';
import { Example } from '../interfaces/interfaces';
import { exampleData } from '../data/data';

export interface ExampleState {
	isLoading: boolean;
	results: Example[];
	value: string;
}

const EXAMPLE_INITIAL_STATE: ExampleState = {
	isLoading: false,
	results: [],
	value: '',
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const ExampleProvider: FC<Props> = ( { children } ) => {

	const [ state, dispatch ] = useReducer( exampleReducer, EXAMPLE_INITIAL_STATE );

	const finishSearch = ( results: Example[] ) => {

		dispatch( {
			type: '[Example] Finish Search',
			payload: results
		} );

	};

	const updateSelection = ( value: string ) => {

		dispatch( {
			type: '[Example] Update Selection',
			payload: value
		} );

	};

	const startSearch = ( value: string ) => {

		dispatch( {
			type: '[Example] Start Search',
			payload: value
		} );

	};

	const cleanResults = () => {

		dispatch( {
			type: '[Example] Clean Query',
		} );

	};

	return (
		<ExampleContext.Provider value={ {
			...state,

			// Methods
			finishSearch,
			updateSelection,
			startSearch,
			cleanResults,
		} }>
			{ children }
		</ExampleContext.Provider>
	);
};