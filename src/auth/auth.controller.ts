// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    register(@Body() body: { name: string; email: string; phone: string; password: string }) {
        return this.authService.register(body);
    }

    @Post('login')
    login(@Body() body: { email: string; password: string }) {
        return this.authService.login(body);
    }
}
