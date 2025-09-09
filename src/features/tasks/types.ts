export interface Task {
  id: string;
  content: string;
  done: boolean;
}

export interface TasksState {
  tasks: Task[];
  hideDone: boolean;
  loading: boolean;
};