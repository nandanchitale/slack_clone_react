/* eslint-disable react/jsx-no-undef */
import * as React from 'react';

/**
 * This line creates a context object using the createContext method provided by React. 
 * The context is initialized with a default value of null. 
 * The context object will be used to share data (state) between components in the React tree.
 */
export const StateContext = React.createContext<any>(null);

/**
 * 
 * A functional component named StateProvider is defined.
 * It accepts props of type { reducer: any, initialState: any, children: React.ReactNode }. 
 * This component will serve as the provider for the context created above.
 */
export const StateProvider: React.FC<{ reducer: any, initialState: any, children: React.ReactNode }> = ({ reducer, initialState, children }) => {
    /**
     * Within the StateProvider component, 
     * the Context.Provider component is used to wrap its children.
     * The value prop of the provider is set to the result of the useReducer hook. 
     * This hook initializes the state with the provided reducer function (reducer) and initial state (initialState). 
     * This means that any component consuming this context will have access to the state managed by the useReducer hook.
     */
    return (
        <StateContext.Provider value={React.useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

/**
 * Finally, the StateProvider component is exported as the default export, 
 * making it available for use in other parts of the application.
 */
export const useStateValue = () => React.useContext(StateContext);