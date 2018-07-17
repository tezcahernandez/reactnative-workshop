// MainCart.js

class MainCart extends React.Component {
    render() {
        return (
            <View>
                <Button title={'Agregar item'} onPress={() => {
                    this.props.addItem({ id: '001', name: 'leche', shortDescription: 'Leche LALA 1L', price: '19.80000', amount: 3 })
                }} />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(null, actions)(MainCart);

// actions/index.js
const addItem = (item) => {
    return {
        type: "addItem",
        item: item
    }
}

const updateAmount = (id, amount) => {
    return {
        type: "updateAmount",
        id,
        amount
    }
}


// cartReducer.js
const initialState = {
    id: newId(),
    orderLevelComments: "",
    items: [
        {

        }
    ]

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'addItem': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.items.push({
                "id": action.item.id,
                "name": action.item.name,
                "shortDescription": action.item.shortDescription,
                "price": action.item.price,
                "amount": action.item.amount
            })
            return newState;
        }
            break;
        case 'updateAmount': {
            let newState = JSON.parse(JSON.stringify(state));
            const itemToUpdate = newState.find(x => x.id == action.id);
            itemToUpdate.amount = action.amount;
            return newState;
        }
            break;
        case 'setData': {
            let newState = JSON.parse(JSON.stringify(state));
            newState = action.model;
            return newState;
        }
            break;
        case 'setItems': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.items = action.items;
            return newState;
        }
            break;
        case 'deleteItem': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.items.map((item, index) => {
                if (item.id == action.id) {
                    newState.items.splice(index, 1)
                }
            })
            return newState;
        }
            break;
        case 'deleteAll': {
            let newState = JSON.parse(JSON.stringify(state));
            newState.items = [];
            return newState;
        }
            break;
        default:
            return state;
            break;
    }

}