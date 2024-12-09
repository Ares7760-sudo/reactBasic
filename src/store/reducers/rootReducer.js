const initState = {
    users: [
        { id:1, name: 'Ares7760-sudo'},
        { id:2, name: 'Chó nóng'}
    ]
}

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {...state, users};
        case 'ADD_USER':
            let new_id = Math.floor(Math.random() * 1001);
            let new_user = {
                id: new_id,
                name: `anonymous-${new_id}`
            }
            return {...state, users: [...state.users, new_user]}
        default:
            return state;
    }

    return state;
}

export default rootReducer;