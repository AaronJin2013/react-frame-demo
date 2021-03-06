// Generated by typings
// Source: https://raw.githubusercontent.com/andrew-w-ross/typings-history/1d0ec8beb5ff7dc170d3f92e8310631dd2aba7ae/history.d.ts
declare module '~history/history' {
module otherHistory {
	type Action = 'PUSH' | 'REPLACE' | 'POP';

	type BeforeUnloadHook = () => string | void;

	type CreateLocation = (path: string, locationObj: Object) => Location;

	type CreateHistoryDefault = CreateHistory<HistoryOptions, History>;

	type CreateHistory<TOptions extends HistoryOptions, TResult extends History> = (options?: TOptions) => TResult;

	type Hash = string;

	interface History {
		listenBefore(hook: TransitionHook): Function;
		listen(listener: LocationListener): Function;
		transitionTo(location: Location): void;
		push(location: LocationDescriptor): void;
		replace(location: LocationDescriptor): void;
		go(n: number): void;
		goBack(): void;
		goForward(): void;
		createKey(): LocationKey;
		createLocation: CreateLocation;
		createPath(location: LocationDescriptor): Path;
		createHref(location: LocationDescriptor): Href;
	}

	interface HistoryOptions {
		getUserConfirmation?(message: string, callback: (confirmed: boolean) => void): void;
	}

	interface BeforeUnload {
		listenBeforeUnload?(callBack: () => string | boolean | void): void;
	}

	interface QueryOptions {
		parseQueryString?(queryString: string): any;
		stringifyQuery?(query: Object): string;
	}

	interface BasenameOptions {
		basename?: string;
	}

	type Href = string;

	interface Location{
		pathname?: Pathname;
		search?: Search;
		query?: Query;
		state?: LocationState;
		action?: Action;
		key?: LocationKey;
	}

	interface LocationDescriptorObject{
		pathname?: Pathname;
		search?: Search;
		query?: Query;
		state?: LocationState;
	}

	type LocationDescriptor = LocationDescriptorObject | Path;

	type LocationKey = string;

	type LocationListener = (location: Location) => void;

	type LocationState = Object;

	type Path = string;

	type Pathname = string;

	type Query = Object;

	type Search = string;

	type TransitionHook = (location: Location, callback?: Function) => any;

	export const createLocation: CreateLocation;

	export const createHistory: CreateHistoryDefault;

	export const createHashHistory: CreateHistoryDefault;

	export const createMemoryHistory: CreateHistoryDefault;

	export function useBeforeUnload<TArguments, TResult extends History>(createHistory: CreateHistory<TArguments, TResult>): CreateHistory<TArguments, TResult & BeforeUnload>;

	export function useQueries<TArguments, TResult extends History>(createHistory: CreateHistory<TArguments, TResult>): CreateHistory<TArguments & QueryOptions, TResult>;
	
	export function useBasename<TArguments, TResult extends History>(createHistory: CreateHistory<TArguments, TResult>): CreateHistory<TArguments & BasenameOptions, TResult>;

}

export = otherHistory;
}
declare module 'history/history' {
import main = require('~history/history');
export = main;
}
//declare module 'history' {
//import main = require('~history/history');
//export = main;
//}
