import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id): Task {
    console.log(id);
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log('esto es title de task: ', task.title);
    return task;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log('Eliminando tarea N°: ', id);
    return `Eliminando tarea N°: ${id}`;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log(`Actualizando tarea N°: ${id}`);
    console.log(task);
    return `Tarea N°: ${id} actualizada`;
  }
}
