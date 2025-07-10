// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwt: JwtService,
    ) { }

    async register(data: { name: string, email: string, phone: string, password: string }) {
        const exists = await this.userService.findByEmail(data.email);
        if (exists) throw new ConflictException('User already exists');

        const hashed = await bcrypt.hash(data.password, 10);
        const user = await this.userService.create({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: hashed,
            role: 'customer',
        });


        return { message: 'Registered', user };
    }

    async login(data: { email: string, password: string }) {
        const user = await this.userService.findByEmail(data.email);
        if (!user || !user.password) throw new UnauthorizedException('Invalid credentials');

        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) throw new UnauthorizedException('Invalid credentials');

        const payload = { sub: user.id, email: user.email };
        const token = this.jwt.sign(payload);

        return { access_token: token, user };
    }
}
