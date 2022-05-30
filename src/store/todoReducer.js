import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "./todoAction";

const initialState = {
    list: [],
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {

            }

        default:
            return state
    }
}