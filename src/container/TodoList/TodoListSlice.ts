import { createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodoList, postTodo } from "./TodoListThunk";

interface TodoListState {
  todoList: ITodoListItem[];
  todoListLoading: boolean;
  addButtonLoading: boolean;
  currentTodoId: string;
}

const initialState: TodoListState = {
  todoList: [],
  todoListLoading: false,
  addButtonLoading: false,
  currentTodoId: '',
};

export const todoListSlice = createSlice({
  name: 'todo-list',
  initialState,
  reducers: {
    addCurrentTodoId: (state, action) => {
      state.currentTodoId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {state.todoListLoading = true});

    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.todoListLoading = false;
      state.todoList = action.payload;
    });

    builder.addCase(fetchTodoList.rejected, (state) => {state.todoListLoading = false});

    builder.addCase(postTodo.pending, (state) => {state.addButtonLoading = true});
    builder.addCase(postTodo.fulfilled, (state) => {state.addButtonLoading = false});
    builder.addCase(postTodo.rejected, (state) => {state.addButtonLoading = false});

    builder.addCase(deleteTodo.fulfilled, (state) => {state.currentTodoId = ''});
    builder.addCase(deleteTodo.rejected, (state) => {state.currentTodoId = ''});
  }
});

export const todoListReducer = todoListSlice.reducer;
export const { addCurrentTodoId } = todoListSlice.actions;