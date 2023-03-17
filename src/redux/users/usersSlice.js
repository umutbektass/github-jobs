import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const isLogin= localStorage.getItem("login") !=null? JSON.parse(localStorage.getItem("login")) : false

 const userId= localStorage.getItem("userId") !=null? JSON.parse(localStorage.getItem("userId")) : []

 

 export const addEmployerUsers = async(data)=>{
    const post = {"adSoyad":data.adSoyad,"email":data.email,"telefon":data.telefon,"sirketAdi":data.sirketAdi,"vergiNo":data.vergiNo,"password":data.password,"type":"emplorer"}
    await axios.post("http://localhost:3002/employer",post)}

    export const getEmployerUsers =createAsyncThunk('getUsers', async()=>{
        const res=   await axios.get("http://localhost:3002/employer")
        return res.data;
    })





export const usersSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
        login:isLogin,
        user:userId
    },
    reducers:{
        loginTrue:(state,actions)=>{
             localStorage.setItem("login",true)
          localStorage.setItem("userId",JSON.stringify(actions.payload))
          let value = (JSON.parse(localStorage.getItem("userId")))
            console.log(value.id , value.sirketAdi)
        },
        loginFalse:(state,action)=>{
           localStorage.setItem("login",false)
           localStorage.removeItem("userId")
        }
    },
    extraReducers:{
        [getEmployerUsers.fulfilled] :(state,action)=>{
            state.users=action.payload
            
        }
    }
})
export const useru = state=> state.users.filter(u=>u.id==localStorage.getItem("userId"))

export const {loginTrue,loginFalse}=usersSlice.actions;
export default usersSlice.reducer;