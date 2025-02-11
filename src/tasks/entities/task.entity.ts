import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ type: 'enum', enum: ['High', 'Medium', 'Low'], default: 'Medium' })
    priority: 'High' | 'Medium' | 'Low';

    @Column()
    dueDate: Date;

    @Column()
    taskImage: string;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;
}
