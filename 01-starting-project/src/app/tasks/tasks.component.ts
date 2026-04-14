import { Component, computed, input, signal } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  tasks = signal(DUMMY_TASKS);
  selectedUserTasks = computed(() => {
    return this.tasks().filter((task) => task.userId === this.userId());
  });
  onCompleteTask(taskId: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== taskId));
  }
}
