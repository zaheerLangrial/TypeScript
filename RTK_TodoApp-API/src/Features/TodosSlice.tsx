import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TODOAPI } from "../Api/api";

export const fetchData = createAsyncThunk('ApiData', async () => {
    try {
        const res = await axios.get(`${TODOAPI}`, { headers: { "ngrok-skip-browser-warning": "tests" } });
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
        addTodo(state, action) {
            try {
                axios.post(
                    `${TODOAPI}`,
                    { title: action.payload },
                    { headers: { "ngrok-skip-browser-warning": "tests" } }
                );
                alert('Your Title Is Added.')
            } catch (error) {
                console.log(error)
            }
        },
        deleteTodo(state, action) {
            axios.delete(
                `${TODOAPI}${action.payload}/`,
                { headers: { "ngrok-skip-browser-warning": "tests" } }
            );
        },
        updateTodo(state, action) {
            axios.patch(
                `${TODOAPI}${action.payload.id}/`,
                { completed: !action.payload.completed },
                { headers: { "ngrok-skip-browser-warning": "tests" } }
            );
            alert('Your Task is Updated... Thanks!')
        },
        titleUpdate (state, aciton) {
            try {
                axios.put(
                    `${TODOAPI}${aciton.payload.id}/`,
                    { title: aciton.payload.title },
                    { headers: { "ngrok-skip-browser-warning": "tests" } }
                );
                alert('Your Title is Updated. Push Ok!')
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export default TodoSlice.reducer
export const { addTodo, deleteTodo, updateTodo, titleUpdate } = TodoSlice.actions