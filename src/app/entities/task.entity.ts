import { v4 as uuidv4 } from 'uuid';

export class Task {
  public id: string;
  public text: string;
  public isChecked: boolean;

  constructor(message: string, isChecked?: boolean) {
    this.id = uuidv4();
    this.text = message;
    this.isChecked = isChecked ? isChecked : false;
  }
}
