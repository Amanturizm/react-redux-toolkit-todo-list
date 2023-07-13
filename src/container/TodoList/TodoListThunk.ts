import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { RootState } from "../../app/app";

export const fetchTodoList = createAsyncThunk(
  'todo-list/fetch',
  async () => {
    const { data: todoList } = await axiosApi<ITodoListApi>('/todo-list.json');

    return todoList ? Object.keys(todoList).map(id => ({ ...todoList[id], id })) : [];
  }
);

export const postTodo = createAsyncThunk<void, { newTodo: ITodoListItem }>(
  'todo-list/post',
  async (arg) => {
    await axiosApi.post('/todo-list.json', arg.newTodo);
  }
);

export const changeStatus = createAsyncThunk<void, { id: string, index: number }, {state: RootState} >(
  'todo-list/change-status',
  async (arg, thunkAPI) => {
    const currentTodo = thunkAPI.getState().todoList.todoList[arg.index];
    await axiosApi.put(`/todo-list/${arg.id}.json`, { ...currentTodo, status: !currentTodo.status });
  }
);

export const deleteTodo = createAsyncThunk<void, { id: string }>(
  'todo-list/delete',
  async (arg) => {
    await axiosApi.delete(`/todo-list/${arg.id}.json`);
  }
);