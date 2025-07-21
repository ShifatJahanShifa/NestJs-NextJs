import { Module } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import { UsersController } from '../users/controllers/users.controller';
import { UserRepository } from './repositories/user.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
