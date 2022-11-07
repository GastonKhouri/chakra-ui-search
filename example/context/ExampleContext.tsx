import { createContext } from 'react';
import { Example } from '../interfaces/interfaces';

interface ContextProps {
	isLoading: boolean;
	results: Example[];
	value: string;

	// Methods
	finishSearch: ( results: Example[] ) => void;
	updateSelection: ( value: string ) => void;
	startSearch: ( value: string ) => void;
	cleanResults: () => void;
}

export const ExampleContext = createContext( {} as ContextProps );