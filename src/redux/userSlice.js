import { createSelector, createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'users',
    initialState: [
        { id: 1, name: 'Adnan', age: 20 },
        { id: 2, name: 'Praveen', age: 10 },
    ]
});

const allUsers = state => state.users;

const getUser = userId => createSelector(
    allUsers,
    users => {
        return users.find(u => u.id === userId)
    }
);

const getUserName = userId => createSelector(
    getUser(userId),
    user => user.name
)

export {
    getUser,
    getUserName
}
export default userSlice.reducer;