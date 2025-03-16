import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  //@Output() addTaskEventEmitVar=new EventEmitter<NewTask>();

  private taskService = inject(TasksService);

  enteredTitle = '';
  enteredSummary = '';
  eneteredDate = '';

  cancelAddTaskWindowEmitEvent(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addingNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.eneteredDate
    },this.userId);
    this.close.emit();
  }
}
