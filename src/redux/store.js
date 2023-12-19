import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todoSlice';
import UsersReducer from './userSlice';

const store = configureStore({
    reducer: {
        todo: TodoReducer,
        users: UsersReducer,
    }
});
export default store;