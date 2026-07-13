import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './Dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  //get all tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }
  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }
  //create a new task
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  //delete a tasks
  deleteTask(id: string): string {
    const taskExists = this.tasks.some((task) => task.id === id);
    if (!taskExists) {
      throw new Error(`Task with id ${id} not found`);
    }
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return 'successfully deleted task with id ' + id;
  }
  //update a task status
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
