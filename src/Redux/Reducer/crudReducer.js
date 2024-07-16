const initialState = {
    user : [],
    err : null
}

const crudReducer = (state=initialState , action) => {
    switch(action.type){
        case 'viewuser' : 
            return {
                ...state,
                user : action.payload,
                error : null
            }

        case 'viewusererr' :
            return {
                ...state,
                error : action.payload
            }

        case 'addrecord' :
             return {
                ...state,
                user : [...state.user],
                error : null
            }

        case 'deleteUser' :
            return {
                ...state,
                user : state.user.filter(val => val.id != action.payload),
                error : null
            }

        default :
            return state
    }
}

export default crudReducer