import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "0", name: "Arian Lebowski" },
	{ id: "1", name: "Neil Armstrong" },
	{ id: "2", name: "Clarian Nolan" },
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

// a selector function which gives us the entire users from the state (pulls out of it)
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
