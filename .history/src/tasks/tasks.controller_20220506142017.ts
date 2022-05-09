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

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks(): { hello: string } {
    return { hello: 'world' };
  }

  @Post()
  createTask(@Body() task: CreateTaskDto) {
    console.log('esto es title de task: ', task.title);
    return task;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): string {
    console.log('Eliminando tarea N°: ', id);
    return 'Deleting Task';
  }

  @Put()
  updateTask(): string {
    return 'Updating Task';
  }
}
