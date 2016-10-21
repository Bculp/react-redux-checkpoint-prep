const initialState = {
	registryItems: []
}

export default (state = initialState, action) => {
    switch(action.type) {
    	case 'ADD_ITEM_TO_REGISTRY' :
    		return Object.assign({}, state, {registryItems: state.registryItems.concat(action.item)}) //passes first spec
    		// return state.registryItems.concat(action.item) //passes second spec

    		//return state.registryItems.push(action.item)
    		break;
    	default:
    	return state
    }
};
