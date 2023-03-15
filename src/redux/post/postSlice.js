import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


 export const addPost = async(data)=>{
    const post = {"baslik":data.baslik,"lokasyon":data.lokasyon,"zaman":data.time,"ustbilgi":data.ustbilgi,"aciklama":data.aciklama,"tecrube":data.tecrube,"userId":data.userId}
    await axios.post("http://localhost:3002/post",post)}




    export const getPost =createAsyncThunk('getPost', async()=>{
        const res=   await axios.get("http://localhost:3002/post")
        return res.data;
    })





export const usersSlice = createSlice({
    name:"post",
    initialState:{
        post:[],
        
    },
    reducers:{
    },
    extraReducers:{
        [getPost.fulfilled] :(state,action)=>{
            state.post=action.payload
        }
    }
})

export const post  = state=> state.post;
export default usersSlice.reducer;