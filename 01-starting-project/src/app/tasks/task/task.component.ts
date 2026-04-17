import { DatePipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  task = input.required<Task>();

  private tasksService = inject(TasksService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task().id);
  }
}
