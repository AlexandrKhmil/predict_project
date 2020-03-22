const initialState = {'name' : 'name'}

export default (state = initialState, action) => {
    switch(action.type) { 
		case 'TEST':
			console.log(1)
			return {'name' : '2'}
        default: 
            return state
    }
}