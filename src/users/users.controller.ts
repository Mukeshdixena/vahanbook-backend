import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() userData: Partial<User>) {
        return this.usersService.create(userData);
    }

    @Get()
    async getAllUsers() {
        return this.usersService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }
}
