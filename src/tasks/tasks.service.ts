import { Injectable } from '@nestjs/common';
import {CreateTaskDto} from "./task-dto/create-task.dto";

@Injectable()
export class TasksService {
    private tasks: CreateTaskDto[] = [];

    create(task: CreateTaskDto) {
        try {
            this.tasks.push(task);
            return {"Task create successfully": task };
        }catch (err){
            console.log(err);
        }

    }
    findAll(){
        return this.tasks;
    }
}
