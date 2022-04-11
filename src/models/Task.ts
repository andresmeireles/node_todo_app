import { Schema, model } from 'mongoose';

export interface Task {
  name: string;
  completed: boolean;
}

const taskSchema = new Schema<Task>({
  name: String,
  completed: Boolean,
});

export default model('Task', taskSchema);
