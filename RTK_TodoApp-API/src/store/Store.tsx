import {configureStore} from '@reduxjs/toolkit'
import TodosSlice from '../Features/TodosSlice'

const Store = configureStore({
    reducer : {
        todos : TodosSlice
    }
})
export default Store
export type AppDispatch = typeof Store.dispatch;