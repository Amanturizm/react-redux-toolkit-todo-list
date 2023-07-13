import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/app";

export const fetchTodoList = createAsyncThunk(
  'todo-list/fetch',
  async () => {
    const { data: todoList } = await axiosApi<ITodoListApi>('/todo-list.json');

    const formattedTodoList = Object.keys(todoList).map(id => ({ ...todoList[id], id })) ?? [];

    return formattedTodoList;
  }
);

export const changeStatus = createAsyncThunk<void, { id: string, index: number }, {state: RootState} >(
  'todo-list/change-status',
  async (arg, thunkAPI) => {
    const currentTodo = thunkAPI.getState().todoList.todoList[arg.index];
    await axiosApi.put(`/todo-list/${arg.id}.json`, { ...currentTodo, status: !currentTodo.status });
  }
);