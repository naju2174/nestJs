import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TasksModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
