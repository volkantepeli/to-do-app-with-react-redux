import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name : 'todos',
    initialState: {
        items: [{
            id : '1',
            title : 'For example, pay the house rent.',
            completed : true,
        }],
        activeFilter: 'all',
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        toggle: (state , action) =>{
            const { id } = action.payload;
            const item = state.items.find((item) => item.id === id);
            item.completed = !item.completed; 
        },
        destroy :(state, action) => {
            const  id  = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
        },
        changeActiveFilter: (state,action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            const filtered = state.items.filter(item => item.completed === false);
            state.items = filtered;
        }
    },
});

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;