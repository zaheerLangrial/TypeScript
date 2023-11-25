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
        },
        upDateTodo (state , action) {
            console.log(action.payload.text)
            // let obj = action.payload;
            return state.map((todo) => {
                if(todo.id === action.payload.id) {
                    return{...todo , text : action.payload.text}
                }
                return todo
            })
            // obj?.text  = action.payload.text;
            // console.log(obj?.text)
        }
    }
})

export default TodoSlice.reducer;
export const {addTodo , upDateTodo} = TodoSlice.actions