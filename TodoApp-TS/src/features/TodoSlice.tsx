import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface Todo {
    id : number ;
    text : string ;
    completed : boolean;
}

const arr  = [
    {
        id : 1,
        text : 'Zaheer Ahmad',
        completed : true ,
    }
]

type TodoState = {
    todos : Todo[]
}
//  

const todoSlice  = createSlice({
    name : 'Todos',
    initialState : arr, 
    reducers : {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({
              id: state.length + 1,
              text: action.payload,
              completed: false,
            });
          },
          toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
              todo.completed = !todo.completed;
            }
          },
    }
})

export const {addTodo , toggleTodo}  = todoSlice.actions;
export default todoSlice.reducer;