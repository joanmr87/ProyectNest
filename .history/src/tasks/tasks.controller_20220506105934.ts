import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'Retrieving Tasksss';
  }

  @Post()
  createTask(@Body() task): string {
    console.log('esto es task: ', task);
    return 'Creating Task';
  }

  @Put()
  updateTask(): string {
    return 'Updating Task';
  }

  @Delete()
  deleteTask(): string {
    return 'Deleting Task';
  }
}
