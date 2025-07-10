import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() userData: any) {
        return this.userService.create(userData);
    }

    @Get()
    async getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Get('email/:email')
    async getUserByEmail(@Param('email') email: string) {
        return this.userService.findByEmail(email);
    }
}
