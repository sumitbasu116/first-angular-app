import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() doCancel = new EventEmitter();

  enteredTitle = signal('');
  enteredSummary = signal('');
  eneteredDate = signal('');

  cancelAddTaskWindowEmitEvent(){
    this.doCancel.emit();
  }
}
