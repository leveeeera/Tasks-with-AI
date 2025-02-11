export class UpdateTaskDTO {
    taskId?: number;
    title?: string;
    description?: string;
    priority?: 'High' | 'Medium' | 'Low';
    creator?: string;
    createdAt?: Date;
    dueDate?: string;
    taskImage?: string;
    completed?: boolean;
    comment?: string[];
}