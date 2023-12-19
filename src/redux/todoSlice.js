import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [],
        erorr: null
    },
    reducers: {
        createTask: (state, { payload, type }) => {
            payload.id = state.list.length + 1;
            return {
                ...state,
                list: [...state.list, payload]
            }
        }
    }
});

const { createTask } = todoSlice.actions;
export { createTask };

export default todoSlice.reducer;