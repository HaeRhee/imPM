export type TTodo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export interface companyValues {
  name: string;
  description: string;
  image: string;
}

export interface Item {
  todoItem: TTodo;
}
export interface changeStateValue {
  [key: string]: unknown;
}
