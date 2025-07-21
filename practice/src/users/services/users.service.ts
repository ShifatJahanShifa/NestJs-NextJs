import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}
  
  async findAllUsers(): Promise<User[]> {
    const data: User[] = await this.userRepository.findAllUsers();
    return data;
  }

  async getUserById(id: string): Promise<User> {
    const data: User | undefined = await this.userRepository.getUserById(id);

    if(data === undefined) 
    {
      throw new NotFoundException('User not found');
    }

    return data;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    const data: User = await this.userRepository.createUser(user);
    // i am not using dto at the time of response
    return data;
  }


  async updateUser(id: string, user: UpdateUserDto): Promise<User> {
    const data: User = await this.userRepository.updateUser(user, id);
    console.log(data)
    if(!data) 
    {
      throw new NotFoundException("user not found");
    }

    return data;
  }

  async deleteUser(id: string) {
    await this.userRepository.deleteUser(id);
  }
}
