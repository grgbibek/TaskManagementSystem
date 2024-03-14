import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5134/api/tasks'; // Replace 'your-api-url' with your actual API endpoint

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.apiUrl);
  }

  addTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.apiUrl, task);
  }

  editTask(id: number, task: Tasks): Observable<Tasks> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Tasks>(url, task);
  }

  deleteTask(id: number | undefined): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getTaskById(id: number): Observable<Tasks>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Tasks>(url);
  }
}
