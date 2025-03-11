import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() doCancel = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';
  eneteredDate = '';

  cancelAddTaskWindowEmitEvent(){
    this.doCancel.emit();
  }
}
