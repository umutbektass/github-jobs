import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/usersSlice'
import postReducer from './post/postSlice'


export const store = configureStore({
    reducer:{
        users:usersReducer,
        post:postReducer
    }
})

export default store;