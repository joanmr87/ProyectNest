import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'Retrieving Tasks';
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log('esto es title de task: ', task.title);
    return task;
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
