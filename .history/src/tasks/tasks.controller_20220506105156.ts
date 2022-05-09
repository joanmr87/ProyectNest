import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'Retrieving Tasksss';
  }

  @Post()
  createTask(): string {
    return 'Creating Task';
  }
}
