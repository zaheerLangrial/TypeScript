import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

export const fetchData = createAsyncThunk('ApiData' , async () => {
    try {
        const res = await axios.get('https://c9b3-110-39-21-146.ngrok-free.app/todolist/',  { headers: {"ngrok-skip-browser-warning": "tests"} });
        console.log(res.data)
        return res.data  
    } catch (error) {
        console.log(error)
    }
})


const TodoSlice = createSlice({
    name: 'Api Fetch Data',
    initialState: {
        todos: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
    reducers: {
        addTodo (state , action) {
            axios.post(
                "https://c9b3-110-39-21-146.ngrok-free.app/todolist/",
                {title : action.payload},
                { headers: { "ngrok-skip-browser-warning": "tests" } }
              );
        }, 
        deleteTodo (state , action) {
            axios.delete(
                `https://c9b3-110-39-21-146.ngrok-free.app/todolist/${action.payload}/`,
                { headers: { "ngrok-skip-browser-warning": "tests" } }
              );
        },
        updateTodo (state , action) {
            axios.patch(
                `https://c9b3-110-39-21-146.ngrok-free.app/todolist/${action.payload.id}/`, 
                {completed : !action.payload.completed},
                { headers: { "ngrok-skip-browser-warning": "tests" } }
              );
        }
    }
})

export default TodoSlice.reducer
export const {addTodo , deleteTodo , updateTodo} = TodoSlice.actions