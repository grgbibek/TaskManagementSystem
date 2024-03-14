import { Component } from '@angular/core';
import { PriorityEnum, Tasks } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  constructor(private taskService: TaskService, private router: Router) { }

  newTask: Tasks = {
    title: '',
    description: '',
    dueDate: new Date(),
    priority: PriorityEnum.Low
  };

  saveTask(){
    this.newTask.dueDate = new Date(this.newTask.dueDate);
    this.newTask.priority = Number(this.newTask.priority);
    console.log(this.newTask);

    this.taskService.addTask(this.newTask).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
