import {Body, Controller, Get, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {CreateTaskDto} from "./task-dto/create-task.dto";

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    // CREATE NEW TASK
    @Post('create')
    create(@Body() createTaskDto: CreateTaskDto) {
        try {
            return this.taskService.create(createTaskDto);
        }catch (error) {
            throw new Error(error);
        }

    }

    // GET ALL TASKS
    @Get('all')
    findAll(){
        return this.taskService.findAll()
    }
}
