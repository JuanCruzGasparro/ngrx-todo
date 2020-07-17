import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../store';
import { addTask } from '../store/todo/todo.actions';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent implements OnInit {
  public taskForm: FormGroup;

  constructor(private store: Store<State>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      text: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.store.dispatch(addTask({ text: this.taskForm.value.text }));
      this.taskForm.reset();
    }
  }
}
