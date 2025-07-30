import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;
})

const productSlice = createSlice({
    name: 'products',
    initialState: { items: [], loding: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            });
    }
})

export default productSlice.reducer;