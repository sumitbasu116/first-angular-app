import { Component, Input } from '@angular/core';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
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
