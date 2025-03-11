import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() doCancel = new EventEmitter();
  @Output() addTaskEventEmitVar=new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  eneteredDate = '';

  cancelAddTaskWindowEmitEvent(){
    this.doCancel.emit();
  }

  onSubmit(){
    this.addTaskEventEmitVar.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.eneteredDate
    });
  }
}
