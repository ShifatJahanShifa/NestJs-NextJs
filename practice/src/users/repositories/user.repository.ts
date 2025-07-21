import { randomUUID } from "crypto";
import { User } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";


@Injectable()
export class UserRepository {
    // keeping the user objects here
    private users: User[] = [
        {
            id: randomUUID(),
            username: 'alice',
            email: 'alice@gmail.com',
            age: 22,
            country: 'USA'
        },
        {
            id: randomUUID(),
            username: 'bob',
            email: 'bob@gmail.com',
            age: 24,
            country: 'canada'
        },
        {
            id: randomUUID(),
            username: 'charlie',
            email: 'charlie@gmail.com',
            age: 23,
            country: 'brazil'
        },
    ];

    // for get methods, how to implement limit here. 
    async findAllUsers(): Promise<User[]> {
        return await this.users;
    }

    // get get:id 
    async getUserById(id: string): Promise<User | undefined> {
        const user: User | undefined = await this.users.find(user => user.id === id);
        return user;
    }

    // post , create user 
    async createUser(user: CreateUserDto): Promise<User> {
        const newUser: User = { ...user, id: randomUUID()};
        await this.users.push(newUser)
        return this.users[this.users.length-1]
    }

    // patch 
    async updateUser(user: UpdateUserDto, id: string): Promise<User> {
        const userIndex = this.users.findIndex(user => user.id === id)

        this.users[userIndex] = await { ...this.users[userIndex], ...user}
        return this.users[userIndex]
    }


    // delete 
    async deleteUser(id: string) {
        const userIndex = this.users.findIndex(user => user.id === id)

        await this.users.splice(userIndex,1)
    }
}