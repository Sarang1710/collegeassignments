export const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { task: action.payload, isCompleted: false }];
        case 'DELETE_TASK':
            state.splice(action.payload, 1);
            return [...state];
        case 'COMPLETE_TASK':
            state[action.payload].isCompleted = !state[action.payload].isCompleted;
            return [...state];
        default:
            return state;
    }
}

export default reducer;