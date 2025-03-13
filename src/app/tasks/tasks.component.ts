import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  //private taskService:TasksService;
  constructor(private taskService:TasksService){
    this.taskService =taskService;
  }

  @Input({required:true}) userId!:string;
  @Input() userName?:string;
  
  consumeUserId(id:string){
    this.userId=id;
  }

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onDoneTheTask(id: string){
    this.taskService.removeTask(id);
  }

  isAddingTask = false;
  onAddingTask(){
    this.isAddingTask = true;
  }

  cancelTaskWindowEventConsumer(){
    this.isAddingTask = false;
  }

  addNewTask(taskData:NewTask){
    this.taskService.addingNewTask(taskData,this.userId);
    this.isAddingTask = false;
  }
}
