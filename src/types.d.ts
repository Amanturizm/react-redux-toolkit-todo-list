interface ITodoListItem {
  id?: string;
  title: string;
  status: boolean;
}

interface ITodoListApi {
  [id: string]: ITodoListItem;
}