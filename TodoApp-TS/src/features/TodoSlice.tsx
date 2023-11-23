import {createSlice} from '@reduxjs/toolkit'


type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
const arr : Todo[]   = [
    {
        id : 1,
        text : 'Zaheer Ahmad',
        completed : true ,
    }, 
    {
        id : 2, 
        text : 'Shahzaib Ahmad',
        completed : false
    },
]

const TodoSlice = createSlice({
    name : 'Todos',
    initialState : arr ,
    reducers : {
        addTodo (state , action) {
            let obj : Todo = {
                id : state.length + 1,
                text : action.payload,
                completed : false
            }
            state.push(obj)
        }
    }
})

export default TodoSlice.reducer;
export const {addTodo} = TodoSlice.actions