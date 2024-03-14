import { Component } from '@angular/core';
import { PriorityEnum, Tasks } from '../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  task: Tasks = {
    title: '',
    description: '',
    dueDate: new Date(),
    priority: PriorityEnum.Low
  };

  id: number = 0;
  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id')); 
      this.loadTask(this.id);
    });

  }

  loadTask(id: number){
    this.taskService.getTaskById(id).subscribe((task) => {
      this.task = task;
    })
  }

  updateTask(){
    this.taskService.editTask(this.id, this.task).subscribe(() => {
      this.router.navigate(['/tasks']);
    })
    
  }
}
