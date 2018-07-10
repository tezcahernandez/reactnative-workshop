const initialState = "MainNews";

export default (state = initialState, action) => {
    // action.type;
    // action.idView
    const { type } = action;

    switch (type) {
        case 'navigateTo':
            let newState = JSON.parse(JSON.stringify(state));
            newState = action.idView;
            return newState;
            break;
        default:
            return state;
            break;
    }
}