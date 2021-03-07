import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type User = {
    name: String
}

export type UserListState = {
    user: User[]
    loading: boolean
    error: boolean
}

const initialState: UserListState = {
    user: [],
    loading: false,
    error: false
}

const userListSlice = createSlice({
    name: 'userList',
    initialState: initialState,
    reducers: {},
});

export default userListSlice.reducer;
