import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskData } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal(DUMMY_TASKS);
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }
  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }
  addTask(task: NewTaskData, userId: string) {
    const newTask = {
      ...task,
      userId,
      id: new Date().getTime().toString(),
    };
    this.tasks.set([...this.tasks(), newTask]);
    this.saveTasks();
  }
  removeTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
