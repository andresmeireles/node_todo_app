import { Schema, model } from 'mongoose';

export interface Task {
  name: string;
  completed: boolean;
}

const taskSchema = new Schema<Task>({
  name: { type: String, required: [true, 'name must be provided!'], trim: true, maxlength: [20, 'cannot be more tha 20'] },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default model('Task', taskSchema);
