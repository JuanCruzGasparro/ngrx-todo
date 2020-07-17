import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/entities/task.entity';

export interface APIResponse {
  data: any;
  errorCode: number;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getAll(): Observable<APIResponse> {
    return of({
      data: [
        new Task('Subir a dev', true),
        new Task('Subir a qa'),
        new Task('Subir a prod'),
      ],
      errorCode: 0,
    });
  }

  add(text: string): Observable<APIResponse> {
    return of({
      data: new Task(text),
      errorCode: 0,
    });
  }
}
