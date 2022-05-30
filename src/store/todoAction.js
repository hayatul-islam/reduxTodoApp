
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = () => {
    return {
        type: DELETE_TODO
    }
}

export const removeTodo = () => {
    return {
        type: REMOVE_TODO
    }
}

