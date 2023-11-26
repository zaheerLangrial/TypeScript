import {createSlice} from '@reduxjs/toolkit'


type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
const arr : Todo[]   = [
    {
        id : 1,
        text : 'Zaheer',
        completed : true ,
    }, 
    {
        id : 2, 
        text : 'Arooba',
        completed : false
    },
    {
        id : 3, 
        text : 'Rimsha',
        completed : false
    },
    {
        id : 4, 
        text : 'Hasfa',
        completed : false
    },
]

const TodoSlice = createSlice({
    name : 'Todos',
    initialState : arr ,
    reducers : {
        addTodo (state , action) {
            if(action.payload) {
                let obj : Todo = {
                    id : state.length + 1,
                    text : action.payload,
                    completed : false
                }
                state.push(obj)
            }else {
                alert('Please Enter Some Text.......')
            }         
        },
        upDateTodo (state , action) {
            return state.map((todo) => {
                if(todo.id === action.payload.id) {
                    return{...todo , text : action.payload.text}
                }
                return todo
            })
        }, 
        deleteTodo (state , action) {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export default TodoSlice.reducer;
export const {addTodo , upDateTodo , deleteTodo} = TodoSlice.actions