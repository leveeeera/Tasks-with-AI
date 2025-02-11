import {Optional} from "@nestjs/common";

export class CreateTaskDto {
    @Optional()
    taskId: number;
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    @Optional()
    creator: string;
    @Optional()
    createdAt: Date;
    @Optional()
    dueDate: string;
    @Optional()
    taskImage: string;
    completed: boolean;
    comment: string[];
}