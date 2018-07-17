const initialState = {
    id: null,
    title: null,
    subtitle: null,
    description: null,
    image: null
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'setCurrentNews':
            let newState = { ...state };
            newState.id = action.id;
            newState.title = action.title;
            newState.subtitle = action.subtitle;
            newState.description = action.description;
            newState.image = action.image
            return newState;
            break;
        default:
            return state;
            break;
    }
}