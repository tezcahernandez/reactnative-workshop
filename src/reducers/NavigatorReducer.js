const initialState = "MainNews";

const viewsHistory = [];

export default (state = initialState, action) => {    
    const { type } = action;
    switch (type) {
        case 'navigateTo': {
            let newState = JSON.parse(JSON.stringify(state));
            viewsHistory.push(action.idView);
            newState = action.idView;
            return newState;
            break;
        }
        case 'navigateToHome':{
            let newState = JSON.parse(JSON.stringify(state));
            newState = 'MainNews'
            return newState;
        }

        case 'back': {
            let newState = JSON.parse(JSON.stringify(state));
            if (viewsHistory.length <= 2) return state;
            newState = viewsHistory[viewsHistory.length - 2];
            return newState;
            break;
        }

        default:
            return state;
            break;
    }
}