import {Body, Controller, Get, Post} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {CreateTaskDto} from "./task-dto/create-task.dto";
import {Task} from "./entities/task.entity";

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    // CREATE NEW TASK
    @Post('create')
    async create(@Body() createTaskDto: Partial<Task>) {
        try {
            return await this.taskService.create(createTaskDto);
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
