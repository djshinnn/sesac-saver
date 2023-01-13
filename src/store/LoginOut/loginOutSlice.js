// import { createSlice } from "@reduxjs/toolkit";

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   getAuth,
//   updatePassword,
// } from "firebase/auth";

// import { auth } from "../../firebase/firebase";

// const initialState = { user: "" };

// const loginOutSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     async login() {
//       onAuthStateChanged(auth, (currentUser) => {
//         initialState.user = currentUser;
//       });
//     },
//     async logout() {
//       await signOut(auth);
//     },
//   },
//   extraReducers: (builder) => {},
// });

// export const loginOutActions = loginOutSlice.actions;

// export default loginOutSlice.reducers;
