import {
    LOAD_TODO_SUCCESS,
    LOAD_TODO_FAILURE,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    RESEND_TODO_FAILURE,
    RESEND_TODO_SUCCESS,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAILURE,
    ADD_TODO_DRAWING
} from '../constant'

const todos = (state = [], action) => {
    switch (action.type) {
        case LOAD_TODO_SUCCESS:
            return action.todos.map((item) => {
                item.sent = true;
                return item
            })

        case ADD_TODO_DRAWING:
            return [
                ...state,
                {
                    _id: action.id,
                    title: action.title,
                    sent: true
                }
            ]

        case ADD_TODO_SUCCESS:
            return state.map(item => {
                if (action.oldId === item._id)
                    item._id = action.todo._id
                return item
            })

        case ADD_TODO_FAILURE:
            return state.map(item => {
                if (action.id === item._id)
                    item.sent = false
                return item
            })

        case RESEND_TODO_SUCCESS:
            return state.map(item => {
                if (action.oldId === item._id) {
                    item._id = action.todo._id
                    item.sent = true
                }
                return item
            })

        case REMOVE_TODO_SUCCESS:
            return state.filter(item => action.id !== item._id)

        case REMOVE_TODO_FAILURE:
        case RESEND_TODO_FAILURE:
        case LOAD_TODO_FAILURE:
        default:
            return state
    }
}

export default todos;