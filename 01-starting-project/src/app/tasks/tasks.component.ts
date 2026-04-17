import { Component, computed, input, signal } from '@angular/core';
import { AddTaskModalComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  name = input.required<string>();
  userId = input.required<string>();
  isAddingTask = signal(false);
  constructor(private tasksService: TasksService) {}

  selectedUserTasks = computed(() => {
    return this.tasksService.getUserTasks(this.userId());
  });

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }
}
