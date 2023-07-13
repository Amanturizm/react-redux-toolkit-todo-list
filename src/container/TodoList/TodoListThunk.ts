import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

export const fetchTodoList = createAsyncThunk(
  'todo-list/fetch',
  async () => {
    const { data: todoList } = await axiosApi<ITodoListApi>('/todo-list.json');

    const formattedTodoList = Object.keys(todoList).map(id => ({ ...todoList[id], id })) ?? [];

    return formattedTodoList;
  }
);