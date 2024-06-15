// import {type Color} from "../ldld/..d."
export type SideBarState = 'open' | 'close';

export type SubTask = {
  title: string;
  isCompleted: boolean;
};

export type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
};
