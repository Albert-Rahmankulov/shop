import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(

    'shop/fetchProducts', async (sortingState) => {
        try {
            // let skipValue = `&skip=${skip}`
            // сортировка: title price stock

            const responses = {
                response1: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12`),
                response2: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=12`),
                response3: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=24`),
                response4: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=36`),
                response5: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=48`),
                response6: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=60`),
                response7: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=72`),
                response8: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=84`),
                response9: await axios.get(`https://dummyjson.com/products?sortBy=${sortingState}&order=asc&limit=12&skip=96`),
            }
            console.log(responses);

            return responses;

        } catch (error) {
            console.log('Ошибка получения данных', error);

        }
    }
)

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        data: null,
        status: null,
        error: null,
    },
    reducers: {
        setSortingValue: (state, action) => {
            state.sorting = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.shop = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            })
    },

})

export default shopSlice.reducer;