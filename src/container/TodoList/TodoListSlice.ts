import { createSlice } from "@reduxjs/toolkit";
import { fetchTodoList } from "./TodoListThunk";

interface TodoListState {
  todoList: ITodoListItem[];
  todoListLoading: boolean;
}

const initialState: TodoListState = {
  todoList: [],
  todoListLoading: false,
};

export const todoListSlice = createSlice({
  name: 'todo-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      state.todoListLoading = true;
    });

    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.todoListLoading = false;
      state.todoList = action.payload;
    });

    builder.addCase(fetchTodoList.rejected, (state) => {
      state.todoListLoading = false;
    });
  }
});

export const todoListReducer = todoListSlice.reducer;