// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PriorityEnum, Tasks } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Tasks[] = [];
  
  showAddForm: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: number | undefined ): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }
}
