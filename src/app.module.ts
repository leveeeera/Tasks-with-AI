import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "./tasks/entities/task.entity";
import * as process from "node:process";
import {DATABASE} from "./config/constants";

@Module({
  imports: [
      TasksModule, UserModule,
      TypeOrmModule.forRoot({
          type: DATABASE.DB_TYPE as any,
          host: DATABASE.DB_HOST,
          port: DATABASE.DB_PORT,
          username: DATABASE.DB_USERNAME,
          password: DATABASE.DB_PASSWORD,
          database: DATABASE.DB_DB,
          entities: [Task],
          synchronize: true,
      }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {

}
