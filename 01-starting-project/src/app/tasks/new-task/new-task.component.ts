import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class AddTaskModalComponent {
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');
  userId = input.required<string>();
  close = output<void>();

  private tasksService = inject(TasksService);

  onSubmit() {
    const formData: NewTaskData = {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate(),
    };
    this.tasksService.addTask(formData, this.userId());
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
