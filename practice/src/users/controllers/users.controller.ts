import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  async findAllUsers() {
    try 
    {
      const data = await this.usersService.findAllUsers();
      return { success: true, users: data };
    } 
    catch (error: any) 
    {
      console.error(error);
      throw new HttpException({ message: 'get user failed' }, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  @HttpCode(200)
  async getUserById(@Param('id') id: string) {
    try 
    {
      const user: User = await this.usersService.getUserById(id);
      return { success: true, user: user}
    }
    catch(error) 
    {
      console.error(error);
      throw new HttpException({ message: 'get one user failed' }, HttpStatus.NOT_FOUND);
    }
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() user: CreateUserDto) {
    try 
    {
      const data: User = await this.usersService.createUser(user);
      return { success: true, user: data };
    }
    catch(error: any)
    {
      console.error(error);
      throw new HttpException({ message: 'Create user failed' }, HttpStatus.BAD_REQUEST);
    }
  }


  @Patch(':id')
  @HttpCode(200)
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    try
    {
      const data: User = await this.usersService.updateUser(id, user);
      return { success: true, user: data };
    }
    catch(error: any)
    {
      console.error(error);
      throw new HttpException({ message: 'Update failed' }, HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: string) {
    try
    {
      await this.usersService.deleteUser(id);
      return { success: true, message: 'User deleted successfully' };
    }
    catch(error: any)
    {
      console.error(error);
      throw new HttpException({ message: 'delete failed'}, HttpStatus.NOT_FOUND);
    }
  }
}
