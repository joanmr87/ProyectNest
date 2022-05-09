import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Nest JS',
      description: 'Curso de Nest JS - Fazt',
      done: false,
    },
    {
      id: 2,
      title: 'TypeScript',
      description: 'Hacer curso de TypeScript',
      done: false,
    },
    {
      id: 3,
      title: 'POO',
      description: 'Hacer curso de POO con TypeScript',
      done: false,
    },
    {
      id: 4,
      title: 'Nest JS avanzado',
      description: 'Hacer curso de Nest JS avanzado en Udemy',
      done: false,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
