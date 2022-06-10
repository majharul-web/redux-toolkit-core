import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data;
    }
)
export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.payload;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        });

    }
})

export const {} = postSlice.actions;

export default postSlice.reducer;