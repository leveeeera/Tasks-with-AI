import { Injectable } from '@nestjs/common';
import {CreateTaskDto} from "./task-dto/create-task.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Repository} from "typeorm";

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

    async create(task: Partial<Task>) {
        try {
            const newTask = this.taskRepo.create(task);
            return await this.taskRepo.save(newTask);
        }catch (err){
            console.log(err);
        }

    }

    async findAll(){
        return await this.taskRepo.find()
    }
}
