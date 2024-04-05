/**
 * object initialState is defined. 
 * It represents the initial state of the application. 
 * In this case, it contains a single property user initialized to null.
 */
export const initialState = {
    user: null,
};

/**
 * Another object named actionTypes is defined to hold action type constants. 
 * In this case, there's only one action type defined: "SET_USER".
 */
export const actionTypes = {
    SET_USER: "SET_USER"
};

/**
 * The reducer function is defined. 
 * This function takes two parameters: state and action .
 * @param state  (representing the current state of the application)
 * @param action (representing the action dispatched to update the state)
 * @returns 
 */
const reducer = (state: any, action: any) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_USER:
            return { ...state, user: action.user };
        default:
            return state;
    }
}

export default reducer;